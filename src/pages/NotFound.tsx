import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.css';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>{t('notFound.title')}</h1>
      <Link to="/" className={styles.link}>
        {t('notFound.back')} →
      </Link>
    </div>
  );
}
