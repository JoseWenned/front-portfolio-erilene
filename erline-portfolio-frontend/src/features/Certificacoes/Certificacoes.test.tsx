import { render, screen } from "@testing-library/react";

import { Certificacoes } from "./Certificacoes.feature";
import { describe, expect, it } from "vitest";

describe("Certificacoes", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Certificacoes />);

    expect(
      screen.getByText("Certificações"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Certificacoes />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name:
          "Aperfeiçoamento contínuo para uma atuação profissional de qualidade",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a certificação profissional", () => {
    render(<Certificacoes />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Certificações profissionais",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da certificação", () => {
    render(<Certificacoes />);

    expect(
      screen.getByText(
        /Conhecimentos e qualificações complementares/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de certificações", () => {
    render(<Certificacoes />);

    expect(
      document.querySelector("#certificacoes"),
    ).toBeInTheDocument();
  });
});