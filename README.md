# Ernesto Rivera · portfolio

Source of https://rivera-ernesto.github.io/ — one page in English (root) and Spanish (`/es/`),
built with [Astro](https://astro.build) 7.3.8. Page text is in `src/data/copy.ts`; interface words in `src/i18n/site.ts`.

```bash
npm ci
npm run dev        # http://localhost:4321/
npm run build      # checks the en/es pairs, then builds to dist/
npm run check      # astro check (strict TypeScript)
npm run og         # regenerates public/og-1200x630.png
```

This is a GitHub *user* site: it shares its address with the project sites under it
(`/desks/`, `/federacion-kit/`, `/AcknowledgementsBundle/`). So no route may take one of those
names, `robots.txt` here speaks for all of them, and the theme is stored under the key
`portfolio:theme`.

Deploy: `.github/workflows/deploy.yml` (GitHub Actions). See the comment at its top before the
first switch from the legacy branch build.

Code: MIT. Text and photos: © Ernesto Rivera.
