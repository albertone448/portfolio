import type { ReactNode } from 'react';
import { Construction } from 'lucide-react';
import styles from './StatusNote.module.css';

interface StatusNoteProps {
  children: ReactNode;
  accent?: string;
}

export function StatusNote({ children, accent }: StatusNoteProps) {
  return (
    <div className={styles.note} style={{ '--note-accent': accent } as React.CSSProperties} role="status">
      <Construction size={18} strokeWidth={1.75} className={styles.icon} aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}
