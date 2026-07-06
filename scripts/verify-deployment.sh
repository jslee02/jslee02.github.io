#!/usr/bin/env bash
set -euo pipefail

domain="${1:-jeongseok.dev}"
github_pages_host="${2:-jslee02.github.io}"
repo="${3:-jslee02/jslee02.github.io}"
dns_resolver="${DNS_RESOLVER:-}"

github_pages_ips=(
  "185.199.108.153"
  "185.199.109.153"
  "185.199.110.153"
  "185.199.111.153"
)

routes=(
  "/"
  "/software/"
  "/work/"
  "/research/"
  "/cv/"
  "/contact/"
  "/ko/"
  "/ko/software/"
  "/ko/work/"
  "/ko/research/"
  "/ko/cv/"
  "/ko/contact/"
  "/cv/jeongseok-lee-cv.pdf"
  "/sitemap.xml"
)

failures=0

section() {
  printf '\n== %s ==\n' "$1"
}

check_route() {
  local url="$1"
  local result code final_url headers server
  headers="$(mktemp)"
  result="$(curl -sS -L -D "$headers" -o /dev/null -w '%{http_code} %{url_effective}' "$url" || true)"
  code="${result%% *}"
  final_url="${result#* }"
  server="$(
    awk '
      BEGIN { IGNORECASE = 1 }
      /^server:/ { value = $0 }
      END {
        sub(/^[Ss]erver:[[:space:]]*/, "", value)
        gsub(/\r/, "", value)
        print value
      }
    ' "$headers"
  )"
  rm -f "$headers"

  if [[ "$code" == "200" ]]; then
    if [[ "$server" == "GitHub.com" ]]; then
      if [[ "$final_url" != "$url" ]]; then
        printf 'OK   %s -> %s\n' "$url" "$final_url"
      else
        printf 'OK   %s\n' "$url"
      fi
    else
      printf 'FAIL %s returned HTTP 200 from %s, expected GitHub.com\n' "$url" "${server:-unknown server}"
      failures=$((failures + 1))
    fi
  else
    printf 'FAIL %s returned HTTP %s\n' "$url" "$code"
    failures=$((failures + 1))
  fi
}

dig_query() {
  if [[ -n "$dns_resolver" ]]; then
    dig "@${dns_resolver}" "$@"
  else
    dig "$@"
  fi
}

section "GitHub Pages routes"
for route in "${routes[@]}"; do
  check_route "https://${github_pages_host}${route}"
done

section "DNS records"
if [[ -n "$dns_resolver" ]]; then
  printf 'Resolver: %s\n' "$dns_resolver"
else
  printf 'Resolver: system default\n'
fi

mapfile -t apex_records < <(dig_query +short "$domain" A | sort)
mapfile -t www_cname_records < <(dig_query +short "www.${domain}" CNAME | sed 's/\.$//' | sort)

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
