import { useCallback, useEffect, useRef, useState } from "react";
import "./Slideshow.css";

type SlideshowProps = {
  images: readonly string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
  ofLabel: string;
};

export function Slideshow({ images, alt, prevLabel, nextLabel, ofLabel }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const paused = useRef(false);
  const total = images.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      if (total === 0) return;
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      if (!paused.current) go(1);
    }, 5000);
    return () => window.clearInterval(id);
  }, [go, total]);

  if (total === 0) return null;

  return (
    <div
      className="slideshow"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onTouchStart={(e) => {
        paused.current = true;
        touchStartX.current = e.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        const end = e.changedTouches[0]?.clientX;
        touchStartX.current = null;
        paused.current = false;
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < 40) return;
        go(delta < 0 ? 1 : -1);
      }}
    >
      <div className="slideshow__stage">
        <img
          key={images[index]}
          src={images[index]}
          alt={`${alt} — ${index + 1} ${ofLabel} ${total}`}
          className="slideshow__image"
          loading={index === 0 ? "eager" : "lazy"}
          draggable={false}
        />
        {total > 1 && (
          <>
            <button
              type="button"
              className="slideshow__nav slideshow__nav--prev"
              onClick={() => go(-1)}
              aria-label={prevLabel}
            >
              ‹
            </button>
            <button
              type="button"
              className="slideshow__nav slideshow__nav--next"
              onClick={() => go(1)}
              aria-label={nextLabel}
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="slideshow__meta">
          <p className="slideshow__count" aria-live="polite">
            {index + 1} / {total}
          </p>
          <div className="slideshow__dots" role="tablist" aria-label={alt}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={i === index ? "is-active" : undefined}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} ${ofLabel} ${total}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
