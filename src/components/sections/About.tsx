import { useTranslation } from 'react-i18next';
import { GraduationCap, Languages } from 'lucide-react';
import styles from './About.module.css';

export function About() {
  const { t } = useTranslation();
  const languages = t('about.languages', { returnObjects: true }) as string[];

  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={`measure ${styles.paragraph}`}>{t('about.paragraph')}</p>
        </div>

        <aside className={styles.facts}>
          <div className={styles.block}>
            <GraduationCap size={20} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.label}>{t('about.educationTitle')}</h3>
            <p className={styles.university}>{t('about.university')}</p>
            <p className={styles.detail}>{t('about.degree')}</p>
            <p className={styles.detail}>{t('about.diploma')}</p>
          </div>
          <div className={styles.block}>
            <Languages size={20} strokeWidth={1.5} className={styles.icon} aria-hidden="true" />
            <h3 className={styles.label}>{t('about.languagesTitle')}</h3>
            <ul>
              {languages.map((language) => (
                <li key={language} className={styles.detail}>
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
