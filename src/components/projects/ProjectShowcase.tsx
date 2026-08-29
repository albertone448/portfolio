import type { ReactNode } from 'react';
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
  visual: ReactNode;
  reverse?: boolean;
}

export function ProjectShowcase({ project, title, category, description, highlights, visual, reverse }: ProjectShowcaseProps) {
  const { t } = useTranslation();

  return (
    <article className={styles.showcase} data-reverse={reverse} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <div className={styles.visual}>{visual}</div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.status} data-status={project.status}>
            {t(`work.status.${project.status}`)}
          </span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <Link to={`/projects/${project.slug}`} className={styles.cta}>
          {t('work.viewCaseStudy')}
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
