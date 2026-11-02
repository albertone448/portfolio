import { useTranslation } from 'react-i18next';
import { skillGroups } from '../../data/skills';
import styles from './Skills.module.css';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('skills.eyebrow')}</p>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.intro}>{t('skills.intro')}</p>
        </header>

        <div className={styles.grid}>
          {skillGroups.map(({ area, rows }) => (
            <div key={area} className={styles.area}>
              <h3 className={styles.areaTitle}>{t(`skills.areas.${area}`)}</h3>
              <dl className={styles.rows}>
                {rows.map((row) => {
                  const translated = row.translated
                    ? (t(`skills.translatedItems.${area}.${row.id}`, { returnObjects: true }) as string[])
                    : [];
                  const items = [...(row.items ?? []), ...translated];
                  return (
                    <div key={row.id} className={styles.row} data-primary={row.primary}>
                      <dt className={styles.rowLabel}>{t(`skills.rows.${area}.${row.id}`)}</dt>
                      <dd>
                        <ul className={styles.items}>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
