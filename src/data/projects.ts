import type { Project, ProjectCategory } from '../types/project';

/**
 * Structural data only. Every piece of narrative copy (titles, descriptions,
 * findings, captions) lives in the i18n dictionaries under `projectDetail.<slug>`
 * so the same project can be fully bilingual without duplicating components.
 *
 * Order matters: the Home page groups projects by category (software first,
 * then data, matching the two roles in the hero) and keeps this order inside
 * each group, so the strongest evidence in each area is read first. The
 * next-project navigation follows the same sequence.
 */
export const projects: Project[] = [
  {
    slug: 'store-credit',
    category: 'software',
    status: 'production',
    year: '2025',
    stack: ['React', 'Vite', 'Firebase', 'Node.js', 'Vercel'],
    accent: 'var(--accent-store-credit)',
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
    slug: 'batazo',
    category: 'software',
    status: 'in-progress',
    year: '2026',
    stack: ['.NET 10', 'ASP.NET Core', 'PostgreSQL', 'React', 'TypeScript'],
    accent: 'var(--accent-batazo)',
    githubUrl: 'https://github.com/albertone448/batazo',
    // The Render deploy only serves a placeholder page until the pool features
    // land, so it stays unlinked rather than sending visitors to a test screen.
    liveUrl: null,
    docsUrl: 'https://github.com/albertone448/batazo/blob/main/docs/decisiones-tecnicas.md',
  },
  {
    slug: 'messi-outlier',
    category: 'data',
    status: 'completed',
    year: '2026',
    stack: ['Python', 'Pandas', 'ScraperFC', 'Tableau Public'],
    accent: 'var(--accent-messi)',
    githubUrl: 'https://github.com/albertone448/messi-outlier',
    liveUrl: 'https://public.tableau.com/views/MessiOutlier/Dash1Loscuatrorolessonrealmentedistintos',
    dashboards: [
      { path: 'MessiOutlier/Dash1Loscuatrorolessonrealmentedistintos', titleKey: 'rolesDistinct' },
      { path: 'MessiOutlier/Dash2Elhallazgocentral', titleKey: 'centralFinding' },
      { path: 'MessiOutlier/Dash3Perfiles', titleKey: 'profiles' },
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
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((project) => project.category === category);

/** The project after `slug` in display order, wrapping back to the first. */
export const getNextProject = (slug: string): Project => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
