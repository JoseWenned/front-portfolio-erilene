import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./sobre.module.scss";

export function Sobre() {
  return (
    <Section id="sobre" className={styles.sobre}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>Sobre mim</p>

            <h2 className={styles.title}>
              Movimento, saúde e qualidade de vida
            </h2>

            <p className={styles.description}>
              Sou Erline, profissional de Educação Física e Personal
              Trainer, apaixonada por ajudar pessoas a desenvolverem
              uma relação mais saudável com o movimento e com o próprio
              corpo.
            </p>

            <p className={styles.description}>
              Meu trabalho busca unir conhecimento, acompanhamento
              individualizado e estratégias de treinamento que respeitem
              os objetivos e a realidade de cada pessoa.
            </p>
          </div>

          <div className={styles.highlight}>
            <div className={styles.card}>
              <span className={styles.cardValue}>+ de</span>

              <strong className={styles.cardTitle}>
                Experiência
              </strong>

              <span className={styles.cardDescription}>
                em acompanhamento e treinamento
              </span>
            </div>

            <div className={styles.card}>
              <span className={styles.cardValue}>Foco</span>

              <strong className={styles.cardTitle}>
                Individualizado
              </strong>

              <span className={styles.cardDescription}>
                respeitando objetivos e necessidades
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}