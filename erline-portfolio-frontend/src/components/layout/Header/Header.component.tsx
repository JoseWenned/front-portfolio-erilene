import Link from "next/link";
import { Container } from "../../../components/fragments/Container/Container";
import styles from "./header.module.scss";

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formação", href: "#formacao" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            Erline
          </Link>

          <nav
            className={styles.navigation}
            aria-label="Navegação principal"
          >
            <ul className={styles.navigationList}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}