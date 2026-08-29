import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { LanguageSwitch } from '../common/LanguageSwitch';
import styles from './Header.module.css';

const GITHUB_URL = 'https://github.com/albertone448';
const LINKEDIN_URL = 'https://linkedin.com/in/albertone448';
const RESUME_URL = '/resume/Alberto_Nunez_Trejos_Resume.pdf';

export function Header() {
  const { t } = useTranslation();
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
        <a href="#top" className={styles.wordmark}>
          <span className={styles.wordmarkFull}>Alberto Núñez Trejos</span>
          <span className={styles.wordmarkShort} aria-hidden="true">
            ANT
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <a href="#work">{t('nav.work')}</a>
          <a href="#experience">{t('nav.experience')}</a>
          <a href="#about">{t('nav.about')}</a>
        </nav>

        <div className={styles.actions}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.iconLink}>
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconLink}>
            <LinkedinIcon size={18} />
          </a>
          <LanguageSwitch />
          <a href={RESUME_URL} download className={styles.resumeLink}>
            {t('nav.resume')}
          </a>
        </div>
      </div>
    </header>
  );
}
