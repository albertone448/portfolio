import styles from './ArchitectureDiagram.module.css';

interface ArchitectureDiagramProps {
  steps: string[];
  accent?: string;
}

export function ArchitectureDiagram({ steps, accent }: ArchitectureDiagramProps) {
  return (
    <ol className={styles.diagram} style={{ '--diagram-accent': accent } as React.CSSProperties}>
      {steps.map((step, index) => (
        <li key={step} className={styles.step}>
          <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
          <span className={styles.label}>{step}</span>
        </li>
      ))}
    </ol>
  );
}
