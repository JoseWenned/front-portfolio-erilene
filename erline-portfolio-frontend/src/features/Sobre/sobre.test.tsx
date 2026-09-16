import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Sobre } from "./Sobre.feature";

describe("Sobre", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Sobre />);

    expect(
      screen.getByText("Sobre mim"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Sobre />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Movimento, saúde e qualidade de vida.",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição profissional", () => {
    render(<Sobre />);

    expect(
      screen.getByText(
        /Sou Erilene Santiago, profissional de Educação Física e Personal Trainer/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar os destaques profissionais", () => {
    render(<Sobre />);

    expect(
      screen.getByText("Experiência"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Individualizado"),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção sobre", () => {
    render(<Sobre />);

    expect(
      document.querySelector("#sobre"),
    ).toBeInTheDocument();
  });
});