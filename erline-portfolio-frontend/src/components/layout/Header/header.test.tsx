import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Header } from "./Header.component";

describe("Header", () => {
  it("deve renderizar a identidade da Erline", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: "Erline - início",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a navegação principal", () => {
    render(<Header />);

    expect(
      screen.getByRole("navigation", {
        name: "Navegação principal",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: "Sobre",
      }),
    ).toHaveAttribute("href", "#sobre");

    expect(
      screen.getByRole("link", {
        name: "Habilidades",
      }),
    ).toHaveAttribute("href", "#habilidades");

    expect(
      screen.getByRole("link", {
        name: "Formação",
      }),
    ).toHaveAttribute("href", "#formacao");

    expect(
      screen.getByRole("link", {
        name: "Experiência",
      }),
    ).toHaveAttribute("href", "#experiencia");

    expect(
      screen.getByRole("link", {
        name: "Certificações",
      }),
    ).toHaveAttribute("href", "#certificacoes");

    expect(
      screen.getByRole("link", {
        name: "Galeria",
      }),
    ).toHaveAttribute("href", "#galeria");

    expect(
      screen.getByRole("link", {
        name: "Depoimentos",
      }),
    ).toHaveAttribute("href", "#depoimentos");

    expect(
      screen.getByRole("link", {
        name: "Contato",
      }),
    ).toHaveAttribute("href", "#contato");
  });

  it("deve renderizar o botão para abrir o menu mobile", () => {
    render(<Header />);

    expect(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    ).toBeInTheDocument();
  });

  it("deve abrir o menu mobile", () => {
    render(<Header />);

    const menuButton = screen.getByRole("button", {
      name: "Abrir menu",
    });

    fireEvent.click(menuButton);

    const mobileMenu = document.getElementById(
      "mobile-navigation",
    );

    expect(mobileMenu).toBeInTheDocument();

    expect(
      within(mobileMenu as HTMLElement).getByRole(
        "button",
        {
          name: "Fechar menu",
        },
      ),
    ).toBeInTheDocument();

    expect(mobileMenu).toHaveAttribute(
      "aria-hidden",
      "false",
    );
  });

  it("deve fechar o menu mobile ao clicar no botão de fechar", () => {
    render(<Header />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    );

    const mobileMenu = document.getElementById(
      "mobile-navigation",
    );

    expect(mobileMenu).toBeInTheDocument();

    fireEvent.click(
      within(mobileMenu as HTMLElement).getByRole(
        "button",
        {
          name: "Fechar menu",
        },
      ),
    );

    expect(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    ).toBeInTheDocument();

    expect(mobileMenu).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("deve fechar o menu mobile ao pressionar Escape", () => {
    render(<Header />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    );

    const mobileMenu = document.getElementById(
      "mobile-navigation",
    );

    expect(mobileMenu).toBeInTheDocument();

    expect(
      within(mobileMenu as HTMLElement).getByRole(
        "button",
        {
          name: "Fechar menu",
        },
      ),
    ).toBeInTheDocument();

    fireEvent.keyDown(document, {
      key: "Escape",
    });

    expect(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    ).toBeInTheDocument();

    expect(mobileMenu).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("deve renderizar os links de contato no menu mobile", () => {
    render(<Header />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    );

    expect(
      screen.getByRole("link", {
        name: "Instagram da Erline",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Enviar e-mail para Erline",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Conversar com Erline pelo WhatsApp",
      }),
    ).toBeInTheDocument();
  });

  it("deve fechar o menu ao clicar em um link de navegação mobile", () => {
    render(<Header />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    );

    const mobileMenu = document.getElementById(
      "mobile-navigation",
    );

    expect(mobileMenu).toBeInTheDocument();

    const mobileSobreLink = within(
      mobileMenu as HTMLElement,
    ).getByRole("link", {
      name: "Sobre",
    });

    fireEvent.click(mobileSobreLink);

    expect(
      screen.getByRole("button", {
        name: "Abrir menu",
      }),
    ).toBeInTheDocument();

    expect(mobileMenu).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });
});