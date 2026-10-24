import type { Project } from '../types/project';

/**
 * Structural data only. Every piece of narrative copy (titles, descriptions,
 * findings, captions) lives in the i18n dictionaries under `projectDetail.<slug>`
 * so the same project can be fully bilingual without duplicating components.
 *
 * Order here is intentional and mirrors the Home page and the next-project
 * navigation cycle: data analysis, software, data analysis, software. The
 * one project still in progress goes last so finished work is read first.
 */
export const projects: Project[] = [
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
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
