import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./certificacoes.module.scss";

const certifications = [
  {
    title: "Certificações profissionais",
    description:
      "Conhecimentos e qualificações complementares que contribuem para uma atuação profissional mais completa.",
  },
];

export function Certificacoes() {
  return (
    <Section
      id="certificacoes"
      className={styles.certificacoes}
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Certificações</p>

          <h2 className={styles.title}>
            Aperfeiçoamento contínuo para uma atuação profissional
            de qualidade
          </h2>

          <p className={styles.description}>
            Formação complementar e busca constante por conhecimento
            para aprimorar a prática profissional e o acompanhamento
            dos alunos.
          </p>
        </div>

        <div className={styles.grid}>
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className={styles.card}
            >
              <div className={styles.icon} aria-hidden="true">
                ✓
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>
                  {certification.title}
                </h3>

                <p className={styles.cardDescription}>
                  {certification.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}