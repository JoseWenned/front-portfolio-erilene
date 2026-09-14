"use client";

import Image, {
  StaticImageData,
} from "next/image";

import {
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

import styles from "./heroCarousel.module.scss";

interface HeroCarouselProps {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
}

export function HeroCarousel({
  images,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex(
        (current) => (current + 1) % images.length,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  function handleNext() {
    setCurrentIndex(
      (current) => (current + 1) % images.length,
    );
  }

  function handlePrevious() {
    setCurrentIndex(
      (current) =>
        (current - 1 + images.length) %
        images.length,
    );
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handlePrevious();
    }
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className={styles.carousel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Galeria de imagens de Erline"
    >
      <div className={styles.imageWrapper}>
        {images.map((image, index) => (
          <div
            key={image.src.src}
            className={`${styles.slide} ${
              index === currentIndex
                ? styles.active
                : ""
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 460px"
              className={styles.image}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.navigationButton} ${styles.previousButton}`}
              onClick={handlePrevious}
              aria-label="Imagem anterior"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M14.5 5L9.5 12L14.5 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={`${styles.navigationButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Próxima imagem"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M9.5 5L14.5 12L9.5 19"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={styles.progress}
              aria-label={`Imagem ${
                currentIndex + 1
              } de ${images.length}`}
            >
              <span className={styles.progressCurrent}>
                {String(currentIndex + 1).padStart(
                  2,
                  "0",
                )}
              </span>

              <div
                className={styles.indicators}
                aria-label="Selecionar imagem"
              >
                {images.map((image, index) => (
                  <button
                    key={image.src.src}
                    type="button"
                    aria-label={`Exibir imagem ${
                      index + 1
                    }`}
                    aria-current={
                      index === currentIndex
                    }
                    className={`${styles.indicator} ${
                      index === currentIndex
                        ? styles.activeIndicator
                        : ""
                    }`}
                    onClick={() =>
                      handleIndicatorClick(index)
                    }
                  />
                ))}
              </div>

              <span className={styles.progressTotal}>
                {String(images.length).padStart(
                  2,
                  "0",
                )}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}