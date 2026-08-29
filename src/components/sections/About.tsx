import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import styles from './About.module.css';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={`measure ${styles.paragraph}`}>{t('about.paragraph')}</p>
        </div>

        <aside className={styles.education}>
          <GraduationCap size={20} strokeWidth={1.5} className={styles.icon} />
          <p className={styles.eduLabel}>{t('about.educationTitle')}</p>
          <p className={styles.university}>{t('about.university')}</p>
          <p className={styles.degree}>{t('about.degree')}</p>
          <p className={styles.degree}>{t('about.diploma')}</p>
        </aside>
      </div>
    </section>
  );
}
