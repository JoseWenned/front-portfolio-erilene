import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./formacao.module.scss";

const formations = [
  {
    title: "Educação Física",
    description:
      "Formação acadêmica voltada ao estudo do movimento humano, exercício físico, saúde e qualidade de vida.",
  },
];

export function Formacao() {
  return (
    <Section id="formacao" className={styles.formacao}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Formação</p>

          <h2 className={styles.title}>
            Conhecimento que fundamenta minha atuação
          </h2>

          <p className={styles.description}>
            Formação profissional e conhecimento aplicados à prática
            do treinamento e ao acompanhamento individualizado.
          </p>
        </div>

        <div className={styles.timeline}>
          {formations.map((formation) => (
            <article
              key={formation.title}
              className={styles.item}
            >
              <div className={styles.marker} />

              <div className={styles.card}>
                <span className={styles.label}>
                  Formação acadêmica
                </span>

                <h3 className={styles.cardTitle}>
                  {formation.title}
                </h3>

                <p className={styles.cardDescription}>
                  {formation.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}