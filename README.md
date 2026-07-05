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
