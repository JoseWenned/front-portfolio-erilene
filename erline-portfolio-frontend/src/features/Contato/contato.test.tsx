import { render, screen } from "@testing-library/react";

import { Contato } from "./Contato.feature";
import { describe, expect, it } from "vitest";

describe("Contato", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Contato />);

    expect(
      screen.getByText("Contato"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Contato />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Vamos conversar sobre seus objetivos",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar as informações de contato", () => {
    render(<Contato />);

    expect(
      screen.getByText("WhatsApp"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Instagram"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Atendimento"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o formulário de contato", () => {
    render(<Contato />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Envie uma mensagem",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Nome"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("E-mail"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Mensagem"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Enviar mensagem",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de contato", () => {
    render(<Contato />);

    expect(
      document.querySelector("#contato"),
    ).toBeInTheDocument();
  });
});