import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';
import { LanguageSwitch } from '../common/LanguageSwitch';
import { useResumeUrl } from '../../hooks/useResumeUrl';
import { GITHUB_URL, LINKEDIN_URL } from '../../data/contact';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { to: '/#work', key: 'work' },
  { to: '/#experience', key: 'experience' },
  { to: '/#skills', key: 'skills' },
  { to: '/#about', key: 'about' },
  { to: '/#contact', key: 'contact' },
] as const;

export function Header() {
  const { t } = useTranslation();
  const resumeUrl = useResumeUrl();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  // The menu belongs to the location it was opened on, so any navigation
  // (including a same-page hash link) closes it without an extra effect.
  const [menuOpenedAt, setMenuOpenedAt] = useState<string | null>(null);
  const menuOpen = menuOpenedAt === location.key;
  const closeMenu = () => setMenuOpenedAt(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpenedAt(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header} data-scrolled={scrolled || menuOpen}>
      <div className={styles.inner}>
        <Link to="/" className={styles.wordmark}>
          <span className={styles.wordmarkFull}>Alberto Núñez Trejos</span>
          <span className={styles.wordmarkShort} aria-hidden="true">
            ANT
          </span>
        </Link>

        <nav className={styles.nav} aria-label={t('nav.primary')}>
          {NAV_ITEMS.map(({ to, key }) => (
            <Link key={key} to={to}>
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.iconLink}>
            <GithubIcon size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.iconLink}>
            <LinkedinIcon size={18} />
          </a>
          <LanguageSwitch />
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
            {t('nav.resume')}
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            onClick={() => setMenuOpenedAt(menuOpen ? null : location.key)}
          >
            {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={styles.mobileNav}
        data-open={menuOpen}
        aria-label={t('nav.primary')}
        hidden={!menuOpen}
      >
        <ul>
          {NAV_ITEMS.map(({ to, key }) => (
            <li key={key}>
              <Link to={to} onClick={closeMenu}>
                {t(`nav.${key}`)}
              </Link>
            </li>
          ))}
          <li className={styles.mobileSocial}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
