import { render, screen } from "@testing-library/react";

import { Formacao } from "./Formacao.feature";
import { describe, expect, it } from "vitest";

describe("Formacao", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Formacao />);

    expect(
      screen.getByText("Formação"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Formacao />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Conhecimento que fundamenta minha atuação",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a formação acadêmica", () => {
    render(<Formacao />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Educação Física",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de formação", () => {
    render(<Formacao />);

    expect(
      document.querySelector("#formacao"),
    ).toBeInTheDocument();
  });
});