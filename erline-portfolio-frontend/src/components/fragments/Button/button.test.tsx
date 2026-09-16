import { fireEvent, render, screen } from "@testing-library/react";

import { describe, expect, it, vi } from "vitest";

import styles from "./button.module.scss";
import { Button } from "./Button.fragment";

describe("Button", () => {
  it("deve renderizar o conteúdo recebido", () => {
    render(<Button href="#contato">Enviar</Button>);

    expect(
      screen.getByRole("link", {
        name: "Enviar",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar o link com o href informado", () => {
    render(
      <Button href="#contato">
        Conheça meu trabalho
      </Button>,
    );

    expect(
      screen.getByRole("link", {
        name: "Conheça meu trabalho",
      }),
    ).toHaveAttribute("href", "#contato");
  });

  it("deve aplicar a classe padrão do componente", () => {
    render(
      <Button href="#contato">
        Conheça meu trabalho
      </Button>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveClass(styles.button);
  });

  it("deve permitir adicionar uma classe personalizada", () => {
    render(
      <Button
        href="#contato"
        className="custom-button"
      >
        Conheça meu trabalho
      </Button>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveClass(
      styles.button,
      "custom-button",
    );
  });

  it("deve aceitar propriedades nativas do link", () => {
    render(
      <Button
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acessar site"
      >
        Site
      </Button>,
    );

    const link = screen.getByRole("link", {
      name: "Acessar site",
    });

    expect(link).toHaveAttribute(
      "href",
      "https://example.com",
    );

    expect(link).toHaveAttribute(
      "target",
      "_blank",
    );

    expect(link).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("deve executar o evento onClick", () => {
    const handleClick = vi.fn();

    render(
      <Button
        href="#contato"
        onClick={handleClick}
      >
        Contato
      </Button>,
    );

    fireEvent.click(
      screen.getByRole("link", {
        name: "Contato",
      }),
    );

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("deve permitir sobrescrever o className", () => {
    render(
      <Button
        href="#sobre"
        className="button-custom"
      >
        Saiba mais
      </Button>,
    );

    expect(
      screen.getByRole("link"),
    ).toHaveClass("button-custom");
  });
});