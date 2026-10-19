// Every public sentence of the page, in both languages, in one file so it can be read in one go.
// Figures carry the date they were checked.

import type { ImageMetadata } from 'astro';
import barranco from '../assets/barranco-encuentros.webp';
import mallasa from '../assets/mallasa.jpg';
import verdecito from '../assets/verdecito-site.png';
import barrancoSite from '../assets/barranco-site.png';
import fourtwenty from '../assets/420-reference.jpg';
import desks from '../assets/desks-site.png';
import kit from '../assets/federacion-kit.png';

export type T = { en: string; es: string };

/** A string shared by both languages, or one per language. */
export const tx = (v: string | T, lang: 'en' | 'es'): string => (typeof v === 'string' ? v : v[lang]);
type Link = { label: T; href: string };

export const META = {
  title: {
    en: 'Ernesto Rivera · software engineer, open tools for communities',
    es: 'Ernesto Rivera · ingeniero de software, herramientas abiertas para comunidades',
  },
  description: {
    en: 'Software engineer with more than twenty years on Apple platforms and in open source, who also builds open tools for communities and cultural spaces in Mallasa, La Paz.',
    es: 'Ingeniero de software con más de veinte años en plataformas Apple y en código abierto, que también construye herramientas abiertas para comunidades y espacios culturales en Mallasa, La Paz.',
  },
  updated: { en: 'Updated October 2026', es: 'Actualizado en octubre de 2026' },
};

export const NAV: { id: string; label: T }[] = [
  { id: 'work', label: { en: 'Work', es: 'Trabajo' } },
  { id: 'engineering', label: { en: 'Engineering', es: 'Ingeniería' } },
  { id: 'contact', label: { en: 'Contact', es: 'Contacto' } },
];

export const HERO = {
  eyebrow: { en: 'Mallasa · La Paz · Bolivia', es: 'Mallasa · La Paz · Bolivia' },
  lead: {
    en: 'More than twenty years of software engineering, most of it on Apple platforms and in open source. These days I also put that craft into open tools for communities, cultural spaces and small organizations in Bolivia.',
    es: 'Más de veinte años de ingeniería de software, la mayor parte en plataformas Apple y en código abierto. Hoy también pongo ese oficio en herramientas abiertas para comunidades, espacios culturales y organizaciones pequeñas de Bolivia.',
  },
  primary: { en: 'See the work', es: 'Ver el trabajo' },
  secondary: { en: 'Contact', es: 'Contacto' },
  photoAlt: {
    en: 'People gathered in the garden of Proyecto Cultural Barranco at dusk.',
    es: 'Gente reunida en el jardín del Proyecto Cultural Barranco al atardecer.',
  },
  photo: barranco,
};

export type Project = {
  name: string | T;
  tag: T;
  status?: T;
  text: T;
  links: Link[];
  image: ImageMetadata;
  alt: T;
};

const L = {
  site: { en: 'Site', es: 'Sitio' },
  repo: { en: 'Code', es: 'Código' },
  demo: { en: 'Demo', es: 'Demo' },
};

export const NOW = {
  eyebrow: { en: 'What I build now', es: 'Lo que construyo ahora' },
  title: { en: 'Open tools, in use', es: 'Herramientas abiertas, en uso' },
  projects: [
    {
      name: 'Desks',
      tag: { en: 'Open source · AI tools', es: 'Código abierto · herramientas de IA' },
      status: { en: 'Early version, in daily use', es: 'Versión temprana, en uso diario' },
      text: {
        en: 'A way of working with Claude Code: one topic per session, answers checked by models from other vendors, and a written close. MIT license.',
        es: 'Una forma de trabajar con Claude Code: un tema por sesión, respuestas revisadas por modelos de otros proveedores y un cierre escrito. Licencia MIT.',
      },
      links: [
        { label: L.site, href: 'https://rivera-ernesto.github.io/desks/' },
        { label: L.repo, href: 'https://github.com/rivera-ernesto/desks' },
      ],
      image: desks,
      alt: { en: 'The Desks website.', es: 'El sitio de Desks.' },
    },
    {
      name: 'Verdecito',
      tag: { en: 'Open protocol', es: 'Protocolo abierto' },
      text: {
        en: 'Open-source living memory: a method and tools that turn important AI conversations into reusable memory. A public specification and a reference site, with a first version to try.',
        es: 'Memoria viva de código abierto: un método y herramientas para convertir conversaciones importantes con IA en memoria reutilizable. Una especificación pública y un sitio de referencia, con una primera versión para probar.',
      },
      links: [
        { label: L.site, href: 'https://verdecito-life.github.io/verdecito/' },
        { label: L.repo, href: 'https://github.com/verdecito-life/verdecito' },
      ],
      image: verdecito,
      alt: { en: 'The Verdecito website.', es: 'El sitio de Verdecito.' },
    },
    {
      name: { en: 'Federation kit', es: 'Kit de federación' },
      tag: { en: 'Website template', es: 'Plantilla de sitio web' },
      text: {
        en: 'A website any federation of producer associations can copy: catalog, directory, map and inquiries over WhatsApp, edited from a simple panel and hosted for free on GitHub Pages. The demo uses invented data.',
        es: 'Un sitio web que cualquier federación de asociaciones de productores puede copiar: catálogo, directorio, mapa y consultas por WhatsApp, editado desde un panel sencillo y alojado gratis en GitHub Pages. La demo usa datos inventados.',
      },
      links: [
        { label: L.demo, href: 'https://rivera-ernesto.github.io/federacion-kit/' },
        { label: L.repo, href: 'https://github.com/rivera-ernesto/federacion-kit' },
      ],
      image: kit,
      alt: { en: 'The federation kit demo.', es: 'La demo del kit de federación.' },
    },
    {
      name: 'Proyecto Cultural Barranco',
      tag: { en: 'Cultural space', es: 'Espacio cultural' },
      text: {
        en: 'The websites of an alternative cultural space in Mallasa: activities, visits and gatherings, in Spanish and English. And Voluntariado Barranco, its open volunteer system.',
        es: 'Los sitios de un espacio cultural alternativo en Mallasa: actividades, visitas y encuentros, en castellano e inglés. Y el Voluntariado Barranco, su sistema abierto de voluntariado.',
      },
      links: [
        { label: { en: 'Barranco', es: 'Barranco' }, href: 'https://barranco-life.github.io/Barranco/' },
        { label: { en: 'Voluntariado', es: 'Voluntariado' }, href: 'https://voluntariado.barranco.life/' },
        { label: L.repo, href: 'https://github.com/barranco-life' },
      ],
      image: barrancoSite,
      alt: { en: 'The Proyecto Cultural Barranco website.', es: 'El sitio del Proyecto Cultural Barranco.' },
    },
    {
      name: '4/20 Bolivia',
      tag: { en: 'Open cultural model', es: 'Modelo cultural abierto' },
      text: {
        en: 'A documented, replicable model for a 4/20 cultural celebration, and an open manual on legal context, harm reduction and responsible organizing.',
        es: 'Un modelo documentado y replicable para una celebración cultural del 4/20, y un manual abierto sobre contexto legal, reducción de daños y organización responsable.',
      },
      links: [
        { label: { en: '420.barranco.life', es: '420.barranco.life' }, href: 'https://420.barranco.life/' },
        { label: { en: 'Manual 4/20', es: 'Manual 4/20' }, href: 'https://manual420.barranco.life/' },
        { label: L.repo, href: 'https://github.com/barranco-life/420' },
      ],
      image: fourtwenty,
      alt: { en: 'Reference image of the national 4/20 gathering.', es: 'Imagen de referencia del encuentro nacional 4/20.' },
    },
    {
      name: 'Ecotourism Nodes',
      tag: { en: 'Territorial model', es: 'Modelo territorial' },
      status: { en: 'In progress', es: 'En curso' },
      text: {
        en: 'An open model for ecotourism circuits built on local coordination, lodging and infrastructure that grows step by step, piloted in Mallasa.',
        es: 'Un modelo abierto de circuitos de ecoturismo basado en la coordinación local, hospedaje e infraestructura que crece por etapas, con piloto en Mallasa.',
      },
      links: [{ label: L.repo, href: 'https://github.com/rivera-ernesto/ecotourism-nodes' }],
      image: mallasa,
      alt: { en: 'The Mallasa valley.', es: 'El valle de Mallasa.' },
    },
  ] as Project[],
};

// Figures verified 2026-10-18 against the GitHub and Stack Exchange APIs.
export const ENGINEERING = {
  eyebrow: { en: 'Engineering', es: 'Ingeniería' },
  title: { en: 'Twenty years of building software', es: 'Veinte años construyendo software' },
  note: { en: 'Figures as of October 2026.', es: 'Cifras a octubre de 2026.' },
  intro: {
    en: 'Before and alongside this work: two decades of software for others, much of it in the open.',
    es: 'Antes de este trabajo y en paralelo: dos décadas de software para otros, buena parte a la vista de todos.',
  },
  items: [
    {
      years: '2013–2018',
      title: { en: 'CocoaLumberjack', es: 'CocoaLumberjack' },
      href: 'https://github.com/CocoaLumberjack/CocoaLumberjack',
      text: {
        en: 'Collaborator on one of the most used logging frameworks for Apple platforms (13,000+ stars). Third contributor by commits (163), with 44 merged pull requests, among them tvOS support and the 2.0 release. Maintainer of LumberjackConsole, its on-device log console.',
        es: 'Colaborador de uno de los frameworks de logs más usados en plataformas Apple (más de 13.000 estrellas). Tercer contribuidor por commits (163), con 44 pull requests integrados, entre ellos el soporte de tvOS y la versión 2.0. Mantenedor de LumberjackConsole, su consola de logs en el dispositivo.',
      },
    },
    {
      years: '2013–2014',
      title: { en: 'Early CocoaPods', es: 'CocoaPods en sus comienzos' },
      href: 'https://github.com/CocoaPods/Specs',
      text: {
        en: 'CocoaPods is the package manager for iOS libraries. While it was young, 68 of my library descriptions (specs) were merged into it, for my own libraries and for others such as GPUImage and ShareKit.',
        es: 'CocoaPods es el gestor de librerías de iOS. Cuando era joven, integró 68 descripciones de librerías (specs) mías, de librerías propias y ajenas como GPUImage y ShareKit.',
      },
    },
    {
      years: '2014',
      title: { en: 'AcknowledgementsBundle', es: 'AcknowledgementsBundle' },
      href: 'https://github.com/rivera-ernesto/AcknowledgementsBundle',
      text: {
        en: 'A small library that lists the open-source licenses of an iOS app’s libraries in its Settings screen. 78 stars.',
        es: 'Una librería pequeña que muestra las licencias de código abierto de las librerías de una app de iOS en su pantalla de Ajustes. 78 estrellas.',
      },
    },
    {
      years: '2013–2024',
      title: { en: 'Open-source contributions', es: 'Contribuciones de código abierto' },
      // Merged pull requests outside his own accounts and his employers' organizations.
      href: 'https://github.com/search?type=pullrequests&q=author%3Arivera-ernesto+is%3Apr+is%3Apublic+is%3Amerged+-user%3Arivera-ernesto+-user%3Abarranco-life+-user%3Averdecito-life+-user%3Acodelathe+-user%3APTEz',
      text: {
        en: '250 pull requests merged into 63 open-source projects run by others (not counting employers’ organizations), among them GPUImage, RestKit, ShareKit, Moya and Facebook’s pop. From 2019 on, dark mode, SwiftUI and visionOS support for several of those libraries as each platform change arrived.',
        es: '250 pull requests integrados en 63 proyectos de código abierto de otras personas (sin contar las organizaciones de mis empleadores), entre ellos GPUImage, RestKit, ShareKit, Moya y el framework pop de Facebook. Desde 2019, soporte de modo oscuro, SwiftUI y visionOS en varias de esas librerías a medida que llegaba cada cambio de plataforma.',
      },
    },
    {
      years: { en: 'since 2011', es: 'desde 2011' },
      title: { en: 'Stack Overflow', es: 'Stack Overflow' },
      href: 'https://stackoverflow.com/users/1049134/ernesto-rivera',
      text: {
        en: 'More than 10,000 reputation, mostly from answers on iOS and Objective-C.',
        es: 'Más de 10.000 puntos de reputación, sobre todo por respuestas sobre iOS y Objective-C.',
      },
    },
    {
      years: { en: 'Career', es: 'Trayectoria' },
      title: { en: 'Work', es: 'Trabajo' },
      text: {
        en: 'Seven years leading engineering remotely at FileCloud, on interfaces and mobile apps. Before that, companies in Tokyo and the United States, and web and automation systems at CERN in Geneva. Three summers in Google Summer of Code (2006–2008).',
        es: 'Siete años como líder de ingeniería en FileCloud, en remoto, en interfaces y apps móviles. Antes, empresas en Tokio y Estados Unidos, y sistemas web y de automatización en el CERN, en Ginebra. Tres veranos en Google Summer of Code (2006–2008).',
      },
    },
  ] as { years: string | T; title: T; href?: string; text: T }[],
};

export const EDUCATION = {
  eyebrow: { en: 'Education', es: 'Formación' },
  items: [
    {
      en: 'PhD in Computer Science, Tokyo Institute of Technology, 2011. Research on e-learning and accessible solutions for developing countries, with a MEXT scholarship.',
      es: 'Doctorado en Ciencias de la Computación, Tokyo Institute of Technology, 2011. Investigación en e-learning y soluciones accesibles para países en desarrollo, con beca MEXT.',
    },
    {
      en: 'MSc (2004) and BSc (2003) in Computer Science, University of Geneva.',
      es: 'Maestría (2004) y licenciatura (2003) en Ciencias de la Computación, Universidad de Ginebra.',
    },
    {
      en: 'Speaks Spanish, English, French and Japanese.',
      es: 'Habla castellano, inglés, francés y japonés.',
    },
  ] as T[],
};

export const PRACTICE = {
  eyebrow: { en: 'How I work', es: 'Cómo trabajo' },
  items: [
    {
      en: 'Open source by default, on free hosting, so the people who use a tool can also keep it running.',
      es: 'Código abierto por defecto, en alojamiento gratuito, para que quien usa una herramienta también pueda mantenerla.',
    },
    {
      en: 'A working demo before any promise.',
      es: 'Una demo que funciona antes de cualquier promesa.',
    },
    {
      en: 'Public text is checked by more than one AI model and by people before it goes out.',
      es: 'El texto público pasa por más de un modelo de IA y por personas antes de salir.',
    },
  ] as T[],
};

export const CONTACT = {
  eyebrow: { en: 'Contact', es: 'Contacto' },
  title: { en: 'Write to me', es: 'Escríbeme' },
  text: {
    en: 'The quickest way to reach me is a message on LinkedIn.',
    es: 'La forma más rápida de escribirme es un mensaje en LinkedIn.',
  },
  sponsors: {
    en: 'Verdecito accepts support on GitHub Sponsors.',
    es: 'Verdecito recibe apoyo en GitHub Sponsors.',
  },
};

export const NOT_FOUND = {
  title: 'Page not found · Página no encontrada',
  en: 'This page does not exist on rivera-ernesto.github.io.',
  es: 'Esta página no existe en rivera-ernesto.github.io.',
};
