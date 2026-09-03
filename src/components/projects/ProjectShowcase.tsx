import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/project';
import styles from './ProjectShowcase.module.css';

interface ProjectShowcaseProps {
  project: Project;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

/**
 * A compact, editorial row: no screenshot or chart, so all three Home
 * showcases (a real app, two data projects) share one visual system instead
 * of mixing a real UI capture with decorative bar charts.
 */
export function ProjectShowcase({ project, title, category, description, highlights }: ProjectShowcaseProps) {
  const { t } = useTranslation();

  return (
    <article className={styles.showcase} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <div className={styles.meta}>
        <span className={styles.category}>{category}</span>
        <span className={styles.status} data-status={project.status}>
          {t(`work.status.${project.status}`)}
        </span>
        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <Link to={`/projects/${project.slug}`} className={styles.cta}>
          {t('work.viewCaseStudy')}
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
