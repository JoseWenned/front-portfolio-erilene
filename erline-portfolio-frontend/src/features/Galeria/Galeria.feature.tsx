import Image from "next/image";

import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import image01 from "../../assets/banner/image.png";

import styles from "./galeria.module.scss";

const gallery = [
  {
    src: image01,
    alt: "Erline durante sua atuação profissional como Personal Trainer",
    title: "Treinamento personalizado",
  },
];

export function Galeria() {
  return (
    <Section
      id="galeria"
      className={styles.galeria}
    >
      <Container>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Galeria</p>

          <h2 className={styles.title}>
            Movimento na prática
          </h2>

          <p className={styles.description}>
            Um pouco da minha rotina profissional, dos treinamentos
            e dos momentos que fazem parte dessa jornada.
          </p>
        </div>

        <div className={styles.grid}>
          {gallery.map((item) => (
            <article
              key={item.title}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}