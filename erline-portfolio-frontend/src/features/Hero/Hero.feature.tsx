import Image from "next/image";
import styles from "./hero.module.scss";
import { Button } from "../../components/fragments/Button/Button.fragment";
import { Container } from "../../components/fragments/Container/Container";
import { Section } from "../../components/fragments/Section/Section.fragment";

import image01 from "../../assets/banner/image.png";

export function Hero() {
  return (
    <Section id="inicio" className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>Personal Trainer</p>

            <h1 className={styles.title}>
              Olá, eu sou Erline
            </h1>

            <p className={styles.description}>
              Transformando movimento em saúde, força e
              qualidade de vida.
            </p>

            <Button>Conheça meu trabalho</Button>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={image01}
              alt="Erline, Personal Trainer"
              fill
              className={styles.image}
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}