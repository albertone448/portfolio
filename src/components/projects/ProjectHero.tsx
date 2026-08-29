import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import type { Project } from '../../types/project';
import styles from './ProjectHero.module.css';

interface ProjectHeroProps {
  project: Project;
  category: string;
  title: string;
  description: string;
  visual?: ReactNode;
}

export function ProjectHero({ project, category, title, description, visual }: ProjectHeroProps) {
  const { t } = useTranslation();

  return (
    <header className={styles.hero} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <div className="container-wide">
        <Link to="/#work" className={styles.back}>
          <ArrowLeft size={15} strokeWidth={2} />
          {t('projectDetail.back')}
        </Link>

        <div className={styles.top}>
          <div className={styles.copy}>
            <span className={styles.category}>{category}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.facts}>
              <div>
                <span className={styles.factLabel}>{t('projectDetail.yearLabel')}</span>
                <span className={styles.factValue}>{project.year}</span>
              </div>
              <div>
                <span className={styles.factLabel}>{t('projectDetail.statusLabel')}</span>
                <span className={styles.factValue}>{t(`work.status.${project.status}`)}</span>
              </div>
              <div className={styles.factStack}>
                <span className={styles.factLabel}>{t('projectDetail.stackLabel')}</span>
                <span className={styles.factValue}>{project.stack.join(' · ')}</span>
              </div>
            </div>

            <div className={styles.links}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <GithubIcon size={16} />
                  {t('projectDetail.repoLink')}
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <ExternalLink size={16} strokeWidth={1.75} />
                  {t('projectDetail.liveLink')}
                </a>
              )}
            </div>
          </div>
        </div>

        {visual && <div className={styles.visual}>{visual}</div>}
      </div>
    </header>
  );
}
