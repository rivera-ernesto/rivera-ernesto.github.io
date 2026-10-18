// This robots.txt is the only one crawlers read for the whole rivera-ernesto.github.io origin,
// project sites included (they do not read /desks/robots.txt and the like). So: allow everything,
// and list only this site's sitemap. Whether a project site's pages are indexed is that site's
// call, made with its own <meta name="robots">.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
