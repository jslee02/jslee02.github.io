# jeongseok.dev

Source for Jeongseok "JS" Lee's personal homepage.

The site is built with Astro, a MIT-licensed static-site framework, and is configured for GitHub Pages with the custom domain `jeongseok.dev`.

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

This checks the GitHub Pages fallback URL, the custom domain DNS records, the main public routes, the PDF CV, and GitHub Pages health.

## Content Updates

- Profile, links, skills, career, and education: `src/data/profile.ts`
- Project cards and featured work: `src/data/projects.ts`
- Publications, patents, talks, and service: `src/data/research.ts`
- CV source: `github.com/jslee02/CV`
- Public PDF CV: `public/cv/jeongseok-lee-cv.pdf`
- Images: `public/assets/`

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages after pushes to `master`.

DNS for `jeongseok.dev` should point to GitHub Pages:

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

After DNS propagates, enable GitHub Pages with GitHub Actions as the source and enforce HTTPS.

The current production path is:

- `https://jslee02.github.io/` serves the built site from GitHub Pages.
- `jeongseok.dev` should be configured as the GitHub Pages custom domain.
- DNS must point the apex domain to GitHub Pages A records and `www` to `jslee02.github.io`.
- After GitHub Pages health reports the domain as valid and HTTPS eligible, enforce HTTPS in GitHub Pages settings or with:

```bash
gh api --method PUT repos/jslee02/jslee02.github.io/pages \
  -f cname=jeongseok.dev \
  -f build_type=workflow \
  -F https_enforced=true
```
