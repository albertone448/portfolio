import { useTranslation } from 'react-i18next';
import { FileText } from 'lucide-react';
import { experienceEntries } from '../../data/experience';
import { useResumes } from '../../hooks/useResumes';
import { formatMonthRange } from '../../utils/formatMonthRange';
import styles from './Experience.module.css';

export function Experience() {
  const { t, i18n } = useTranslation();
  const resumes = useResumes();
  const locale = i18n.resolvedLanguage === 'es' ? 'es-CR' : 'en-US';

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('experience.eyebrow')}</p>
          <h2 className={styles.title}>{t('experience.title')}</h2>
          <p className={`measure ${styles.intro}`}>{t('experience.intro')}</p>
          <ul className={styles.cvLinks}>
            {resumes.map(({ track, href, label }) => (
              <li key={track}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
                  <FileText size={15} strokeWidth={1.75} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <ol className={styles.timeline}>
          {experienceEntries.map((entry) => {
            const copyKey = `experience.items.${entry.id}`;
            const highlights = t(`${copyKey}.highlights`, { returnObjects: true }) as string[];
            return (
              <li key={entry.id} className={styles.entry} data-emphasis={entry.emphasis}>
                <div className={styles.entryHead}>
                  <h3 className={styles.role}>{t(`${copyKey}.role`)}</h3>
                  <p className={styles.company}>{entry.company}</p>
                  <p className={styles.type} data-type={entry.type}>
                    {t(`${copyKey}.typeDetail`, { defaultValue: t(`experience.types.${entry.type}`) })}
                  </p>
                  <p className={styles.period}>
                    {formatMonthRange(entry.start, entry.end, locale)} · {t(`${copyKey}.location`)}
                  </p>
                </div>

                <div className={styles.entryBody}>
                  <p className={styles.description}>{t(`${copyKey}.description`)}</p>
                  <ul className={styles.highlights}>
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {entry.stack && (
                    <p className={styles.stack}>
                      <span className={styles.stackLabel}>{t('experience.stackLabel')}:</span>{' '}
                      {entry.stack.join(' · ')}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
