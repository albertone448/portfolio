export type SkillArea = 'software' | 'data';

export interface SkillRow {
  id: string;
  /** Tool and language names, shown as-is in both languages. */
  items?: string[];
  /** Appends concepts that need translating (methods, practices) from i18n. */
  translated?: boolean;
  /** The row a recruiter should read first in each area. */
  primary?: boolean;
}

export interface SkillGroup {
  area: SkillArea;
  rows: SkillRow[];
}

/**
 * Two groups only, matching the two roles the site targets. Testing lives
 * inside software development as part of how things get built, not as its
 * own professional track. Everything listed here appears in the CV or in a
 * project on this site; nothing is added just because it is in demand.
 */
export const skillGroups: SkillGroup[] = [
  {
    area: 'software',
    rows: [
      { id: 'core', items: ['React', 'JavaScript', 'TypeScript', 'C# / .NET', 'Node.js', 'PHP'], primary: true },
      { id: 'backend', items: ['ASP.NET Core', 'REST APIs', 'Java / Spring Boot', 'Firebase'] },
      { id: 'databases', items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Entity Framework Core'] },
      { id: 'testing', items: ['Jest', 'Selenium', 'PHPUnit'], translated: true },
      { id: 'tools', items: ['Git', 'GitHub Actions', 'Docker', 'Jira', 'Bitbucket'], translated: true },
    ],
  },
  {
    area: 'data',
    rows: [
      { id: 'core', items: ['Python', 'Pandas', 'SQL', 'Tableau'], primary: true },
      { id: 'analysis', items: ['SciPy', 'Jupyter Notebook', 'Matplotlib'] },
      { id: 'methods', translated: true },
      { id: 'extraction', items: ['BeautifulSoup', 'ScraperFC'] },
    ],
  },
];
