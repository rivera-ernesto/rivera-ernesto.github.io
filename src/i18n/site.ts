// Routes, links and interface strings. The page copy lives in src/data/copy.ts.

export type Lang = 'en' | 'es';

export const LINKS = {
  github: 'https://github.com/rivera-ernesto',
  linkedin: 'https://www.linkedin.com/in/rivera-ernesto/',
  stackoverflow: 'https://stackoverflow.com/users/1049134/ernesto-rivera',
  sponsors: 'https://github.com/sponsors/rivera-ernesto',
};

export const UI = {
  en: {
    skip: 'Skip to content',
    nav: 'Sections',
    theme: 'Dark theme',
    themeHint: 'Switch between light and dark theme',
    langSwitch: 'Español',
    langSwitchLabel: 'Leer esta página en español',
    home: 'Ernesto Rivera, home page',
  },
  es: {
    skip: 'Saltar al contenido',
    nav: 'Secciones',
    theme: 'Tema oscuro',
    themeHint: 'Cambiar entre tema claro y oscuro',
    langSwitch: 'English',
    langSwitchLabel: 'Read this page in English',
    home: 'Ernesto Rivera, inicio',
  },
} as const;

/** Prefix a site path with the base (and /es/ for Spanish). Always ends in "/". */
export function href(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${lang === 'es' ? 'es/' : ''}${path}`;
}

/** Path to a file in public/, with the base. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}
