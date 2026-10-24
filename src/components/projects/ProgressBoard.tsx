import { BulletList } from './BulletList';
import styles from './ProgressBoard.module.css';

interface ProgressBoardProps {
  doneTitle: string;
  done: string[];
  nextTitle: string;
  next: string[];
  accent?: string;
}

/**
 * For projects still in progress: what works today next to what comes next,
 * kept as two separate lists so finished and planned work never blur together.
 * The "next" column is numbered because its order is the actual build order.
 */
export function ProgressBoard({ doneTitle, done, nextTitle, next, accent }: ProgressBoardProps) {
  return (
    <div className={styles.board}>
      <div className={styles.column}>
        <h3 className={styles.heading}>{doneTitle}</h3>
        <BulletList items={done} accent={accent} />
      </div>
      <div className={styles.column} data-variant="next">
        <h3 className={styles.heading}>{nextTitle}</h3>
        <BulletList items={next} accent="var(--color-text-muted)" numbered />
      </div>
    </div>
  );
}
