import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectStoreCredit } from './pages/ProjectStoreCredit';
import { ProjectAlwaysBarca } from './pages/ProjectAlwaysBarca';
import { ProjectMessiOutlier } from './pages/ProjectMessiOutlier';
import { NotFound } from './pages/NotFound';

export function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'en';
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t('nav.skipToContent')}
      </a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/store-credit" element={<ProjectStoreCredit />} />
          <Route path="/projects/always-barca" element={<ProjectAlwaysBarca />} />
          <Route path="/projects/messi-outlier" element={<ProjectMessiOutlier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
