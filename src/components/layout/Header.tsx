import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { LanguageSwitch } from '../common/LanguageSwitch';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import styles from './Header.module.css';

const GITHUB_URL = 'https://github.com/albertone448';
const LINKEDIN_URL = 'https://linkedin.com/in/albertone448';

export function Header() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.inner}>
        <Link to="/" className={styles.wordmark}>
          <span className={styles.wordmarkFull}>Alberto Núñez Trejos</span>
          <span className={styles.wordmarkShort} aria-hidden="true">
            ANT
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link to="/#work">{t('nav.work')}</Link>
          <Link to="/#experience">{t('nav.experience')}</Link>
          <Link to="/#about">{t('nav.about')}</Link>
        </nav>

        <div className={styles.actions}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.iconLink}>
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconLink}>
            <LinkedinIcon size={18} />
          </a>
          <LanguageSwitch />
          <a href={resumeUrl} download className={styles.resumeLink}>
            {t('nav.resume')}
          </a>
        </div>
      </div>
    </header>
  );
}
