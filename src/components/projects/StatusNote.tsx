import { Construction } from 'lucide-react';
import styles from './StatusNote.module.css';

interface StatusNoteProps {
  children: string;
  accent?: string;
}

export function StatusNote({ children, accent }: StatusNoteProps) {
  return (
    <div className={styles.note} style={{ '--note-accent': accent } as React.CSSProperties} role="status">
      <Construction size={18} strokeWidth={1.75} className={styles.icon} />
      <p>{children}</p>
    </div>
  );
}
