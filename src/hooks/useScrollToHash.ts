import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Header links point to "/#section" so they work from any route, not just
 * Home. React Router only swaps the page on navigation, it doesn't scroll
 * to the hash target the way a full page load would, so this does it by
 * hand once the target route has rendered. `scroll-margin-top` on the
 * section ids (see global.css) keeps the sticky header from covering the
 * heading once scrolled into view.
 */
export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait a tick so the target route has finished rendering.
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0 });
    return undefined;
  }, [location.pathname, location.hash]);
}
