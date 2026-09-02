import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { experienceEntries } from '../../data/experience';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import styles from './Experience.module.css';

export function Experience() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('experience.eyebrow')}</p>
          <h2 className={styles.title}>{t('experience.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('experience.intro')}</p>
          <a href={resumeUrl} download className={styles.cvLink}>
            <FileText size={15} strokeWidth={1.75} />
            {t('experience.viewCv')}
          </a>
        </header>

        <ol className={styles.timeline}>
          {experienceEntries.map((entry) => {
            const metrics = t(`experience.items.${entry.id}.metrics`, { returnObjects: true }) as string[];
            return (
              <li key={entry.id} className={styles.entry} data-emphasis={entry.emphasis}>
                <div className={styles.entryHead}>
                  <p className={styles.role}>{t(`experience.items.${entry.id}.role`)}</p>
                  <p className={styles.company}>{entry.company}</p>
                  <p className={styles.period}>{entry.period}</p>
                </div>
                <p className={styles.description}>{t(`experience.items.${entry.id}.description`)}</p>
                {metrics && (
                  <ul className={styles.metrics}>
                    {metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
