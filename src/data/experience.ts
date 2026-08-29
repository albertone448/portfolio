export interface ExperienceEntry {
  id: string;
  company: string;
  period: string;
  emphasis: 'primary' | 'compact';
}

/**
 * Dates are copied verbatim from the CV. Role titles, descriptions and
 * metric badges live in i18n under `experience.items.<id>` so nothing
 * user-facing is hardcoded to a single language here.
 */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'grupoEulalia',
    company: 'Grupo Eulalia',
    period: 'Jul 2025 – Dec 2025',
    emphasis: 'primary',
  },
  {
    id: 'ticotek',
    company: 'Ticotek',
    period: 'Jan 2024 – Jun 2025',
    emphasis: 'primary',
  },
  {
    id: 'foundever',
    company: 'Foundever',
    period: 'Aug 2021 – Feb 2023',
    emphasis: 'compact',
  },
];
