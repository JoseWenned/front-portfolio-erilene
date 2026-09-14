import Image from "next/image";

import Image01 from "../../assets/certificado/image01.png";
import Image02 from "../../assets/certificado/image02.png";
import Image03 from "../../assets/certificado/image03.png";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import styles from "./certificacoes.module.scss";


const certifications = [
  {
    number: "01",
    title: "Certificação profissional",
    image: Image01,
    alt: "Certificado profissional de Erline",
  },
  {
    number: "02",
    title: "Certificação profissional",
    image: Image02,
    alt: "Certificado profissional de Erline",
  },
  {
    number: "03",
    title: "Certificação profissional",
    image: Image03,
    alt: "Certificado profissional de Erline",
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
          <div className={styles.headerLabel}>
            <span className={styles.labelLine} />

            <span>Certificações</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Conhecimento que
              <span> acompanha a prática.</span>
            </h2>

            <p className={styles.description}>
              Formação complementar e busca constante por
              conhecimento para aprimorar a prática profissional
              e oferecer um acompanhamento cada vez mais completo.
            </p>
          </div>
        </div>

        <div className={styles.certificationsHeader}>
          <span>Formação complementar</span>

          <span className={styles.certificationsCount}>
            {String(certifications.length).padStart(2, "0")}{" "}
            certificados
          </span>
        </div>

        <div className={styles.grid}>
          {certifications.map((certification) => (
            <article
              key={certification.number}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={certification.image}
                  alt={certification.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.image}
                />

                <div
                  className={styles.imageOverlay}
                  aria-hidden="true"
                />

                <span className={styles.number}>
                  {certification.number}
                </span>

                <span
                  className={styles.viewIcon}
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>
                  Certificação {certification.number}
                </span>

                <h3 className={styles.cardTitle}>
                  {certification.title}
                </h3>

                <div className={styles.cardLine} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerMark}>
            <span />
            <span />
            <span />
          </div>

          <p>
            Aprendizado contínuo,
            <span> evolução constante.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}