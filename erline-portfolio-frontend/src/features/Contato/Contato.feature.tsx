import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./contato.module.scss";

export function Contato() {
  return (
    <Section
      id="contato"
      className={styles.contato}
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Contato</p>

          <h2 className={styles.title}>
            Vamos conversar sobre seus objetivos
          </h2>

          <p className={styles.description}>
            Entre em contato para conhecer meu trabalho, tirar dúvidas
            ou conversar sobre acompanhamento personalizado.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.label}>WhatsApp</span>

              <a
                href="#"
                className={styles.link}
              >
                Entre em contato pelo WhatsApp
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>Instagram</span>

              <a
                href="#"
                className={styles.link}
              >
                Acompanhe meu trabalho
              </a>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.label}>Atendimento</span>

              <p className={styles.value}>
                Entre em contato para conhecer as opções de
                acompanhamento disponíveis.
              </p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>
              Envie uma mensagem
            </h3>

            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="contato-nome">
                  Nome
                </label>

                <input
                  id="contato-nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contato-email">
                  E-mail
                </label>

                <input
                  id="contato-email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contato-mensagem">
                  Mensagem
                </label>

                <textarea
                  id="contato-mensagem"
                  name="mensagem"
                  placeholder="Como posso ajudar?"
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className={styles.submit}
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}