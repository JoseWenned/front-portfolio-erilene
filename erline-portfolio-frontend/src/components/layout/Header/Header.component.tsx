"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

const contactLinks = {
  instagram: "#",
  email: "mailto:",
  whatsapp: "#",
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((current) => !current);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleNavigationClick() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.content}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Erline - início"
              onClick={handleNavigationClick}
            >
              <span className={styles.logoMark}>
                ES
              </span>

              <span className={styles.logoText}>
                Erilene Santiago
              </span>
            </Link>

            <nav
              className={styles.desktopNavigation}
              aria-label="Navegação principal"
            >
              <ul className={styles.navigationList}>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className={`${styles.menuButton} ${
                isMenuOpen
                  ? styles.menuButtonOpen
                  : ""
              }`}
              onClick={handleMenuToggle}
              aria-label={
                isMenuOpen
                  ? "Fechar menu"
                  : "Abrir menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className={styles.menuIcon}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <div
        className={`${styles.overlay} ${
          isMenuOpen ? styles.overlayVisible : ""
        }`}
        onClick={handleCloseMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          isMenuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-label="Menu de navegação mobile"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <Link
            href="/"
            className={styles.mobileLogo}
            onClick={handleNavigationClick}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span className={styles.mobileLogoMark}>
              ES
            </span>

            <span className={styles.mobileLogoText}>
              ErIlene Santiago
            </span>
          </Link>

          <button
            type="button"
            className={styles.closeButton}
            onClick={handleCloseMenu}
            aria-label="Fechar menu"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            <span />
            <span />
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileNavigationHeader}>
            <span>Menu</span>

            <span
              className={styles.mobileNavigationLine}
              aria-hidden="true"
            />
          </div>

          <nav aria-label="Navegação mobile">
            <ul className={styles.mobileNavigationList}>
              {navigation.map((item, index) => (
                <li
                  key={item.href}
                  style={
                    {
                      "--item-index": index,
                    } as React.CSSProperties
                  }
                >
                  <Link
                    href={item.href}
                    onClick={handleNavigationClick}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {/* <span className={styles.mobileItemNumber}>
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span> */}

                    <span
                      className={
                        styles.mobileItemLabel
                      }
                    >
                      {item.label}
                    </span>

                    {/* <span
                      className={
                        styles.mobileItemArrow
                      }
                      aria-hidden="true"
                    >
                      →
                    </span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.mobileMenuFooter}>
          <div className={styles.contactHeader}>
            <span>Vamos conversar?</span>

            <span
              className={styles.contactLine}
              aria-hidden="true"
            />
          </div>

          <div className={styles.contactLinks}>
            <a
              href="https://www.instagram.com/personal_erilene?stkn=MXVmNTByZ3pvenNybg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Erline"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span
                className={styles.contactIcon}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span>
                <small>Instagram</small>
                <strong>@personal_erilene</strong>
              </span>
            </a>

            <a
              href={contactLinks.email}
              aria-label="Enviar e-mail para Erline"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span
                className={styles.contactIcon}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M4 7L12 13L20 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                <small>E-mail</small>
                <strong>erilenesantiago4@gmail.com</strong>
              </span>
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar com Erline pelo WhatsApp"
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span
                className={styles.contactIcon}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 11.5C20 15.6421 16.4183 19 12 19C10.5481 19 9.19533 18.6367 8.04348 18.0031L4 19L5.13043 15.3548C4.416 14.2394 4 12.9111 4 11.5C4 7.35786 7.58172 4 12 4C16.4183 4 20 7.35786 20 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M9 10.5C9.4 12.2 10.8 13.6 12.5 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span>
                <small>WhatsApp</small>
                <strong>Fale comigo</strong>
              </span>
            </a>
          </div>

          {/* <p className={styles.mobileMenuSignature}>
            Movimento que transforma.
          </p> */}
        </div>
      </aside>
    </>
  );
}