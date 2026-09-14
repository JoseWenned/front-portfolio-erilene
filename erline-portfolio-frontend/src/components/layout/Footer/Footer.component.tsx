import { Container } from "../../../components/fragments/Container/Container";

import styles from "./footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.brandMark} aria-hidden="true">
              <span>E</span>
            </div>

            <div className={styles.brandContent}>
              <p className={styles.name}>Erline</p>
              <span className={styles.role}>Personal Trainer</span>
            </div>
          </div>

          <div className={styles.message}>
            <span className={styles.messageLine} aria-hidden="true" />

            <p>
              Movimento que transforma
              <span> vidas.</span>
            </p>
          </div>

          <nav
            className={styles.social}
            aria-label="Redes sociais"
          >
            <span className={styles.socialLabel}>
              Conecte-se
            </span>

            <ul className={styles.socialList}>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className={styles.socialLink}
                >
                  <span>Instagram</span>

                  <span
                    className={styles.socialArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className={styles.socialLink}
                >
                  <span>WhatsApp</span>

                  <span
                    className={styles.socialArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Erline. Todos os direitos reservados.
          </p>

          <p className={styles.signature}>
            Saúde <span>·</span> Força <span>·</span> Qualidade de vida
          </p>
        </div>
      </Container>
    </footer>
  );
}