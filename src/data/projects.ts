import type { Project } from '../types/project';

/**
 * Structural data only. Every piece of narrative copy (titles, descriptions,
 * findings, captions) lives in the i18n dictionaries under `projectDetail.<slug>`
 * so the same project can be fully bilingual without duplicating components.
 *
 * `dashboards` and `gallery` reference real assets already published; nothing
 * here is placeholder data.
 */
export const projects: Project[] = [
  {
    slug: 'store-credit',
    category: 'software',
    status: 'production',
    year: '2025',
    stack: ['React', 'Vite', 'Firebase', 'Node.js', 'Vercel'],
    accent: 'var(--accent-store-credit)',
    heroImage: '/images/projects/store-credit/02-lista-clientes.jpg',
    githubUrl: 'https://github.com/albertone448/pulperia-fiado',
    liveUrl: null,
    gallery: [
      { src: '/images/projects/store-credit/01-selector-perfil.jpg', captionKey: 'profileSelector', aspectRatio: '1000 / 826' },
      { src: '/images/projects/store-credit/02-lista-clientes.jpg', captionKey: 'clientList', aspectRatio: '1000 / 826' },
      { src: '/images/projects/store-credit/03-ficha-cliente.jpg', captionKey: 'clientDetail', aspectRatio: '1000 / 826' },
      { src: '/images/projects/store-credit/04-resumen-dia.jpg', captionKey: 'dailySummary', aspectRatio: '1000 / 826' },
      { src: '/images/projects/store-credit/05-movimientos-dia.jpg', captionKey: 'dailyMovements', aspectRatio: '1000 / 840' },
    ],
  },
  {
    slug: 'always-barca',
    category: 'data',
    status: 'completed',
    year: '2025',
    stack: ['Python', 'Pandas', 'SciPy', 'Tableau Public'],
    accent: 'var(--accent-always-barca)',
    githubUrl: 'https://github.com/albertone448/always-barca',
    liveUrl: 'https://public.tableau.com/app/profile/albertone448/viz/AlwaysBara/Dashboard1',
    dashboards: [
      { path: 'AlwaysBara/Dashboard1', titleKey: 'overview' },
      { path: 'AlwaysBara/UsodecanteranosFase2', titleKey: 'academy' },
      { path: 'AlwaysBara/Fase3Valordeplantilla', titleKey: 'squadValue' },
      { path: 'AlwaysBara/Dashboard4', titleKey: 'conclusions' },
    ],
  },
  {
    slug: 'messi-outlier',
    category: 'data',
    status: 'in-progress',
    year: '2026',
    stack: ['Python', 'Pandas', 'Tableau Public'],
    accent: 'var(--accent-messi)',
    githubUrl: null,
    liveUrl: null,
    dashboards: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
