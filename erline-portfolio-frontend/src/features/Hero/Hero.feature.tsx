import Image01 from "../../assets/banner/image01.png";
import Image02 from "../../assets/banner/image02.png";
import Image03 from "../../assets/banner/image03.png";
import Image04 from "../../assets/banner/image04.png";
import Image05 from "../../assets/banner/image05.png";
import Image06 from "../../assets/banner/image06.png";

import { Button } from "../../components/fragments/Button/Button.fragment";
import { Container } from "../../components/fragments/Container/Container";
import { HeroCarousel } from "../../components/fragments/HeroCarousel/HeroCarousel";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./hero.module.scss";

const heroImages = [
  {
    src: Image01,
    alt: "Erline realizando atividade física",
  },
  {
    src: Image02,
    alt: "Erline durante atividade profissional",
  },
  {
    src: Image03,
    alt: "Erline em ambiente de treinamento",
  },
  {
    src: Image04,
    alt: "Erline acompanhando atividade física",
  },
  {
    src: Image05,
    alt: "Erline durante treinamento",
  },
  {
    src: Image06,
    alt: "Erline, Personal Trainer",
  },
];

export function Hero() {
  return (
    <Section
      id="inicio"
      className={styles.hero}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundShape}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.eyebrowWrapper}>
              <span
                className={styles.eyebrowLine}
                aria-hidden="true"
              />

              <p className={styles.eyebrow}>
                Personal Trainer
              </p>
            </div>

            <h1 className={styles.title}>
              Olá, eu sou{" "}
              <span>Erilene Santiago</span>
            </h1>

            <p className={styles.description}>
              Transformando movimento em saúde,
              força e qualidade de vida.
            </p>

            <div className={styles.actions}>
              <Button href="#galeria">
                Conheça meu trabalho
              </Button>

              <span className={styles.actionHint}>
                <span
                  className={styles.actionDot}
                  aria-hidden="true"
                />

                Treinamento personalizado
              </span>
            </div>
          </div>

          <div className={styles.visual}>
            <div
              className={`${styles.decorativeIcon} ${styles.dumbbell}`}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19V29M11 21V27M7 22V26M33 19V29M37 21V27M41 22V26M15 24H33"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div
              className={`${styles.decorativeIcon} ${styles.heart}`}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 39S9 29 9 18.5C9 13.25 12.75 10 17.25 10C20.2 10 22.7 11.55 24 14C25.3 11.55 27.8 10 30.75 10C35.25 10 39 13.25 39 18.5C39 29 24 39 24 39Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className={`${styles.decorativeIcon} ${styles.activity}`}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 30H15L20 18L26 34L31 24L35 30H40"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className={`${styles.decorativeIcon} ${styles.plus}`}
              aria-hidden="true"
            >
              <span>+</span>
            </div>

            <div className={styles.imageFrame}>
              <div
                className={styles.imageGlow}
                aria-hidden="true"
              />

              <div className={styles.imageContent}>
                <HeroCarousel
                  images={heroImages}
                />
              </div>

              <div className={styles.imageBadge}>
                <span
                  className={styles.badgeIcon}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V20M4 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span>
                  <strong>Movimento</strong>
                  <small>que transforma</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}