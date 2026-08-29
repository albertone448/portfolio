import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { GalleryImage } from '../../types/project';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: GalleryImage[];
  captions: Record<string, string>;
  accent?: string;
}

export function Gallery({ images, captions, accent }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  return (
    <>
      <div className={styles.mosaic} style={{ '--gallery-accent': accent } as React.CSSProperties}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={styles.item}
            data-span={index === 0 ? 'lead' : 'default'}
            style={{ aspectRatio: image.aspectRatio }}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={captions[image.captionKey] ?? ''} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={captions[images[activeIndex].captionKey]}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <button ref={closeButtonRef} type="button" className={styles.close} onClick={() => setActiveIndex(null)}>
            <X size={20} strokeWidth={1.75} />
            <span className="visually-hidden">Close</span>
          </button>
          <figure className={styles.figure}>
            <img src={images[activeIndex].src} alt={captions[images[activeIndex].captionKey] ?? ''} />
            <figcaption>{captions[images[activeIndex].captionKey]}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
