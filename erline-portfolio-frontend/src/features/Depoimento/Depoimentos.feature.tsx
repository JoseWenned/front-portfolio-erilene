// "use client";

// import Image from "next/image";
// import {
//   ChangeEvent,
//   FormEvent,
//   useEffect,
//   useState,
// } from "react";

// import { Container } from "../../components/fragments/Container/Container";
// import { Section } from "../../components/fragments/Section/Section.fragment";

// import type { DepoimentoDTO } from "../../core/application/dto/depoimento/depoimentoDTO";
// import { depoimentoDependencies } from "../../core/infrastructure/composition/depoimento/depoimentoDependencies";
// import { ApiClient } from "../../core/infrastructure/api/ApiClient";

// import image01 from "../../assets/banner/image01.png";

// import styles from "./depoimentos.module.scss";

// export function Depoimentos() {
//   const [depoimentos, setDepoimentos] = useState<DepoimentoDTO[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [isLoading, setIsLoading] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [error, setError] = useState<string | null>(null);
//   const [formError, setFormError] = useState<string | null>(null);
//   const [formSuccess, setFormSuccess] = useState<string | null>(null);

//   const [nome, setNome] = useState("");
//   const [comentario, setComentario] = useState("");
//   const [foto, setFoto] = useState<File | null>(null);

//   useEffect(() => {
//     async function carregarDepoimentos() {
//       try {
//         setIsLoading(true);
//         setError(null);

//         const resultado =
//           await depoimentoDependencies.listarDepoimentosUseCase.executar();

//         setDepoimentos(resultado);
//       } catch (error) {
//         console.error(
//           "Erro ao carregar depoimentos:",
//           error,
//         );

//         setError(
//           "Não foi possível carregar os depoimentos no momento.",
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     carregarDepoimentos();
//   }, []);

//   function handleFileChange(
//     event: ChangeEvent<HTMLInputElement>,
//   ) {
//     const selectedFile = event.target.files?.[0] ?? null;

//     setFoto(selectedFile);
//     setFormError(null);
//     setFormSuccess(null);
//   }

//   async function handleSubmit(
//     event: FormEvent<HTMLFormElement>,
//   ) {
//     event.preventDefault();

//     const form = event.currentTarget;

//     setFormError(null);
//     setFormSuccess(null);

//     if (!nome.trim()) {
//       setFormError("Informe seu nome.");
//       return;
//     }

//     if (!comentario.trim()) {
//       setFormError("Informe sua experiência.");
//       return;
//     }

//     if (!foto) {
//       setFormError("Selecione uma foto.");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const apiClient = new ApiClient();

//       const uploadResponse = await apiClient.upload<{
//         url: string;
//       }>("/api/uploads/imagem", foto);

//       await depoimentoDependencies.criarDepoimentoUseCase.executar(
//         {
//           nome: nome.trim(),
//           comentario: comentario.trim(),
//           nota: 5,
//           fotoUrl: uploadResponse.url,
//         },
//       );

//       setNome("");
//       setComentario("");
//       setFoto(null);

//       form.reset();

//       setFormSuccess(
//         "Seu depoimento foi enviado com sucesso! Ele será analisado antes de aparecer no site.",
//       );
//     } catch (error) {
//       console.error(
//         "Erro ao enviar depoimento:",
//         error,
//       );

//       setFormError(
//         "Não foi possível enviar seu depoimento. Tente novamente.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   function handlePrevious() {
//     if (depoimentos.length === 0) {
//       return;
//     }

//     setCurrentIndex((current) =>
//       current === 0 ? depoimentos.length - 1 : current - 1,
//     );
//   }

//   function handleNext() {
//     if (depoimentos.length === 0) {
//       return;
//     }

//     setCurrentIndex((current) =>
//       current === depoimentos.length - 1 ? 0 : current + 1,
//     );
//   }

//   const depoimentoAtual = depoimentos[currentIndex];

//   return (
//     <Section
//       id="depoimentos"
//       className={styles.depoimentos}
//     >
//       <div className={styles.backgroundGlow} />
//       <div className={styles.backgroundCircle} />

//       <Container>
//         <header className={styles.header}>
//           <div className={styles.headerLabel}>
//             <span className={styles.labelLine} />
//             <span>DEPOIMENTOS</span>
//           </div>

//           <div className={styles.headerContent}>
//             <h2 className={styles.title}>
//               Histórias de quem
//               <span> vive o movimento.</span>
//             </h2>

//             <p className={styles.description}>
//               Cada experiência representa uma transformação,
//               uma conquista e um novo passo em direção a uma
//               vida mais saudável.
//             </p>
//           </div>
//         </header>

//         <div className={styles.content}>
//           <div className={styles.testimonialArea}>
//             {isLoading && (
//               <div className={styles.loadingState}>
//                 <div className={styles.loadingIcon}>
//                   <span />
//                   <span />
//                   <span />
//                 </div>

//                 <div className={styles.loadingContent}>
//                   <span className={styles.loadingLineLarge} />
//                   <span className={styles.loadingLineMedium} />
//                   <span className={styles.loadingLineSmall} />
//                 </div>
//               </div>
//             )}

//             {!isLoading && error && (
//               <div className={styles.errorState}>
//                 <div className={styles.stateIcon}>
//                   <svg
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                     fill="none"
//                   >
//                     <path
//                       d="M12 8V13"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       strokeLinecap="round"
//                     />

//                     <path
//                       d="M12 16.5V16.5"
//                       stroke="currentColor"
//                       strokeWidth="2.4"
//                       strokeLinecap="round"
//                     />

//                     <path
//                       d="M10.3 3.8L2.6 17.1C1.7 18.7 2.8 20.7 4.6 20.7H19.4C21.2 20.7 22.3 18.7 21.4 17.1L13.7 3.8C13 2.6 11 2.6 10.3 3.8Z"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     />
//                   </svg>
//                 </div>

//                 <div className={styles.stateContent}>
//                   <span className={styles.stateEyebrow}>
//                     Oops!
//                   </span>

//                   <h3>
//                     Algo não saiu como esperado.
//                   </h3>

//                   <p>{error}</p>

//                   <button
//                     type="button"
//                     className={styles.retryButton}
//                     onClick={() =>
//                       window.location.reload()
//                     }
//                   >
//                     Tentar novamente
//                   </button>
//                 </div>
//               </div>
//             )}

//             {!isLoading &&
//               !error &&
//               depoimentos.length === 0 && (
//                 <div className={styles.emptyState}>
//                   <div className={styles.emptyVisual}>
//                     <span className={styles.emptyQuote}>
//                       “
//                     </span>
//                   </div>

//                   <div className={styles.stateContent}>
//                     <span className={styles.stateEyebrow}>
//                       SUA EXPERIÊNCIA
//                     </span>

//                     <h3>
//                       Seja a primeira história
//                       <br />
//                       compartilhada.
//                     </h3>

//                     <p>
//                       Ainda não temos depoimentos
//                       publicados. Compartilhe sua experiência
//                       e inspire outras pessoas a começarem
//                       também.
//                     </p>
//                   </div>
//                 </div>
//               )}

//             {!isLoading &&
//               !error &&
//               depoimentoAtual && (
//                 <>
//                   <article
//                     className={styles.testimonialCard}
//                   >
//                     <div
//                       className={
//                         styles.testimonialImageWrapper
//                       }
//                     >
//                       <Image
//                         src={image01}
//                         alt={`Depoimento de ${depoimentoAtual.nome}`}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         loading="eager"
//                         className={
//                           styles.testimonialImage
//                         }
//                       />

//                       <div
//                         className={styles.imageOverlay}
//                       />

//                       <span
//                         className={styles.imageLabel}
//                       >
//                         EXPERIÊNCIA REAL
//                       </span>
//                     </div>

//                     <div
//                       className={
//                         styles.testimonialContent
//                       }
//                     >
//                       <span
//                         className={styles.quoteMark}
//                       >
//                         “
//                       </span>

//                       <div className={styles.rating}>
//                         {Array.from({
//                           length: 5,
//                         }).map((_, index) => (
//                           <span
//                             key={index}
//                             className={
//                               index <
//                               depoimentoAtual.nota
//                                 ? styles.star
//                                 : styles.starEmpty
//                             }
//                           >
//                             ★
//                           </span>
//                         ))}
//                       </div>

//                       <p
//                         className={
//                           styles.testimonialText
//                         }
//                       >
//                         {depoimentoAtual.comentario}
//                       </p>

//                       <footer
//                         className={
//                           styles.testimonialFooter
//                         }
//                       >
//                         <strong
//                           className={styles.author}
//                         >
//                           {depoimentoAtual.nome}
//                         </strong>

//                         <span>
//                           Cliente Erline
//                         </span>
//                       </footer>
//                     </div>

//                     <div
//                       className={styles.cardDecoration}
//                     />
//                   </article>

//                   {depoimentos.length > 1 && (
//                     <div
//                       className={
//                         styles.carouselControls
//                       }
//                     >
//                       <span
//                         className={
//                           styles.carouselCount
//                         }
//                       >
//                         {String(
//                           currentIndex + 1,
//                         ).padStart(2, "0")}

//                         <span>/</span>

//                         {String(
//                           depoimentos.length,
//                         ).padStart(2, "0")}
//                       </span>

//                       <div
//                         className={styles.navigation}
//                       >
//                         <button
//                           type="button"
//                           className={
//                             styles.navigationButton
//                           }
//                           onClick={handlePrevious}
//                           aria-label="Depoimento anterior"
//                         >
//                           ←
//                         </button>

//                         <button
//                           type="button"
//                           className={
//                             styles.navigationButton
//                           }
//                           onClick={handleNext}
//                           aria-label="Próximo depoimento"
//                         >
//                           →
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </>
//               )}
//           </div>

//           <div className={styles.formWrapper}>
//             <div className={styles.formHeader}>
//               <span className={styles.formNumber}>
//                 02
//               </span>

//               <span className={styles.formLabel}>
//                 COMPARTILHE
//               </span>
//             </div>

//             <h3 className={styles.formTitle}>
//               Compartilhe sua história.
//             </h3>

//             <p className={styles.formDescription}>
//               Seu depoimento pode inspirar outras pessoas
//               a começarem uma nova jornada.
//             </p>

//             <form
//               className={styles.form}
//               onSubmit={handleSubmit}
//             >
//               <div className={styles.field}>
//                 <label htmlFor="nome">
//                   Seu nome
//                 </label>

//                 <input
//                   id="nome"
//                   name="nome"
//                   type="text"
//                   placeholder="Como podemos te chamar?"
//                   value={nome}
//                   onChange={(event) =>
//                     setNome(event.target.value)
//                   }
//                   disabled={isSubmitting}
//                 />
//               </div>

//               <div className={styles.field}>
//                 <label htmlFor="depoimento">
//                   Sua experiência
//                 </label>

//                 <textarea
//                   id="depoimento"
//                   name="depoimento"
//                   placeholder="Conte um pouco sobre sua experiência..."
//                   rows={5}
//                   value={comentario}
//                   onChange={(event) =>
//                     setComentario(event.target.value)
//                   }
//                   disabled={isSubmitting}
//                 />
//               </div>

//               <div className={styles.photoField}>
//                 <label htmlFor="foto">
//                   Foto
//                 </label>

//                 <div className={styles.photoUpload}>
//                   <input
//                     id="foto"
//                     name="foto"
//                     type="file"
//                     accept="image/jpeg,image/png,image/webp"
//                     onChange={handleFileChange}
//                     disabled={isSubmitting}
//                   />

//                   <div className={styles.uploadIcon}>
//                     <span>+</span>
//                   </div>

//                   <div>
//                     <strong>
//                       {foto
//                         ? foto.name
//                         : "Adicionar uma foto"}
//                     </strong>

//                     <span>
//                       {foto
//                         ? "Imagem selecionada"
//                         : "JPG, PNG ou WEBP"}
//                     </span>
//                   </div>

//                   <span
//                     className={styles.uploadArrow}
//                   >
//                     →
//                   </span>
//                 </div>
//               </div>

//               {formError && (
//                 <p role="alert">
//                   {formError}
//                 </p>
//               )}

//               {formSuccess && (
//                 <p role="status">
//                   {formSuccess}
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 className={styles.submit}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting
//                   ? "Enviando..."
//                   : "Enviar depoimento"}

//                 <span
//                   className={styles.submitIcon}
//                 >
//                   →
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>

//         <footer className={styles.footer}>
//           <span className={styles.footerMark}>
//             ERLINE
//           </span>

//           <span>
//             Movimento que transforma.
//           </span>
//         </footer>
//       </Container>
//     </Section>
//   );
// }

"use client";

import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import type { DepoimentoDTO } from "../../core/application/dto/depoimento/depoimentoDTO";
import { depoimentoDependencies } from "../../core/infrastructure/composition/depoimento/depoimentoDependencies";
import { ApiClient } from "../../core/infrastructure/api/ApiClient";
import { apiConfig } from "../../core/infrastructure/api/apiConfig";

import styles from "./depoimentos.module.scss";

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoDTO[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [foto, setFoto] = useState<File | null>(null);

  useEffect(() => {
    async function carregarDepoimentos() {
      try {
        setIsLoading(true);
        setError(null);

        const resultado =
          await depoimentoDependencies.listarDepoimentosUseCase.executar();

        setDepoimentos(resultado);
      } catch (error) {
        console.error(
          "Erro ao carregar depoimentos:",
          error,
        );

        setError(
          "Não foi possível carregar os depoimentos no momento.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    carregarDepoimentos();
  }, []);

  function handleFileChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFile = event.target.files?.[0] ?? null;

    setFoto(selectedFile);
    setFormError(null);
    setFormSuccess(null);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setFormError(null);
    setFormSuccess(null);

    if (!nome.trim()) {
      setFormError("Informe seu nome.");
      return;
    }

    if (!comentario.trim()) {
      setFormError("Informe sua experiência.");
      return;
    }

    if (!foto) {
      setFormError("Selecione uma foto.");
      return;
    }

    try {
      setIsSubmitting(true);

      const apiClient = new ApiClient();

      const uploadResponse = await apiClient.upload<{
        url: string;
      }>("/api/uploads/imagem", foto);

      await depoimentoDependencies.criarDepoimentoUseCase.executar(
        {
          nome: nome.trim(),
          comentario: comentario.trim(),
          nota: 5,
          fotoUrl: uploadResponse.url,
        },
      );

      setNome("");
      setComentario("");
      setFoto(null);

      form.reset();

      setFormSuccess(
        "Seu depoimento foi enviado com sucesso! Ele será analisado antes de aparecer no site.",
      );
    } catch (error) {
      console.error(
        "Erro ao enviar depoimento:",
        error,
      );

      setFormError(
        "Não foi possível enviar seu depoimento. Tente novamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handlePrevious() {
    if (depoimentos.length === 0) {
      return;
    }

    setCurrentIndex((current) =>
      current === 0 ? depoimentos.length - 1 : current - 1,
    );
  }

  function handleNext() {
    if (depoimentos.length === 0) {
      return;
    }

    setCurrentIndex((current) =>
      current === depoimentos.length - 1 ? 0 : current + 1,
    );
  }

  const depoimentoAtual = depoimentos[currentIndex];

  const fotoUrl = depoimentoAtual?.fotoUrl
    ? `${apiConfig.baseUrl}${depoimentoAtual.fotoUrl}`
    : null;

  return (
    <Section
      id="depoimentos"
      className={styles.depoimentos}
    >
      <div className={styles.backgroundGlow} />
      <div className={styles.backgroundCircle} />

      <Container>
        <header className={styles.header}>
          <div className={styles.headerLabel}>
            <span className={styles.labelLine} />
            <span>DEPOIMENTOS</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Histórias de quem
              <span> vive o movimento.</span>
            </h2>

            <p className={styles.description}>
              Cada experiência representa uma transformação,
              uma conquista e um novo passo em direção a uma
              vida mais saudável.
            </p>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.testimonialArea}>
            {isLoading && (
              <div className={styles.loadingState}>
                <div className={styles.loadingIcon}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.loadingContent}>
                  <span className={styles.loadingLineLarge} />
                  <span className={styles.loadingLineMedium} />
                  <span className={styles.loadingLineSmall} />
                </div>
              </div>
            )}

            {!isLoading && error && (
              <div className={styles.errorState}>
                <div className={styles.stateIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 16.5V16.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M10.3 3.8L2.6 17.1C1.7 18.7 2.8 20.7 4.6 20.7H19.4C21.2 20.7 22.3 18.7 21.4 17.1L13.7 3.8C13 2.6 11 2.6 10.3 3.8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div className={styles.stateContent}>
                  <span className={styles.stateEyebrow}>
                    Oops!
                  </span>

                  <h3>
                    Algo não saiu como esperado.
                  </h3>

                  <p>{error}</p>

                  <button
                    type="button"
                    className={styles.retryButton}
                    onClick={() =>
                      window.location.reload()
                    }
                  >
                    Tentar novamente
                  </button>
                </div>
              </div>
            )}

            {!isLoading &&
              !error &&
              depoimentos.length === 0 && (
                <div className={styles.emptyState}>
                  <div className={styles.emptyVisual}>
                    <span className={styles.emptyQuote}>
                      “
                    </span>
                  </div>

                  <div className={styles.stateContent}>
                    <span className={styles.stateEyebrow}>
                      SUA EXPERIÊNCIA
                    </span>

                    <h3>
                      Seja a primeira história
                      <br />
                      compartilhada.
                    </h3>

                    <p>
                      Ainda não temos depoimentos
                      publicados. Compartilhe sua experiência
                      e inspire outras pessoas a começarem
                      também.
                    </p>
                  </div>
                </div>
              )}

            {!isLoading &&
              !error &&
              depoimentoAtual && (
                <>
                  <article
                    className={styles.testimonialCard}
                  >
                    <div
                      className={
                        styles.testimonialImageWrapper
                      }
                    >
                      {fotoUrl && (
                        <Image
                          src={fotoUrl}
                          alt={`Depoimento de ${depoimentoAtual.nome}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading="eager"
                          unoptimized
                          className={styles.testimonialImage}
                        />
                      )}

                      <div
                        className={styles.imageOverlay}
                      />

                      <span
                        className={styles.imageLabel}
                      >
                        EXPERIÊNCIA REAL
                      </span>
                    </div>

                    <div
                      className={
                        styles.testimonialContent
                      }
                    >
                      <span
                        className={styles.quoteMark}
                      >
                        “
                      </span>

                      <div className={styles.rating}>
                        {Array.from({
                          length: 5,
                        }).map((_, index) => (
                          <span
                            key={index}
                            className={
                              index <
                              depoimentoAtual.nota
                                ? styles.star
                                : styles.starEmpty
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <p
                        className={
                          styles.testimonialText
                        }
                      >
                        {depoimentoAtual.comentario}
                      </p>

                      <footer
                        className={
                          styles.testimonialFooter
                        }
                      >
                        <strong
                          className={styles.author}
                        >
                          {depoimentoAtual.nome}
                        </strong>

                        <span>
                          Cliente Erline
                        </span>
                      </footer>
                    </div>

                    <div
                      className={styles.cardDecoration}
                    />
                  </article>

                  {depoimentos.length > 1 && (
                    <div
                      className={
                        styles.carouselControls
                      }
                    >
                      <span
                        className={
                          styles.carouselCount
                        }
                      >
                        {String(
                          currentIndex + 1,
                        ).padStart(2, "0")}

                        <span>/</span>

                        {String(
                          depoimentos.length,
                        ).padStart(2, "0")}
                      </span>

                      <div
                        className={styles.navigation}
                      >
                        <button
                          type="button"
                          className={
                            styles.navigationButton
                          }
                          onClick={handlePrevious}
                          aria-label="Depoimento anterior"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          className={
                            styles.navigationButton
                          }
                          onClick={handleNext}
                          aria-label="Próximo depoimento"
                        >
                          →
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <span className={styles.formNumber}>
                02
              </span>

              <span className={styles.formLabel}>
                COMPARTILHE
              </span>
            </div>

            <h3 className={styles.formTitle}>
              Compartilhe sua história.
            </h3>

            <p className={styles.formDescription}>
              Seu depoimento pode inspirar outras pessoas
              a começarem uma nova jornada.
            </p>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label htmlFor="nome">
                  Seu nome
                </label>

                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={nome}
                  onChange={(event) =>
                    setNome(event.target.value)
                  }
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="depoimento">
                  Sua experiência
                </label>

                <textarea
                  id="depoimento"
                  name="depoimento"
                  placeholder="Conte um pouco sobre sua experiência..."
                  rows={5}
                  value={comentario}
                  onChange={(event) =>
                    setComentario(event.target.value)
                  }
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.photoField}>
                <label htmlFor="foto">
                  Foto
                </label>

                <div className={styles.photoUpload}>
                  <input
                    id="foto"
                    name="foto"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                  />

                  <div className={styles.uploadIcon}>
                    <span>+</span>
                  </div>

                  <div>
                    <strong>
                      {foto
                        ? foto.name
                        : "Adicionar uma foto"}
                    </strong>

                    <span>
                      {foto
                        ? "Imagem selecionada"
                        : "JPG, PNG ou WEBP"}
                    </span>
                  </div>

                  <span
                    className={styles.uploadArrow}
                  >
                    →
                  </span>
                </div>
              </div>

              {formError && (
                <p role="alert">
                  {formError}
                </p>
              )}

              {formSuccess && (
                <p role="status">
                  {formSuccess}
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar depoimento"}

                <span
                  className={styles.submitIcon}
                >
                  →
                </span>
              </button>
            </form>
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerMark}>
            ERLINE
          </span>

          <span>
            Movimento que transforma.
          </span>
        </footer>
      </Container>
    </Section>
  );
}