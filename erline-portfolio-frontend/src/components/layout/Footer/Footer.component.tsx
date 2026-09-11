import { Container } from "../../../components/fragments/Container/Container";

import styles from "./footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.name}>Erline</p>

          <p className={styles.copyright}>
            © {currentYear} Erline. Todos os direitos reservados.
          </p>

          <nav aria-label="Redes sociais">
            <ul className={styles.socialList}>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}