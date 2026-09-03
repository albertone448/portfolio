import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectShowcase } from '../projects/ProjectShowcase';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  const { t } = useTranslation();

  const messiOutlier = projects.find((p) => p.slug === 'messi-outlier')!;
  const storeCredit = projects.find((p) => p.slug === 'store-credit')!;
  const alwaysBarca = projects.find((p) => p.slug === 'always-barca')!;

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('work.eyebrow')}</p>
          <h2 className={styles.title}>{t('work.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('work.intro')}</p>
        </header>

        <div className={styles.list}>
          <ProjectShowcase
            project={messiOutlier}
            title={t('work.items.messiOutlier.title')}
            category={t('work.items.messiOutlier.category')}
            description={t('work.items.messiOutlier.description')}
            highlights={t('work.items.messiOutlier.highlights', { returnObjects: true }) as string[]}
          />

          <ProjectShowcase
            project={storeCredit}
            title={t('work.items.storeCredit.title')}
            category={t('work.items.storeCredit.category')}
            description={t('work.items.storeCredit.description')}
            highlights={t('work.items.storeCredit.highlights', { returnObjects: true }) as string[]}
          />

          <ProjectShowcase
            project={alwaysBarca}
            title={t('work.items.alwaysBarca.title')}
            category={t('work.items.alwaysBarca.category')}
            description={t('work.items.alwaysBarca.description')}
            highlights={t('work.items.alwaysBarca.highlights', { returnObjects: true }) as string[]}
          />
        </div>
      </div>
    </section>
  );
}
