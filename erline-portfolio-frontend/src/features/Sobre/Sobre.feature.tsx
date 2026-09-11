import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./sobre.module.scss";

export function Sobre() {
  return (
    <Section id="sobre" className={styles.sobre}>
      <div
        className={styles.backgroundDecoration}
        aria-hidden="true"
      />

      <Container>
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.eyebrowWrapper}>
              <span
                className={styles.eyebrowLine}
                aria-hidden="true"
              />

              <p className={styles.eyebrow}>
                Sobre mim
              </p>
            </div>

            <h2 className={styles.title}>
              Movimento,
              <span>saúde e qualidade de vida.</span>
            </h2>

            <div className={styles.description}>
              <p>
                Sou Erline, profissional de Educação Física e
                Personal Trainer, apaixonada por ajudar pessoas a
                desenvolverem uma relação mais saudável com o
                movimento e com o próprio corpo.
              </p>

              <p>
                Meu trabalho busca unir conhecimento,
                acompanhamento individualizado e estratégias de
                treinamento que respeitem os objetivos e a
                realidade de cada pessoa.
              </p>
            </div>

            <div className={styles.signature}>
              <span
                className={styles.signatureLine}
                aria-hidden="true"
              />

              <span>
                Movimento que transforma.
              </span>
            </div>
          </div>

          <div className={styles.visual}>
            <div
              className={styles.motionCircle}
              aria-hidden="true"
            />

            <div
              className={styles.motionLine}
              aria-hidden="true"
            />

            <div
              className={styles.motionDot}
              aria-hidden="true"
            />

            <div className={styles.highlight}>
              <article
                className={`${styles.card} ${styles.experienceCard}`}
              >
                <span className={styles.cardNumber}>
                  01
                </span>

                <div className={styles.cardIcon}>
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
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>
                    Experiência
                  </span>

                  <strong className={styles.cardTitle}>
                    Acompanhamento
                  </strong>

                  <p className={styles.cardDescription}>
                    Treinamentos pensados para diferentes
                    objetivos e momentos.
                  </p>
                </div>
              </article>

              <article
                className={`${styles.card} ${styles.focusCard}`}
              >
                <span className={styles.cardNumber}>
                  02
                </span>

                <div className={styles.cardIcon}>
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
                      d="M16 11V16L19.5 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>
                    Foco
                  </span>

                  <strong className={styles.cardTitle}>
                    Individualizado
                  </strong>

                  <p className={styles.cardDescription}>
                    Estratégias adaptadas às necessidades
                    de cada pessoa.
                  </p>
                </div>
              </article>
            </div>

            <div className={styles.quoteCard}>
              <span
                className={styles.quoteMark}
                aria-hidden="true"
              >
                “
              </span>

              <p>
                Cuidar do corpo também é cuidar da forma
                como vivemos.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}