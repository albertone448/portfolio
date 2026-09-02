import { useTranslation } from 'react-i18next';

const RESUME_BY_LANG: Record<string, string> = {
  en: '/resume/Alberto_Nunez_Trejos_Resume.pdf',
  es: '/resume/Alberto_Nunez_Trejos_Resume_ES.pdf',
};

/** Returns the résumé PDF path matching the currently active language. */
export function useResumeUrl(): string {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === 'es' ? 'es' : 'en';
  return RESUME_BY_LANG[lang];
}
