import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectShowcase } from '../projects/ProjectShowcase';
import styles from './SelectedWork.module.css';

/** Project slugs are kebab-case; their i18n blocks use camelCase keys. */
const toCopyKey = (slug: string) => slug.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase());

export function SelectedWork() {
  const { t } = useTranslation();

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('work.eyebrow')}</p>
          <h2 className={styles.title}>{t('work.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('work.intro')}</p>
        </header>

        <div className={styles.list}>
          {projects.map((project) => {
            const key = `work.items.${toCopyKey(project.slug)}`;

            return (
              <ProjectShowcase
                key={project.slug}
                project={project}
                title={t(`${key}.title`)}
                category={t(`${key}.category`)}
                description={t(`${key}.description`)}
                highlights={t(`${key}.highlights`, { returnObjects: true }) as string[]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
