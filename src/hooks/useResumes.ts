import { useTranslation } from 'react-i18next';

export type ResumeTrack = 'software' | 'data';

/**
 * Two résumés with the same facts, ordered for each role. Keeping both in one
 * map is what stops the site from linking a version that drifts from the PDFs.
 */
const RESUMES: Record<ResumeTrack, Record<'en' | 'es', string>> = {
  software: {
    en: '/resume/Alberto_Nunez_Trejos_CV_Software.pdf',
    es: '/resume/Alberto_Nunez_Trejos_CV_Software_ES.pdf',
  },
  data: {
    en: '/resume/Alberto_Nunez_Trejos_CV_Data.pdf',
    es: '/resume/Alberto_Nunez_Trejos_CV_Data_ES.pdf',
  },
};

export const RESUME_TRACKS: ResumeTrack[] = ['software', 'data'];

export interface ResumeLink {
  track: ResumeTrack;
  href: string;
  /** Full label, e.g. "CV · Desarrollo de software". */
  label: string;
}

/** Résumé links in the active language, software first to match the hero. */
export function useResumes(): ResumeLink[] {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === 'es' ? 'es' : 'en';
  return RESUME_TRACKS.map((track) => ({
    track,
    href: RESUMES[track][lang],
    label: t(`resume.${track}`),
  }));
}
