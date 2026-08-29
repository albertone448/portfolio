import { useTranslation } from 'react-i18next';
import { toolkitCategories } from '../../data/toolkit';
import styles from './Toolkit.module.css';

export function Toolkit() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">{t('toolkit.eyebrow')}</p>
          <h2 className={styles.title}>{t('toolkit.title')}</h2>
        </header>

        <div className={styles.grid}>
          {toolkitCategories.map((category) => (
            <div key={category.id} className={styles.category}>
              <h3 className={styles.categoryTitle}>{t(`toolkit.categories.${category.id}`)}</h3>
              <ul className={styles.items}>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
