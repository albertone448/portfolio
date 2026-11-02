import { useTranslation } from 'react-i18next';
import { Hero } from '../components/sections/Hero';
import { SelectedWork } from '../components/sections/SelectedWork';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

/**
 * Order follows what a reviewer needs to decide on an interview: who and
 * which roles (hero), the evidence (projects), where it was applied
 * professionally (experience), then supporting detail and contact.
 */
export function Home() {
  const { t } = useTranslation();
  useDocumentMeta(t('meta.title'), t('meta.description'), { appendName: false });

  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
