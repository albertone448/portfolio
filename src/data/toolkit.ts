export interface ToolkitCategory {
  id: string;
  items: string[];
}

export const toolkitCategories: ToolkitCategory[] = [
  {
    id: 'softwareEngineering',
    items: ['React', 'TypeScript', 'Node.js', '.NET / C#', 'Java / Spring Boot', 'PHP', 'REST APIs'],
  },
  {
    id: 'dataAnalytics',
    items: ['Python', 'Pandas', 'SciPy', 'Matplotlib', 'Tableau', 'Jupyter Notebook', 'BeautifulSoup'],
  },
  {
    id: 'databases',
    items: ['SQL Server', 'MySQL', 'Firebase Realtime Database'],
  },
  {
    id: 'testingQuality',
    items: ['Jest', 'Selenium', 'PHPUnit', 'Unit & integration testing', 'TDD'],
  },
  {
    id: 'workflow',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Agile / Scrum'],
  },
];
