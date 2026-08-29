import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { TableauDashboard } from '../../types/project';
import styles from './TableauShowcase.module.css';

interface TableauShowcaseProps {
  dashboard: TableauDashboard;
  title: string;
  description: string;
  accent?: string;
  liveLinkLabel: string;
}

/**
 * Renders a Tableau Public view inside a responsive, aspect-ratio-locked
 * container so the document never grows a horizontal scrollbar, regardless
 * of the workbook's native canvas size. The iframe only mounts once the
 * person opts in, which keeps the initial page weight down and avoids
 * fighting Tableau's own responsive layout guesswork on first paint.
 */
export function TableauShowcase({ dashboard, title, description, accent, liveLinkLabel }: TableauShowcaseProps) {
  const [loaded, setLoaded] = useState(false);
  const publicUrl = `https://public.tableau.com/views/${dashboard.path}`;
  const embedUrl = `${publicUrl}?:showVizHome=no&:embed=true&:toolbar=bottom`;

  return (
    <figure className={styles.showcase} style={{ '--dashboard-accent': accent } as React.CSSProperties}>
      <div className={styles.viewport}>
        {loaded ? (
          <iframe
            src={embedUrl}
            title={title}
            className={styles.iframe}
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.placeholder} onClick={() => setLoaded(true)}>
            <span className={styles.playLabel}>{liveLinkLabel}</span>
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
        <a href={publicUrl} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
          {liveLinkLabel}
          <ExternalLink size={14} strokeWidth={2} />
        </a>
      </figcaption>
    </figure>
  );
}
