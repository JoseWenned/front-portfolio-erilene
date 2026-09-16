import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./habilidades.module.scss";

const skills = [
  {
    number: "01",
    title: "Treinamento personalizado",
    description:
      "Planejamento de treinos de acordo com os objetivos e necessidades de cada pessoa.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 16H25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M10 11V21M7 13V19M22 11V21M25 13V19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Avaliação física",
    description:
      "Acompanhamento das condições físicas para orientar estratégias de treinamento.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M16 11V16L20 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Prescrição de exercícios",
    description:
      "Seleção e organização de exercícios adequados aos objetivos do aluno.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8 23L13 18L17 21L24 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M20 13H24V17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Acompanhamento individualizado",
    description:
      "Orientação próxima durante o processo de evolução e adaptação aos treinos.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="11"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <path
          d="M8 25C8.8 20.8 11.5 18.5 16 18.5C20.5 18.5 23.2 20.8 24 25"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Treinamento funcional",
    description:
      "Exercícios voltados para desenvolvimento de capacidades físicas e movimentos funcionais.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 20H11L14 12L18 23L21 16L26 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Saúde e qualidade de vida",
    description:
      "Treinamento como ferramenta para promover saúde, bem-estar e qualidade de vida.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 25C16 25 7 19.5 7 13.5C7 10.5 9.1 8.5 11.8 8.5C13.6 8.5 15.1 9.4 16 11C16.9 9.4 18.4 8.5 20.2 8.5C22.9 8.5 25 10.5 25 13.5C25 19.5 16 25 16 25Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Habilidades() {
  return (
    <Section
      id="habilidades"
      className={styles.habilidades}
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
              Habilidades
            </p>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Conhecimento que{" "}
              <span>gera movimento.</span>
            </h2>

            <p className={styles.description}>
              Uma abordagem profissional baseada em
              acompanhamento, planejamento e respeito aos
              objetivos de cada pessoa.
            </p>
          </div>

          <div
            className={styles.headerNumber}
            aria-hidden="true"
          >
            <span>06</span>
            <small>áreas de atuação</small>
          </div>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <article
              key={skill.title}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>
                  {skill.number}
                </span>

                <div className={styles.cardIcon}>
                  {skill.icon}
                </div>

                <span
                  className={styles.cardArrow}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {skill.title}
                </h3>

                <p className={styles.cardDescription}>
                  {skill.description}
                </p>
              </div>

              <div
                className={styles.cardLine}
                aria-hidden="true"
              >
                <span />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}