import type { ReactNode } from 'react';
import styles from './QuoteBlock.module.css';

interface QuoteBlockProps {
  children: ReactNode;
  /** Optional kicker inside the block. Omit when the section heading right above already says it. */
  label?: string;
  accent?: string;
  tone?: 'question' | 'finding' | 'note';
}

export function QuoteBlock({ label, children, accent, tone = 'question' }: QuoteBlockProps) {
  return (
    <blockquote className={styles.block} data-tone={tone} style={{ '--quote-accent': accent } as React.CSSProperties}>
      {label && <span className={styles.label}>{label}</span>}
      <p className={styles.text}>{children}</p>
    </blockquote>
  );
}
