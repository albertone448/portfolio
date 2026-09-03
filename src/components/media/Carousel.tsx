import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../../types/project';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: GalleryImage[];
  captions: Record<string, string>;
  accent?: string;
  prevLabel: string;
  nextLabel: string;
  goToLabel: (index: number) => string;
}

export function Carousel({ images, captions, accent, prevLabel, nextLabel, goToLabel }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [goPrev, goNext]);

  const current = images[index];

  return (
    <div
      className={styles.carousel}
      style={{ '--carousel-accent': accent } as React.CSSProperties}
      role="region"
      aria-roledescription="carousel"
      aria-label={captions[current.captionKey]}
    >
      <div className={styles.viewport} style={{ aspectRatio: current.aspectRatio }}>
        <img src={current.src} alt={captions[current.captionKey] ?? ''} />

        <button type="button" className={styles.navButton} data-side="prev" onClick={goPrev} aria-label={prevLabel}>
          <ChevronLeft size={20} strokeWidth={2} />
        </button>
        <button type="button" className={styles.navButton} data-side="next" onClick={goNext} aria-label={nextLabel}>
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      <div className={styles.footer}>
        <p className={styles.caption}>{captions[current.captionKey]}</p>
        <div className={styles.dots} role="tablist" aria-label={goToLabel(0).split(' 1')[0]}>
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={goToLabel(i + 1)}
              className={styles.dot}
              data-active={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
