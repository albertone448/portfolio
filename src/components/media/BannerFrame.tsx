import type { ReactNode } from 'react';
import styles from './BannerFrame.module.css';

interface BannerFrameProps {
  accent?: string;
  children: ReactNode;
}

/**
 * Fixed-height frame shared by every case study's hero visual. ProjectBanner
 * (a photograph) and ProjectIllustration (a drawn scene) both render inside
 * this same frame, so a project without a photogenic screenshot to lead with
 * still opens at the same scale as the other two, instead of improvising a
 * taller ad hoc container.
 */
export function BannerFrame({ accent, children }: BannerFrameProps) {
  return (
    <div className={styles.frame} style={{ '--banner-accent': accent } as React.CSSProperties}>
      {children}
    </div>
  );
}
