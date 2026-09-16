import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Certificacoes } from "./Certificacoes.feature";

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
        name: "Conhecimento que acompanha a prática.",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar as certificações profissionais", () => {
    render(<Certificacoes />);

    const certifications = screen.getAllByRole("heading", {
      level: 3,
      name: "Certificação profissional",
    });

    expect(certifications).toHaveLength(3);
  });

  it("deve renderizar a descrição da seção", () => {
    render(<Certificacoes />);

    expect(
      screen.getByText(
        /Formação complementar e busca constante por conhecimento/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a contagem de certificados", () => {
    render(<Certificacoes />);

    expect(
      screen.getByText("03 certificados"),
    ).toBeInTheDocument();
  });

  it("deve renderizar as imagens dos certificados", () => {
    render(<Certificacoes />);

    const images = screen.getAllByRole("img", {
      name: "Certificado profissional de Erline",
    });

    expect(images).toHaveLength(3);
  });

  it("deve renderizar a seção de certificações", () => {
    render(<Certificacoes />);

    expect(
      document.querySelector("#certificacoes"),
    ).toBeInTheDocument();
  });
});

