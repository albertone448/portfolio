import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3 } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import type { Project } from '../../types/project';
import styles from './ProjectShowcase.module.css';

interface ProjectShowcaseProps {
  project: Project;
  title: string;
  /** Who the project was for, so personal work never reads as employment. */
  context: string;
  description: string;
  highlights: string[];
}

/**
 * A compact, editorial row: no screenshot or chart, so every Home showcase
 * shares one visual system. Code and dashboard links sit on the row itself,
 * so a reviewer who only wants the evidence doesn't have to open the case
 * study first. Data projects link their dashboard; app links stay inside
 * the case study, where their caveats are explained.
 */
export function ProjectShowcase({ project, title, context, description, highlights }: ProjectShowcaseProps) {
  const { t } = useTranslation();
  const dashboardUrl = project.category === 'data' ? project.liveUrl : null;

  return (
    <article className={styles.showcase} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <div className={styles.meta}>
        <span className={styles.status} data-status={project.status}>
          {t(`work.status.${project.status}`)}
        </span>
        <span className={styles.context}>{context}</span>
        <ul className={styles.stack} aria-label={t('projectDetail.stackLabel')}>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>
          <Link to={`/projects/${project.slug}`}>{title}</Link>
        </h4>
        <p className={styles.description}>{description}</p>

        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link to={`/projects/${project.slug}`} className={styles.cta}>
            {t('work.viewCaseStudy')}
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              <GithubIcon size={15} />
              {t('work.codeLink')}
            </a>
          )}
          {dashboardUrl && (
            <a href={dashboardUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
              <BarChart3 size={15} strokeWidth={1.75} aria-hidden="true" />
              {t('work.dashboardLink')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
