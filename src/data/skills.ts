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
 * own professional track. The lists mirror the skills sections of the two
 * résumés, so nothing appears here that an interviewer can't ask about.
 */
export const skillGroups: SkillGroup[] = [
  {
    area: 'software',
    rows: [
      { id: 'core', items: ['React', 'JavaScript', 'TypeScript', 'C# / .NET', 'Node.js', 'PHP'], primary: true },
      { id: 'backend', items: ['ASP.NET Core', 'REST APIs', 'HTML', 'CSS'] },
      { id: 'databases', items: ['MySQL', 'PostgreSQL', 'Firebase Realtime Database', 'Entity Framework Core'], translated: true },
      { id: 'testing', items: ['Jest', 'xUnit', 'Selenium', 'PHPUnit'] },
      { id: 'tools', items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Jira', 'Bitbucket', 'Vercel'], translated: true },
    ],
  },
  {
    area: 'data',
    rows: [
      { id: 'core', items: ['SQL', 'Python', 'Pandas', 'Tableau'], primary: true },
      { id: 'analysis', items: ['SciPy', 'Matplotlib', 'Jupyter Notebook'], translated: true },
      { id: 'methods', translated: true },
      { id: 'extraction', items: ['BeautifulSoup', 'ScraperFC'], translated: true },
    ],
  },
];
