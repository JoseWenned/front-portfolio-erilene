import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./depoimentos.module.scss";

const testimonials = [
  {
    name: "Cliente",
    text: "Excelente acompanhamento e atenção durante os treinos.",
  },
  {
    name: "Cliente",
    text: "Profissional dedicada, atenciosa e comprometida com os resultados.",
  },
];

export function Depoimentos() {
  return (
    <Section
      id="depoimentos"
      className={styles.depoimentos}
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Depoimentos</p>

          <h2 className={styles.title}>
            Experiências de quem treina comigo
          </h2>

          <p className={styles.description}>
            Confira alguns relatos de pessoas que vivenciaram
            minha forma de trabalhar e acompanhar cada evolução.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.list}>
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.text}`}
                className={styles.card}
              >
                <blockquote className={styles.text}>
                  “{testimonial.text}”
                </blockquote>

                <p className={styles.name}>
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>
              Compartilhe sua experiência
            </h3>

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
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={styles.submit}
              >
                Enviar depoimento
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}