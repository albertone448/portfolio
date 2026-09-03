import styles from './ProjectBanner.module.css';

interface ProjectBannerProps {
  src: string;
  accent?: string;
  /** CSS object-position, lets each banner keep its important subject in frame. */
  focalPoint?: string;
}

/**
 * A short, wide banner used at the top of a case study. Unlike
 * ProjectPreviewFrame (which locks to a screenshot's native ratio so nothing
 * is cropped), this is meant for decorative wide photography: a fixed,
 * modest height keeps every project's hero visual the same scale regardless
 * of the source image's own aspect ratio.
 */
export function ProjectBanner({ src, accent, focalPoint = 'center' }: ProjectBannerProps) {
  return (
    <div className={styles.banner} style={{ '--banner-accent': accent } as React.CSSProperties}>
      <img src={src} alt="" style={{ objectPosition: focalPoint }} />
    </div>
  );
}
