// Ernesto Rivera's portfolio (Astro). A GitHub *user* site: it lives at the root of
// rivera-ernesto.github.io, the same origin as the project sites (/desks/, /federacion-kit/,
// /AcknowledgementsBundle/). Never create a route with one of those names.
// English at the root, Spanish under /es/ (prefixDefaultLocale: false).
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The deploy workflow passes the values from actions/configure-pages; locally the production
// values apply, so a local build is byte-for-byte the deploy build.
const SITE_URL = (process.env.SITE_URL || 'https://rivera-ernesto.github.io').replace(/\/+$/, '');
const BASE_PATH = `/${(process.env.BASE_PATH || '/').replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',
  output: 'static',
  // Astro 7's default ('jsx') drops spaces between inline elements without a warning.
  compressHTML: true,
  // One small stylesheet: inline it so the first paint needs no extra request.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } } })],
});
