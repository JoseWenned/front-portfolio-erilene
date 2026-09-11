import { fireEvent, render, screen } from "@testing-library/react";

import styles from "./button.module.scss";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button.fragment";

describe("Button", () => {
  it("deve renderizar o conteúdo recebido", () => {
    render(<Button>Enviar</Button>);

    expect(
      screen.getByRole("button", {
        name: "Enviar",
      }),
    ).toBeInTheDocument();
  });

  it("deve usar a variante primary por padrão", () => {
    render(<Button>Enviar</Button>);

    expect(screen.getByRole("button")).toHaveClass(
      styles.primary,
    );
  });

  it("deve permitir a variante secondary", () => {
    render(
      <Button variant="secondary">
        Saiba mais
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveClass(
      styles.secondary,
    );
  });

  it("deve respeitar o estado disabled", () => {
    render(
      <Button disabled>
        Enviar
      </Button>,
    );

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("deve aceitar propriedades nativas do button", () => {
    render(
      <Button aria-label="Enviar formulário">
        Enviar
      </Button>,
    );

    expect(
      screen.getByRole("button", {
        name: "Enviar formulário",
      }),
    ).toBeInTheDocument();
  });

  it("deve executar o evento onClick", () => {
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick}>
        Enviar
      </Button>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("deve permitir sobrescrever o type padrão", () => {
    render(
      <Button type="submit">
        Enviar
      </Button>,
    );

    expect(screen.getByRole("button")).toHaveAttribute(
      "type",
      "submit",
    );
  });
});