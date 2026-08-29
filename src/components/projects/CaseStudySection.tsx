import type { ReactNode } from 'react';
import styles from './CaseStudySection.module.css';

interface CaseStudySectionProps {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  wide?: boolean;
  tone?: 'default' | 'elevated';
}

export function CaseStudySection({ eyebrow, title, children, wide, tone = 'default' }: CaseStudySectionProps) {
  return (
    <section className={styles.section} data-tone={tone}>
      <div className={wide ? 'container-wide' : 'container'}>
        {(eyebrow || title) && (
          <div className={styles.head}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
