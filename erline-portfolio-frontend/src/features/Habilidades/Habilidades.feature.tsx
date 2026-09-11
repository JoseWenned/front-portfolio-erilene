import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./habilidades.module.scss";

const skills = [
  {
    title: "Treinamento personalizado",
    description:
      "Planejamento de treinos de acordo com os objetivos e necessidades de cada pessoa.",
  },
  {
    title: "Avaliação física",
    description:
      "Acompanhamento das condições físicas para orientar estratégias de treinamento.",
  },
  {
    title: "Prescrição de exercícios",
    description:
      "Seleção e organização de exercícios adequados aos objetivos do aluno.",
  },
  {
    title: "Acompanhamento individualizado",
    description:
      "Orientação próxima durante o processo de evolução e adaptação aos treinos.",
  },
  {
    title: "Treinamento funcional",
    description:
      "Exercícios voltados para desenvolvimento de capacidades físicas e movimentos funcionais.",
  },
  {
    title: "Saúde e qualidade de vida",
    description:
      "Treinamento como ferramenta para promover saúde, bem-estar e qualidade de vida.",
  },
];

export function Habilidades() {
  return (
    <Section id="habilidades" className={styles.habilidades}>
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Habilidades</p>

          <h2 className={styles.title}>
            Conhecimento para transformar movimento em resultado
          </h2>

          <p className={styles.description}>
            Uma abordagem profissional baseada em acompanhamento,
            planejamento e respeito aos objetivos de cada pessoa.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <article key={skill.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{skill.title}</h3>

              <p className={styles.cardDescription}>
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}