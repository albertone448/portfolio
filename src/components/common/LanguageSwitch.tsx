import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitch.module.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
] as const;

export function LanguageSwitch() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage === 'es' ? 'es' : 'en';

  return (
    <div className={styles.switch} role="group" aria-label={t('nav.langSwitch')}>
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={styles.option}
          data-active={current === code}
          aria-pressed={current === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
