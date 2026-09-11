import { render, screen } from "@testing-library/react";

import { Depoimentos } from "./Depoimentos.feature";
import { describe, expect, it } from "vitest";

describe("Depoimentos", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Depoimentos />);

    expect(
      screen.getByText("Depoimentos"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Depoimentos />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Experiências de quem treina comigo",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar os depoimentos", () => {
    render(<Depoimentos />);

    expect(
      screen.getByText(
        /Excelente acompanhamento e atenção durante os treinos/,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Profissional dedicada, atenciosa e comprometida/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar o formulário de depoimento", () => {
    render(<Depoimentos />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Compartilhe sua experiência",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Nome"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Depoimento"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Enviar depoimento",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de depoimentos", () => {
    render(<Depoimentos />);

    expect(
      document.querySelector("#depoimentos"),
    ).toBeInTheDocument();
  });
});