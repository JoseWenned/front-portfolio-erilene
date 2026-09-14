// import Image from "next/image";

// import { Container } from "../../components/fragments/Container/Container";
// import { Section } from "../../components/fragments/Section/Section.fragment";

// import image01 from "../../assets/banner/image01.png";

// import styles from "./galeria.module.scss";

// const gallery = [
//   {
//     src: image01,
//     alt: "Erline durante sua atuação profissional como Personal Trainer",
//     title: "Treinamento personalizado",
//   },
// ];

// export function Galeria() {
//   return (
//     <Section
//       id="galeria"
//       className={styles.galeria}
//     >
//       <Container>
//         <div className={styles.header}>
//           <p className={styles.eyebrow}>Galeria</p>

//           <h2 className={styles.title}>
//             Movimento na prática
//           </h2>

//           <p className={styles.description}>
//             Um pouco da minha rotina profissional, dos treinamentos
//             e dos momentos que fazem parte dessa jornada.
//           </p>
//         </div>

//         <div className={styles.grid}>
//           {gallery.map((item) => (
//             <article
//               key={item.title}
//               className={styles.card}
//             >
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className={styles.image}
//                 />
//               </div>

//               <div className={styles.caption}>
//                 <h3 className={styles.cardTitle}>
//                   {item.title}
//                 </h3>
//               </div>
//             </article>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }

"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import Image01 from "../../assets/galeria/image01.png";
import Image02 from "../../assets/galeria/image02.png";
import Image03 from "../../assets/galeria/image03.png";
import Image04 from "../../assets/galeria/image04.png";
import Image05 from "../../assets/galeria/image05.png";
import Image06 from "../../assets/galeria/image06.png";

import styles from "./galeria.module.scss";

const gallery = [
  {
    src: Image01,
    alt: "Erline durante sua atuação profissional como Personal Trainer",
    title: "Treinamento personalizado",
  },
  {
    src: Image02,
    alt: "Erline durante atividade física",
    title: "Movimento e performance",
  },
  {
    src: Image03,
    alt: "Erline em momento de treinamento",
    title: "Acompanhamento profissional",
  },
  {
    src: Image04,
    alt: "Erline durante sua rotina profissional",
    title: "Prática profissional",
  },
  {
    src: Image05,
    alt: "Erline realizando atividade de treinamento",
    title: "Força e evolução",
  },
  {
    src: Image06,
    alt: "Erline em ambiente de treinamento",
    title: "Saúde em movimento",
  },
];

export function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = gallery.length;

  function handleNext() {
    setCurrentIndex((current) => (current + 1) % totalImages);
  }

  function handlePrevious() {
    setCurrentIndex(
      (current) => (current - 1 + totalImages) % totalImages,
    );
  }

  function handleIndicatorClick(index: number) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    if (totalImages <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages]);

  function getSlidePosition(index: number) {
    let position = index - currentIndex;

    if (position > totalImages / 2) {
      position -= totalImages;
    }

    if (position < -totalImages / 2) {
      position += totalImages;
    }

    return position;
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
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

  return (
    <Section id="galeria" className={styles.galeria}>
      <div
        className={styles.backgroundShape}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.header}>
          <div className={styles.headerLabel}>
            <span
              className={styles.labelLine}
              aria-hidden="true"
            />

            <span>Galeria</span>
          </div>

          <div className={styles.headerContent}>
            <div>
              <h2 className={styles.title}>
                Movimento
                <span> na prática.</span>
              </h2>

              <p className={styles.description}>
                Um pouco da rotina profissional, dos treinamentos
                e dos momentos que fazem parte dessa jornada.
              </p>
            </div>

            <div
              className={styles.headerCount}
              aria-hidden="true"
            >
              <span>
                {String(currentIndex + 1).padStart(2, "0")}
              </span>

              <small>
                / {String(totalImages).padStart(2, "0")}
              </small>
            </div>
          </div>
        </div>

        <div
          className={styles.carousel}
          tabIndex={0}
          aria-label="Galeria de imagens de Erline"
          onKeyDown={handleKeyDown}
        >
          <div className={styles.carouselStage}>
            {gallery.map((item, index) => {
              const position = getSlidePosition(index);
              const isActive = position === 0;

              return (
                <article
                  key={item.src.src}
                  className={`${styles.slide} ${
                    isActive ? styles.activeSlide : ""
                  }`}
                  style={
                    {
                      "--slide-position": position,
                    } as CSSProperties
                  }
                  aria-hidden={!isActive}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 88vw, 620px"
                      className={styles.image}
                      priority={index === 0}
                    />

                    <div
                      className={styles.imageOverlay}
                      aria-hidden="true"
                    />

                    <span className={styles.imageNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className={styles.imageCorner}
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className={styles.caption}>
                    <span className={styles.captionLabel}>
                      Experiência{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>

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

          <div className={styles.carouselFooter}>
            <div
              className={styles.indicators}
              aria-label="Selecionar imagem"
            >
              {gallery.map((item, index) => (
                <button
                  key={item.src.src}
                  type="button"
                  className={`${styles.indicator} ${
                    index === currentIndex
                      ? styles.activeIndicator
                      : ""
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`Exibir imagem ${index + 1}`}
                  aria-current={
                    index === currentIndex
                      ? "true"
                      : undefined
                  }
                />
              ))}
            </div>

            <div className={styles.footerHint}>
              <span
                className={styles.footerLine}
                aria-hidden="true"
              />

              <span>Explore a galeria</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}