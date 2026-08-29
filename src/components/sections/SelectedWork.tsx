import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectShowcase } from '../projects/ProjectShowcase';
import { ProjectPreviewFrame } from '../media/ProjectPreviewFrame';
import { DataVisual } from '../projects/DataVisual';
import styles from './SelectedWork.module.css';

export function SelectedWork() {
  const { t } = useTranslation();

  const storeCredit = projects.find((p) => p.slug === 'store-credit')!;
  const alwaysBarca = projects.find((p) => p.slug === 'always-barca')!;
  const messiOutlier = projects.find((p) => p.slug === 'messi-outlier')!;

  return (
    <section id="work" className={styles.section}>
      <div className="container-wide">
        <header className={styles.header}>
          <p className="eyebrow">{t('work.eyebrow')}</p>
          <h2 className={styles.title}>{t('work.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('work.intro')}</p>
        </header>

        <ProjectShowcase
          project={storeCredit}
          title={t('work.items.storeCredit.title')}
          category={t('work.items.storeCredit.category')}
          description={t('work.items.storeCredit.description')}
          highlights={t('work.items.storeCredit.highlights', { returnObjects: true }) as string[]}
          visual={
            <ProjectPreviewFrame accent={storeCredit.accent} chrome aspectRatio="4 / 3">
              <img src={storeCredit.heroImage} alt="" loading="lazy" />
            </ProjectPreviewFrame>
          }
        />

        <ProjectShowcase
          project={alwaysBarca}
          title={t('work.items.alwaysBarca.title')}
          category={t('work.items.alwaysBarca.category')}
          description={t('work.items.alwaysBarca.description')}
          highlights={t('work.items.alwaysBarca.highlights', { returnObjects: true }) as string[]}
          reverse
          visual={
            <DataVisual
              accent={alwaysBarca.accent}
              eyebrow={t('work.items.alwaysBarca.visualEyebrow')}
              facts={t('work.items.alwaysBarca.visualFacts', { returnObjects: true }) as string[]}
            />
          }
        />

        <ProjectShowcase
          project={messiOutlier}
          title={t('work.items.messiOutlier.title')}
          category={t('work.items.messiOutlier.category')}
          description={t('work.items.messiOutlier.description')}
          highlights={t('work.items.messiOutlier.highlights', { returnObjects: true }) as string[]}
          visual={
            <DataVisual
              accent={messiOutlier.accent}
              eyebrow={t('work.items.messiOutlier.visualEyebrow')}
              facts={t('work.items.messiOutlier.visualFacts', { returnObjects: true }) as string[]}
            />
          }
        />
      </div>
    </section>
  );
}
