export type EmploymentType = 'internship' | 'employment';

export interface ExperienceEntry {
  id: string;
  company: string;
  type: EmploymentType;
  /** ISO year-month, formatted per language at render time. Copied from the CV. */
  start: string;
  end: string;
  /** Tools actually used in this role, as listed in the CV. Omitted for non-technical roles. */
  stack?: string[];
  emphasis: 'primary' | 'compact';
}

/**
 * Role titles, locations, descriptions and highlights live in i18n under
 * `experience.items.<id>`. Internships stay labeled as internships: the CV
 * calls them "Professional Internship" and the site should not upgrade them.
 */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'grupoEulalia',
    company: 'Grupo Eulalia',
    type: 'internship',
    start: '2025-07',
    end: '2025-12',
    stack: ['React', 'Jest', 'Jira', 'Bitbucket'],
    emphasis: 'primary',
  },
  {
    id: 'ticotek',
    company: 'Ticotek',
    type: 'internship',
    start: '2024-01',
    end: '2025-06',
    stack: ['PHP', 'MySQL', 'React', 'REST API', 'Selenium', 'Git'],
    emphasis: 'primary',
  },
  {
    id: 'foundever',
    company: 'Foundever',
    type: 'employment',
    start: '2021-08',
    end: '2023-02',
    emphasis: 'compact',
  },
];
