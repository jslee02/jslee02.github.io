#!/usr/bin/env bash
set -euo pipefail

domain="${1:-jeongseok.dev}"
github_pages_host="${2:-jslee02.github.io}"
repo="${3:-jslee02/jslee02.github.io}"

github_pages_ips=(
  "185.199.108.153"
  "185.199.109.153"
  "185.199.110.153"
  "185.199.111.153"
)

routes=(
  "/"
  "/work/"
  "/research/"
  "/cv/"
  "/contact/"
  "/cv/jeongseok-lee-cv.pdf"
  "/sitemap.xml"
)

failures=0

section() {
  printf '\n== %s ==\n' "$1"
}

check_route() {
  local url="$1"
  local code
  code="$(curl -sS -o /dev/null -w '%{http_code}' "$url" || true)"
  if [[ "$code" == "200" ]]; then
    printf 'OK   %s\n' "$url"
  else
    printf 'FAIL %s returned HTTP %s\n' "$url" "$code"
    failures=$((failures + 1))
  fi
}

section "GitHub Pages routes"
for route in "${routes[@]}"; do
  check_route "https://${github_pages_host}${route}"
done

section "DNS records"
mapfile -t apex_records < <(dig +short "$domain" A | sort)
mapfile -t www_cname_records < <(dig +short "www.${domain}" CNAME | sed 's/\.$//' | sort)

printf 'A     %s -> %s\n' "$domain" "${apex_records[*]:-(none)}"
printf 'CNAME www.%s -> %s\n' "$domain" "${www_cname_records[*]:-(none)}"

for expected_ip in "${github_pages_ips[@]}"; do
  if printf '%s\n' "${apex_records[@]}" | grep -Fxq "$expected_ip"; then
    printf 'OK   apex has %s\n' "$expected_ip"
  else
    printf 'FAIL apex missing %s\n' "$expected_ip"
    failures=$((failures + 1))
  fi
done

if [[ "${#www_cname_records[@]}" -eq 1 && "${www_cname_records[0]}" == "$github_pages_host" ]]; then
  printf 'OK   www CNAME points to %s\n' "$github_pages_host"
else
  printf 'FAIL www CNAME should point to %s\n' "$github_pages_host"
  failures=$((failures + 1))
fi

section "Custom domain routes"
for route in "${routes[@]}"; do
  check_route "https://${domain}${route}"
done

if command -v gh >/dev/null 2>&1; then
  section "GitHub Pages health"
  gh api "repos/${repo}/pages" \
    --jq '{status, cname, html_url, build_type, https_enforced, protected_domain_state, pending_domain_unverified_at}'
  gh api "repos/${repo}/pages/health" || true
else
  section "GitHub Pages health"
  printf 'Skipping GitHub API checks because gh is not installed.\n'
fi

if [[ "$failures" -gt 0 ]]; then
  printf '\nDeployment verification failed with %d issue(s).\n' "$failures"
  exit 1
fi

printf '\nDeployment verification passed.\n'
