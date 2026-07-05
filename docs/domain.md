# Domain Operations

Public-safe notes for operating `jeongseok.dev` with GitHub Pages. Do not add registrar account screenshots, billing details, contact addresses, private emails, transfer codes, or recovery information to this repository.

Last reviewed: 2026-07-05.

## Intended State

- Production domain: `https://jeongseok.dev/`
- `www.jeongseok.dev` should redirect to `jeongseok.dev`.
- GitHub Pages repository: `jslee02/jslee02.github.io`
- GitHub Pages publishing source: GitHub Actions workflow in `.github/workflows/deploy.yml`
- Custom domain configured in GitHub Pages: `jeongseok.dev`
- DNS provider UI: Squarespace Domains

GitHub Pages with a custom GitHub Actions workflow does not require a committed `CNAME` file. The custom domain is configured in the repository's Pages settings or through the GitHub API.

## DNS Records

Required records:

```txt
Type   Host  Value
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
CNAME  www   jslee02.github.io
```

Optional IPv6 records:

```txt
Type   Host  Value
AAAA   @     2606:50c0:8000::153
AAAA   @     2606:50c0:8001::153
AAAA   @     2606:50c0:8002::153
AAAA   @     2606:50c0:8003::153
```

Records that can remain:

- `_domainconnect` CNAME used by Squarespace domain management.
- Public Google ownership-verification CNAMEs, if still needed for Google services.

Records/rules that should not remain when GitHub Pages is production:

- Squarespace forwarding rules to Google Sites.
- Apex/root `A` records pointing to Squarespace IPs such as `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, or `198.49.23.145`.
- `www` CNAME pointing to `ext-sq.squarespace.com`.

## GitHub Pages Settings

Configure the custom domain:

```bash
gh api --method PUT repos/jslee02/jslee02.github.io/pages \
  -f cname=jeongseok.dev \
  -f build_type=workflow
```

After DNS is correct and GitHub has issued the certificate, enforce HTTPS:

```bash
gh api --method PUT repos/jslee02/jslee02.github.io/pages \
  -f cname=jeongseok.dev \
  -f build_type=workflow \
  -F https_enforced=true
```

If this returns `The certificate does not exist yet`, wait for GitHub Pages to finish certificate provisioning and retry. `.dev` domains are HTTPS-first in modern browsers, so certificate readiness matters before considering the cutover complete.

## Verification

Check authoritative DNS:

```bash
dig @ns-cloud-d1.googledomains.com jeongseok.dev A +noall +answer
dig @ns-cloud-d1.googledomains.com www.jeongseok.dev CNAME +noall +answer
```

Check public resolvers:

```bash
dig @1.1.1.1 jeongseok.dev A +short
dig @8.8.8.8 www.jeongseok.dev CNAME +short
```

Check GitHub Pages API state:

```bash
gh api repos/jslee02/jslee02.github.io/pages \
  --jq '{status, cname, html_url, build_type, https_enforced}'

gh api repos/jslee02/jslee02.github.io/pages/health
```

Run the repository verification script:

```bash
npm run verify:deployment
```

Route checks only pass when the final HTTP response is served by `GitHub.com`; this avoids treating a cached Squarespace parking/forwarding response as a successful GitHub Pages deployment.

If the local resolver has stale DNS, run the DNS portion against a public resolver:

```bash
DNS_RESOLVER=1.1.1.1 npm run verify:deployment
```

During DNS propagation, authoritative DNS can already be correct while a local resolver still returns old Squarespace values. That is a cache issue, not necessarily a DNS configuration issue.

## Cutover Checklist

1. Deploy the GitHub Pages site successfully.
2. Configure `jeongseok.dev` as the GitHub Pages custom domain.
3. Remove Squarespace forwarding to Google Sites.
4. Replace Squarespace default DNS records with the GitHub Pages records above.
5. Verify authoritative DNS and at least one public resolver.
6. Wait for GitHub Pages health to report a valid domain and HTTPS eligibility.
7. Enable HTTPS enforcement.
8. Verify `https://jeongseok.dev/`, `https://www.jeongseok.dev/`, and the main site routes.
