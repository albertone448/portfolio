import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { getProjectsByCategory } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';
import { projectCopyKey } from '../../utils/projectCopyKey';
import { useResumes } from '../../hooks/useResumes';
import { ProjectShowcase } from '../projects/ProjectShowcase';
import styles from './SelectedWork.module.css';

/** Software first, matching the order of the two roles in the hero. */
const GROUPS: { category: ProjectCategory; anchor: string }[] = [
  { category: 'software', anchor: 'software-projects' },
  { category: 'data', anchor: 'data-projects' },
];

export function SelectedWork() {
  const { t } = useTranslation();
  const resumes = useResumes();

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('work.eyebrow')}</p>
          <h2 className={styles.title}>{t('work.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('work.intro')}</p>
        </header>

        {GROUPS.map(({ category, anchor }) => {
          const resume = resumes.find((link) => link.track === category);
          return (
          <section key={category} id={anchor} className={styles.group} aria-labelledby={`${anchor}-title`}>
            <div className={styles.groupHeader}>
              <h3 id={`${anchor}-title`} className={styles.groupTitle}>
                {t(`work.groups.${category}.title`)}
              </h3>
              <p className={styles.groupIntro}>{t(`work.groups.${category}.intro`)}</p>
              {resume && (
                <a href={resume.href} target="_blank" rel="noopener noreferrer" className={styles.groupResume}>
                  <FileText size={15} strokeWidth={1.75} aria-hidden="true" />
                  {resume.label}
                </a>
              )}
            </div>

            <div className={styles.list}>
              {getProjectsByCategory(category).map((project) => {
                const key = projectCopyKey(project.slug);
                return (
                  <ProjectShowcase
                    key={project.slug}
                    project={project}
                    title={t(`work.items.${key}.title`)}
                    context={t(`work.context.${key}`)}
                    description={t(`work.items.${key}.description`)}
                    highlights={t(`work.items.${key}.highlights`, { returnObjects: true }) as string[]}
                  />
                );
              })}
            </div>
          </section>
          );
        })}
      </div>
    </section>
  );
}
