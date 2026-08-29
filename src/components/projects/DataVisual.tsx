import styles from './DataVisual.module.css';

interface DataVisualProps {
  accent: string;
  eyebrow: string;
  facts: string[];
}

/**
 * A small, honest stand-in for projects whose real evidence lives on Tableau
 * Public rather than as a static asset. It surfaces facts that are already
 * true (methodology, scope) instead of faking a chart with invented numbers.
 */
export function DataVisual({ accent, eyebrow, facts }: DataVisualProps) {
  return (
    <div className={styles.card} style={{ '--visual-accent': accent } as React.CSSProperties}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <div className={styles.bars} aria-hidden="true">
        {[62, 84, 47, 91, 58].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <ul className={styles.facts}>
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
