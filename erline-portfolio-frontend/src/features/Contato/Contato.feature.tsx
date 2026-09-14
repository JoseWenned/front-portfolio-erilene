// "use client";

// import { Container } from "../../components/fragments/Container/Container";
// import { Section } from "../../components/fragments/Section/Section.fragment";
// import { FormEvent, useState } from "react";

// import styles from "./contato.module.scss";

// export function Contato() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<
//     "idle" | "success" | "error"
//   >("idle");

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const form = event.currentTarget;

//     setIsSubmitting(true);
//     setStatus("idle");

//     const formData = new FormData(form);

//     const payload = {
//       nome: formData.get("nome"),
//       email: formData.get("email"),
//       mensagem: formData.get("mensagem"),
//     };

//     try {
//       const response = await fetch("/api/contato", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error("Erro ao enviar mensagem.");
//       }

//       form.reset();
//       setStatus("success");
//     } catch {
//       setStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   }
//   return (
//     <Section
//       id="contato"
//       className={styles.contato}
//     >
//       <Container>
//         <div className={styles.header}>
//           <p className={styles.eyebrow}>Contato</p>

//           <h2 className={styles.title}>
//             Vamos conversar sobre seus objetivos
//           </h2>

//           <p className={styles.description}>
//             Entre em contato para conhecer meu trabalho, tirar dúvidas
//             ou conversar sobre acompanhamento personalizado.
//           </p>
//         </div>

//         <div className={styles.content}>
//           <div className={styles.info}>
//             <div className={styles.infoItem}>
//               <span className={styles.label}>WhatsApp</span>

//               <a
//                 href="#"
//                 className={styles.link}
//               >
//                 Entre em contato pelo WhatsApp
//               </a>
//             </div>

//             <div className={styles.infoItem}>
//               <span className={styles.label}>Instagram</span>

//               <a
//                 href="#"
//                 className={styles.link}
//               >
//                 Acompanhe meu trabalho
//               </a>
//             </div>

//             <div className={styles.infoItem}>
//               <span className={styles.label}>Atendimento</span>

//               <p className={styles.value}>
//                 Entre em contato para conhecer as opções de
//                 acompanhamento disponíveis.
//               </p>
//             </div>
//           </div>

//           <div className={styles.formWrapper}>
//             <h3 className={styles.formTitle}>
//               Envie uma mensagem
//             </h3>

//             <form 
//               className={styles.form}
//               onSubmit={handleSubmit}
//             >
//               <div className={styles.field}>
//                 <label htmlFor="contato-nome">
//                   Nome
//                 </label>

//                 <input
//                   id="contato-nome"
//                   name="nome"
//                   type="text"
//                   placeholder="Seu nome"
//                   required
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label htmlFor="contato-email">
//                   E-mail
//                 </label>

//                 <input
//                   id="contato-email"
//                   name="email"
//                   type="email"
//                   placeholder="seu@email.com"
//                   required
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label htmlFor="contato-mensagem">
//                   Mensagem
//                 </label>

//                 <textarea
//                   id="contato-mensagem"
//                   name="mensagem"
//                   placeholder="Como posso ajudar?"
//                   rows={5}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className={styles.submit}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting
//                   ? "Enviando..."
//                   : "Enviar mensagem"}
//               </button>

//               {status === "success" && (
//                 <p role="status">
//                   Mensagem enviada com sucesso! Em breve entraremos em contato.
//                 </p>
//               )}

//               {status === "error" && (
//                 <p role="alert">
//                   Não foi possível enviar sua mensagem. Tente novamente.
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// }

"use client";

import { FormEvent, useState } from "react";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./contato.module.scss";

export function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(form);

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

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contato" className={styles.contato}>
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.backgroundCircle} aria-hidden="true" />

      <Container>
        <div className={styles.header}>
          <div className={styles.headerLabel}>
            <span className={styles.labelLine} aria-hidden="true" />
            <span>Contato</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Vamos conversar sobre
              <span> seus objetivos.</span>
            </h2>

            <p className={styles.description}>
              Entre em contato para conhecer meu trabalho, tirar
              dúvidas ou conversar sobre acompanhamento personalizado.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.intro}>
              <div>
                <span className={styles.introLabel}>
                  Fale comigo
                </span>

                <p className={styles.introText}>
                  Estou disponível para conversar sobre seus objetivos
                  e encontrar a melhor forma de acompanhamento.
                </p>
              </div>
            </div>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 16.5C20 17.05 19.55 17.5 19 17.5H17.5C16.95 17.5 16.5 17.05 16.5 16.5V15C16.5 14.45 16.95 14 17.5 14H19C19.55 14 20 14.45 20 15V16.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 7.5C4 6.95 4.45 6.5 5 6.5H6.5C7.05 6.5 7.5 6.95 7.5 7.5V9C7.5 9.55 7.05 10 6.5 10H5C4.45 10 4 9.55 4 9V7.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M6.5 10C7.4 13.2 10.8 16.6 14 17.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.5 7.5C8.4 6.6 9.7 6 11 6H13C14.1 6 15 6.9 15 8V9.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className={styles.infoContent}>
                  <span className={styles.label}>
                    WhatsApp
                  </span>

                  <a
                    href="#"
                    className={styles.link}
                  >
                    Entre em contato pelo WhatsApp
                  </a>
                </div>

                <span className={styles.infoArrow} aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="17.2"
                      cy="6.8"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className={styles.infoContent}>
                  <span className={styles.label}>
                    Instagram
                  </span>

                  <a
                    href="#"
                    className={styles.link}
                  >
                    Acompanhe meu trabalho
                  </a>
                </div>

                <span className={styles.infoArrow} aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C16.4 16.8 19 13.5 19 10C19 6.13 15.87 3 12 3C8.13 3 5 6.13 5 10C5 13.5 7.6 16.8 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>

                <div className={styles.infoContent}>
                  <span className={styles.label}>
                    Atendimento
                  </span>

                  <p className={styles.value}>
                    Entre em contato para conhecer as opções de
                    acompanhamento disponíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <div>
                <span className={styles.formLabel}>
                  Mensagem
                </span>

                <h3 className={styles.formTitle}>
                  Envie uma mensagem.
                </h3>
              </div>
            </div>

            <p className={styles.formDescription}>
              Preencha os campos abaixo e fale diretamente comigo.
            </p>

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
                <span>
                  {isSubmitting
                    ? "Enviando..."
                    : "Enviar mensagem"}
                </span>

                <span
                  className={styles.submitIcon}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </button>

              {status === "success" && (
                <p
                  className={styles.statusSuccess}
                  role="status"
                >
                  Mensagem enviada com sucesso! Em breve
                  entraremos em contato.
                </p>
              )}

              {status === "error" && (
                <p
                  className={styles.statusError}
                  role="alert"
                >
                  Não foi possível enviar sua mensagem.
                  Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}