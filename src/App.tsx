import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { useScrollToHash } from './hooks/useScrollToHash';

// Case studies load on demand: most visits start on Home, and the Tableau and
// carousel code on these pages isn't needed until someone opens one.
const ProjectStoreCredit = lazy(() => import('./pages/ProjectStoreCredit').then((m) => ({ default: m.ProjectStoreCredit })));
const ProjectBatazo = lazy(() => import('./pages/ProjectBatazo').then((m) => ({ default: m.ProjectBatazo })));
const ProjectMessiOutlier = lazy(() => import('./pages/ProjectMessiOutlier').then((m) => ({ default: m.ProjectMessiOutlier })));
const ProjectAlwaysBarca = lazy(() => import('./pages/ProjectAlwaysBarca').then((m) => ({ default: m.ProjectAlwaysBarca })));

export function App() {
  const { i18n, t } = useTranslation();
  useScrollToHash();

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
        <Suspense fallback={<div className="route-fallback" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/store-credit" element={<ProjectStoreCredit />} />
            <Route path="/projects/always-barca" element={<ProjectAlwaysBarca />} />
            <Route path="/projects/messi-outlier" element={<ProjectMessiOutlier />} />
            <Route path="/projects/batazo" element={<ProjectBatazo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
