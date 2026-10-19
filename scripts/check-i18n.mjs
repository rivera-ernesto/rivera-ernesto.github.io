// Both languages, all the time: every English page under src/pages must have a Spanish twin under
// src/pages/es, and vice versa. Pages marked "// i18n: bilingual" are exempt. Runs before every build.
// (Same guard as the Barranco site, with the default language flipped: English at the root.)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = 'src/pages';
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.astro') ? [p] : [];
});
const exempt = (p) => /\/\/ i18n: (redirect|bilingual)/.test(readFileSync(p, 'utf8'));
const all = walk(root).filter((p) => !exempt(p)).map((p) => relative(root, p));
const en = new Set(all.filter((p) => !p.startsWith('es/')));
const es = new Set(all.filter((p) => p.startsWith('es/')).map((p) => p.slice(3)));
const missing = [...[...en].filter((p) => !es.has(p)).map((p) => `es/${p}`), ...[...es].filter((p) => !en.has(p))];
if (missing.length) {
  console.error(`i18n check FAILED: missing counterpart for\n  ${missing.join('\n  ')}`);
  process.exit(1);
}
console.log(`i18n check OK: ${en.size} pages in both languages`);
