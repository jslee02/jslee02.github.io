# jeongseok.dev

Source for Jeongseok "JS" Lee's personal homepage.

The site is built with Astro, a MIT-licensed static-site framework, and is deployed with GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment Verification

```bash
npm run verify:deployment
```

This checks the GitHub Pages fallback URL, the custom domain DNS records, the main public routes, the PDF CV, and GitHub Pages health. During DNS propagation, a local resolver may still return stale records; use `DNS_RESOLVER=1.1.1.1 npm run verify:deployment` to check DNS through a public resolver.

## Content Updates

- Profile, links, skills, career, and education: `src/data/profile.ts`
- Project cards and featured work: `src/data/projects.ts`
- Publications, patents, talks, and service: `src/data/research.ts`
- English and Korean route copy: `src/i18n/content.ts`
- CV source: `github.com/jslee02/CV`
- Public PDF CV: `public/cv/jeongseok-lee-cv.pdf`
- Images: `public/assets/`

## Internationalization

English is the default language at `/`. Korean best-effort pages live under `/ko/`.

The primary site is a single-page profile. Shared components receive a `locale` prop, and localized strings/data are composed in `src/i18n/content.ts`.

Primary navigation links point to homepage anchors such as `/#software` and `/ko/#software`. Legacy route wrappers such as `/software/`, `/research/`, `/cv/`, and `/contact/` are kept as lightweight compatibility redirects to those anchors.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages after pushes to `master`.

The GitHub Pages fallback URL is:

```txt
https://jslee02.github.io/
```

Domain operations are documented in [`docs/domain.md`](docs/domain.md). The intended DNS for `jeongseok.dev` is:

```txt
jeongseok.dev.      A     185.199.108.153
jeongseok.dev.      A     185.199.109.153
jeongseok.dev.      A     185.199.110.153
jeongseok.dev.      A     185.199.111.153
www.jeongseok.dev.  CNAME jslee02.github.io.
```

Optional IPv6 records:

```txt
jeongseok.dev.      AAAA  2606:50c0:8000::153
jeongseok.dev.      AAAA  2606:50c0:8001::153
jeongseok.dev.      AAAA  2606:50c0:8002::153
jeongseok.dev.      AAAA  2606:50c0:8003::153
```

The production path is:

- DNS must point the apex domain to GitHub Pages A records and `www` to `jslee02.github.io`.
- Configure `jeongseok.dev` as the GitHub Pages custom domain:

```bash
gh api --method PUT repos/jslee02/jslee02.github.io/pages \
  -f cname=jeongseok.dev \
  -f build_type=workflow
```

- After GitHub Pages health reports the domain as valid and HTTPS eligible, enforce HTTPS in GitHub Pages settings or with:

```bash
gh api --method PUT repos/jslee02/jslee02.github.io/pages \
  -f cname=jeongseok.dev \
  -f build_type=workflow \
  -F https_enforced=true
```
