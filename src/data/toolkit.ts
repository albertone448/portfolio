export interface ToolkitCategory {
  id: string;
  items: string[];
  /** Featured categories render larger, in the top row of the grid. */
  featured?: boolean;
}

export const toolkitCategories: ToolkitCategory[] = [
  {
    id: 'softwareEngineering',
    items: ['React', 'TypeScript', 'Node.js', '.NET / C#', 'Java / Spring Boot', 'PHP', 'REST APIs'],
    featured: true,
  },
  {
    id: 'dataAnalytics',
    items: ['Python', 'Pandas', 'SciPy', 'Matplotlib', 'Tableau', 'Jupyter Notebook', 'BeautifulSoup'],
    featured: true,
  },
  {
    id: 'databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase Realtime Database'],
  },
  {
    id: 'testingQuality',
    items: ['Jest', 'Selenium', 'PHPUnit', 'Unit & integration testing', 'TDD'],
  },
  {
    id: 'workflow',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Bitbucket', 'Jira', 'Agile / Scrum'],
  },
];
