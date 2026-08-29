import type { ReactNode } from 'react';
import styles from './ProjectPreviewFrame.module.css';

interface ProjectPreviewFrameProps {
  children: ReactNode;
  accent?: string;
  chrome?: boolean;
  aspectRatio?: string;
}

export function ProjectPreviewFrame({ children, accent, chrome = false, aspectRatio }: ProjectPreviewFrameProps) {
  return (
    <div
      className={styles.frame}
      style={{ '--frame-accent': accent, aspectRatio } as React.CSSProperties}
    >
      {chrome && (
        <div className={styles.chrome} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
      <div className={styles.media}>{children}</div>
    </div>
  );
}
