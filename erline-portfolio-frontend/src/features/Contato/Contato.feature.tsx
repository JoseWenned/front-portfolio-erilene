"use client";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";
import { FormEvent, useState } from "react";

import styles from "./contato.module.scss";

export function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(event.currentTarget);

    const payload = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem"),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }
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

            <form 
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label htmlFor="contato-nome">
                  Nome
                </label>

                <input
                  id="contato-nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  required
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
                  required
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
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar mensagem"}
              </button>

              {status === "success" && (
                <p role="status">
                  Mensagem enviada com sucesso! Em breve entraremos em contato.
                </p>
              )}

              {status === "error" && (
                <p role="alert">
                  Não foi possível enviar sua mensagem. Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}