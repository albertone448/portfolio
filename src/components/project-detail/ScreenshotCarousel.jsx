import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './ScreenshotCarousel.css'

export default function ScreenshotCarousel({ screenshots, basePath, captions }) {
  const [index, setIndex] = useState(0)
  const total = screenshots.length

  const goTo = (i) => setIndex((i + total) % total)

  return (
    <div className="screenshot-carousel">
      <div className="screenshot-carousel__viewport">
        <img
          src={`${basePath}/${screenshots[index].file}`}
          alt={captions[screenshots[index].captionKey]}
          className="screenshot-carousel__image"
        />

        <button
          type="button"
          className="screenshot-carousel__nav screenshot-carousel__nav--prev"
          onClick={() => goTo(index - 1)}
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          className="screenshot-carousel__nav screenshot-carousel__nav--next"
          onClick={() => goTo(index + 1)}
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="screenshot-carousel__caption">{captions[screenshots[index].captionKey]}</p>

      <div className="screenshot-carousel__dots">
        {screenshots.map((shot, i) => (
          <button
            key={shot.file}
            type="button"
            className={`screenshot-carousel__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={captions[shot.captionKey]}
          />
        ))}
      </div>
    </div>
  )
}
