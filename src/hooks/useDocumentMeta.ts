import { useEffect } from 'react';

interface DocumentMetaOptions {
  /** Project pages append the owner's name; Home's title already includes it. */
  appendName?: boolean;
}

/**
 * Keeps the tab title and meta description in the active language. The
 * static values in index.html are what crawlers and link previews see;
 * this only covers in-app navigation and language switches.
 */
export function useDocumentMeta(title: string, description: string, { appendName = true }: DocumentMetaOptions = {}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = appendName ? `${title} · Alberto Núñez Trejos` : title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? '';
    metaDescription?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute('content', previousDescription);
    };
  }, [title, description, appendName]);
}
