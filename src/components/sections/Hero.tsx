import { useTranslation } from 'react-i18next';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../common/Button';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();
  const pillars = t('hero.pillars', { returnObjects: true }) as string[];

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container-wide ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{t('hero.role')}</p>
          <h1 className={styles.name}>{t('hero.name')}</h1>
          <p className={styles.tagline}>{t('hero.tagline')}</p>

          <ul className={styles.pillars}>
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <Button to="/#work" icon={<ArrowRight size={16} strokeWidth={2} />}>
              {t('hero.ctaWork')}
            </Button>
            <Button
              variant="secondary"
              href={resumeUrl}
              icon={<Download size={16} strokeWidth={2} />}
            >
              {t('hero.ctaResume')}
            </Button>
          </div>
        </div>

        <div className={styles.panelStack} aria-hidden="true">
          <article className={styles.panel} data-panel="software">
            <span className={styles.panelLabel}>{t('hero.panels.software.label')}</span>
            <p className={styles.panelHeadline}>{t('hero.panels.software.headline')}</p>
            <p className={styles.panelDetail}>{t('hero.panels.software.detail')}</p>
          </article>

          <article className={styles.panel} data-panel="quality">
            <span className={styles.panelLabel}>{t('hero.panels.quality.label')}</span>
            <p className={styles.panelHeadline}>{t('hero.panels.quality.headline')}</p>
            <p className={styles.panelDetail}>{t('hero.panels.quality.detail')}</p>
          </article>

          <article className={styles.panel} data-panel="data">
            <span className={styles.panelLabel}>{t('hero.panels.data.label')}</span>
            <p className={styles.panelHeadline}>{t('hero.panels.data.headline')}</p>
            <p className={styles.panelDetail}>{t('hero.panels.data.detail')}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
