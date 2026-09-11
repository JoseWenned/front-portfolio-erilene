import { render, screen } from "@testing-library/react";

import { Galeria } from "./Galeria.feature";
import { describe, expect, it } from "vitest";

describe("Galeria", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Galeria />);

    expect(
      screen.getByText("Galeria"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Galeria />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Movimento na prática",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da seção", () => {
    render(<Galeria />);

    expect(
      screen.getByText(
        /Um pouco da minha rotina profissional/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar as imagens da galeria", () => {
    render(<Galeria />);

    expect(
      screen.getByRole("img", {
        name: "Erline durante sua atuação profissional como Personal Trainer",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da imagem", () => {
    render(<Galeria />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Treinamento personalizado",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de galeria", () => {
    render(<Galeria />);

    expect(
      document.querySelector("#galeria"),
    ).toBeInTheDocument();
  });
});