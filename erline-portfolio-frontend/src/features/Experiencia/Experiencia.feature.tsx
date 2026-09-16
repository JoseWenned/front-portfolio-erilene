import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./experiencia.module.scss";

const experiences = [
  {
    period: "Experiência profissional",
    role: "Personal Trainer",
    description:
      "Atuação profissional com treinamento e acompanhamento individualizado, buscando respeitar os objetivos e as necessidades de cada pessoa.",
  },
];

export function Experiencia() {
  return (
    <Section
      id="experiencia"
      className={styles.experiencia}
    >
      <Container>
        <div className={styles.header}>
          <div className={styles.headerLabel}>
            <span className={styles.labelLine} />

            <span>Experiência</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Experiência que{" "}
              <span>transforma movimento.</span>
            </h2>

            <p className={styles.description}>
              Prática profissional, acompanhamento próximo e
              atenção individual para ajudar cada pessoa a
              evoluir de acordo com seus objetivos.
            </p>
          </div>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((experience, index) => (
            <article
              key={`${experience.period}-${experience.role}`}
              className={styles.experience}
            >
              <div className={styles.experienceNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={styles.experienceMain}>
                <div className={styles.experienceMeta}>
                  <span className={styles.period}>
                    {experience.period}
                  </span>

                  <span className={styles.metaLine} />
                </div>

                <h3 className={styles.role}>
                  {experience.role}
                </h3>

                <p className={styles.experienceDescription}>
                  {experience.description}
                </p>

                <div className={styles.experienceBottom}>
                  <span>
                    Treinamento personalizado
                  </span>

                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerLine} />

          <p>
            Movimento <span>•</span> acompanhamento{" "}
            <span>•</span> evolução
          </p>
        </div>
      </Container>
    </Section>
  );
}