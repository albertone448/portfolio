import styles from './ArchitectureDiagram.module.css';

export type ArchitectureStepStatus = 'done' | 'pending';

export interface ArchitectureStep {
  label: string;
  status?: ArchitectureStepStatus;
}

interface ArchitectureDiagramProps {
  /** Plain strings for finished systems; objects when a step's status matters. */
  steps: Array<string | ArchitectureStep>;
  accent?: string;
  /** Required when any step carries a status, so the badge text stays translated. */
  statusLabels?: Record<ArchitectureStepStatus, string>;
}

export function ArchitectureDiagram({ steps, accent, statusLabels }: ArchitectureDiagramProps) {
  const normalized = steps.map((step) => (typeof step === 'string' ? { label: step } : step));

  return (
    <ol className={styles.diagram} style={{ '--diagram-accent': accent } as React.CSSProperties}>
      {normalized.map(({ label, status }, index) => (
        <li key={label} className={styles.step} data-status={status}>
          <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
          <span className={styles.label}>{label}</span>
          {status && statusLabels && <span className={styles.badge}>{statusLabels[status]}</span>}
        </li>
      ))}
    </ol>
  );
}
