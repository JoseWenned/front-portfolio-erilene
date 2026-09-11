import { render, screen } from "@testing-library/react";

import { Habilidades } from "./Habilidades.feature";
import { describe, expect, it } from "vitest";

describe("Habilidades", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Habilidades />);

    expect(
      screen.getByText("Habilidades"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Habilidades />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Conhecimento para transformar movimento em resultado",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar as habilidades profissionais", () => {
    render(<Habilidades />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Treinamento personalizado",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Avaliação física",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Prescrição de exercícios",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de habilidades", () => {
    render(<Habilidades />);

    expect(
      document.querySelector("#habilidades"),
    ).toBeInTheDocument();
  });
});