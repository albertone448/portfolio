import { BannerFrame } from './BannerFrame';
import styles from './ProjectBanner.module.css';

interface ProjectBannerProps {
  src: string;
  accent?: string;
  /** CSS object-position, lets each banner keep its important subject in frame. */
  focalPoint?: string;
}

/**
 * A short, wide banner used at the top of a case study, for projects that
 * have an actual photograph to lead with. The photo is deliberately cropped
 * to the shared BannerFrame height rather than shown at its native ratio,
 * so it reads as decorative context, not evidence to inspect closely.
 */
export function ProjectBanner({ src, accent, focalPoint = 'center' }: ProjectBannerProps) {
  return (
    <BannerFrame accent={accent}>
      <img className={styles.image} src={src} alt="" style={{ objectPosition: focalPoint }} />
    </BannerFrame>
  );
}
