import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./experiencia.module.scss";

const experiences = [
  {
    company: "Experiência profissional",
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
          <p className={styles.eyebrow}>Experiência</p>

          <h2 className={styles.title}>
            Experiência profissional e acompanhamento personalizado
          </h2>

          <p className={styles.description}>
            Experiência construída por meio da prática profissional,
            do acompanhamento individualizado e da aplicação de
            conhecimentos na área de Educação Física.
          </p>
        </div>

        <div className={styles.list}>
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <span className={styles.company}>
                  {experience.company}
                </span>

                <span className={styles.role}>
                  {experience.role}
                </span>
              </div>

              <p className={styles.cardDescription}>
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}