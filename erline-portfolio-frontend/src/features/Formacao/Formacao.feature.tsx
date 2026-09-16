import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./formacao.module.scss";

const formations = [
  {
    number: "01",
    title: "Educação Física",
    label: "Formação acadêmica",
    description:
      "Formação acadêmica voltada ao estudo do movimento humano, exercício físico, saúde e qualidade de vida.",
  },
];

export function Formacao() {
  return (
    <Section
      id="formacao"
      className={styles.formacao}
    >
      <div
        className={styles.backgroundDecoration}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span
              className={styles.eyebrowLine}
              aria-hidden="true"
            />

            <p className={styles.eyebrow}>
              Formação
            </p>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Conhecimento que{" "}
              <span>fundamenta minha atuação.</span>
            </h2>

            <p className={styles.description}>
              Formação profissional e conhecimento aplicados
              à prática do treinamento e ao acompanhamento
              individualizado.
            </p>
          </div>

          <div
            className={styles.headerNumber}
            aria-hidden="true"
          >
            <span>01</span>
            <small>formação acadêmica</small>
          </div>
        </div>

        <div className={styles.timeline}>
          <div
            className={styles.timelineLine}
            aria-hidden="true"
          />

          {formations.map((formation) => (
            <article
              key={formation.title}
              className={styles.item}
            >
              <div className={styles.markerWrapper}>
                <span className={styles.marker} />

                <span className={styles.markerNumber}>
                  {formation.number}
                </span>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.label}>
                    {formation.label}
                  </span>

                  <span
                    className={styles.cardArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {formation.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {formation.description}
                  </p>
                </div>

                <div
                  className={styles.cardLine}
                  aria-hidden="true"
                >
                  <span />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerHighlight}>
          <span
            className={styles.footerIcon}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 6V26"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M6 16H26"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="16"
                cy="16"
                r="10"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>

          <div>
            <strong>
              Conhecimento em movimento
            </strong>

            <p>
              Formação que se transforma em prática,
              acompanhamento e cuidado.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}