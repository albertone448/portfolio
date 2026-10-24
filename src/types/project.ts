export type ProjectStatus = 'production' | 'completed' | 'in-progress';

export type ProjectCategory = 'software' | 'data';

export interface TableauDashboard {
  /** Path segment on Tableau Public, e.g. "AlwaysBara/Dashboard1" */
  path: string;
  titleKey: string;
}

export interface GalleryImage {
  src: string;
  captionKey: string;
  /** Natural aspect ratio, used to reserve space and avoid layout shift. */
  aspectRatio: string;
}

export interface ProjectSummary {
  slug: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  stack: string[];
  accent: string;
  heroImage?: string;
  githubUrl: string | null;
  liveUrl?: string | null;
  /** Optional link to written project documentation, such as a decision log. */
  docsUrl?: string;
}

export interface Project extends ProjectSummary {
  dashboards?: TableauDashboard[];
  gallery?: GalleryImage[];
}
