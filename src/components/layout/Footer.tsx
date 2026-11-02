import { useTranslation } from 'react-i18next';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../../data/contact';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.name}>Alberto Núñez Trejos</p>
          <p className={styles.tagline}>{t('footer.tagline')}</p>
        </div>

        <ul className={styles.links}>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>

        <p className={styles.rights}>
          © {year} Alberto Núñez Trejos. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
