"use client";

import Image from "next/image";
import { useState } from "react";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import image01 from "../../assets/banner/image01.png";

import styles from "./depoimentos.module.scss";

const testimonials = [
  {
    name: "Cliente",
    role: "Aluna de treinamento personalizado",
    text: "Excelente acompanhamento e atenção durante os treinos. Me senti muito mais confiante e motivada para continuar evoluindo.",
    rating: 5,
    image: image01,
    imageAlt: "Cliente durante momento de treinamento com Erline",
  },
  {
    name: "Cliente",
    role: "Aluna de treinamento personalizado",
    text: "Profissional dedicada, atenciosa e comprometida com os resultados. O acompanhamento faz toda a diferença.",
    rating: 5,
    image: image01,
    imageAlt: "Cliente durante momento de treinamento com Erline",
  },
];

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  function handlePrevious() {
    setCurrentIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function handleNext() {
    setCurrentIndex(
      (current) => (current + 1) % testimonials.length,
    );
  }

  return (
    <Section
      id="depoimentos"
      className={styles.depoimentos}
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundCircle}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.header}>
          <div className={styles.headerLabel}>
            <span
              className={styles.labelLine}
              aria-hidden="true"
            />

            <span>Depoimentos</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Histórias de quem
              <span> vive o movimento.</span>
            </h2>

            <p className={styles.description}>
              Experiências de pessoas que encontraram no
              acompanhamento personalizado um caminho para
              evoluir, cuidar da saúde e alcançar seus objetivos.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.testimonialArea}>
            <article className={styles.testimonialCard}>
              <div className={styles.testimonialImageWrapper}>
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className={styles.testimonialImage}
                />

                <div
                  className={styles.imageOverlay}
                  aria-hidden="true"
                />

                <span className={styles.imageLabel}>
                  Experiência real
                </span>
              </div>

              <div className={styles.testimonialContent}>
                <span
                  className={styles.quoteMark}
                  aria-hidden="true"
                >
                  “
                </span>

                <div
                  className={styles.rating}
                  aria-label={`Avaliação de ${currentTestimonial.rating} de 5 estrelas`}
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        index < currentTestimonial.rating
                          ? styles.star
                          : styles.starEmpty
                      }
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className={styles.testimonialText}>
                  {currentTestimonial.text}
                </blockquote>

                <div className={styles.testimonialFooter}>
                  <div className={styles.author}>
                    <strong>
                      {currentTestimonial.name}
                    </strong>

                    <span>
                      {currentTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={styles.cardDecoration}
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
            </article>

            <div className={styles.carouselControls}>
              <span className={styles.carouselCount}>
                <strong>
                  {String(currentIndex + 1).padStart(2, "0")}
                </strong>

                <span>
                  / {String(testimonials.length).padStart(2, "0")}
                </span>
              </span>

              <div className={styles.indicators}>
                {testimonials.map((testimonial, index) => (
                  <button
                    key={`${testimonial.name}-${index}`}
                    type="button"
                    className={`${styles.indicator} ${
                      index === currentIndex
                        ? styles.activeIndicator
                        : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Exibir depoimento ${index + 1}`}
                    aria-current={
                      index === currentIndex
                        ? "true"
                        : undefined
                    }
                  />
                ))}
              </div>

              <div className={styles.navigation}>
                <button
                  type="button"
                  className={styles.navigationButton}
                  onClick={handlePrevious}
                  aria-label="Depoimento anterior"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
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
                  className={styles.navigationButton}
                  onClick={handleNext}
                  aria-label="Próximo depoimento"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
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
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <div>
                <span className={styles.formLabel}>
                  Sua experiência
                </span>

                <h3 className={styles.formTitle}>
                  Compartilhe sua história.
                </h3>
              </div>
            </div>

            <p className={styles.formDescription}>
              Seu relato pode inspirar outras pessoas a começarem
              também.
            </p>

            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="nome">
                  Nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="depoimento">
                  Depoimento
                </label>

                <textarea
                  id="depoimento"
                  name="depoimento"
                  placeholder="Conte como foi sua experiência..."
                  rows={4}
                />
              </div>

              <div className={styles.photoField}>
                <span className={styles.photoLabel}>
                  Foto
                </span>

                <div
                  className={styles.photoUpload}
                  aria-hidden="true"
                >
                  <div className={styles.uploadIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 16V4M12 4L7.5 8.5M12 4L16.5 8.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M5 14V18C5 19.1 5.9 20 7 20H17C18.1 20 19 19.1 19 18V14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <strong>
                      Adicionar uma foto
                    </strong>

                    <span>
                      Compartilhe um momento do seu treino.
                    </span>
                  </div>

                  <span className={styles.uploadArrow}>
                    ↗
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={styles.submit}
              >
                <span>
                  Enviar depoimento
                </span>

                <span
                  className={styles.submitIcon}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footer}>
          <div
            className={styles.footerMark}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>

          <p>
            Cada experiência
            <span> conta uma história.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}