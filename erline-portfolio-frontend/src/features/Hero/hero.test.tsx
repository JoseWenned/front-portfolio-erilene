import { render, screen } from "@testing-library/react";

import { Hero } from "./Hero.feature";
import { describe, expect, it } from "vitest";

describe("Hero", () => {
  it("deve renderizar a identificação profissional", () => {
    render(<Hero />);

    expect(
      screen.getByText("Personal Trainer"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título principal", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Olá, eu sou Erline",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição profissional", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "Transformando movimento em saúde, força e qualidade de vida.",
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar o botão principal", () => {
    render(<Hero />);

    expect(
      screen.getByRole("button", {
        name: "Conheça meu trabalho",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a imagem da Erline", () => {
    render(<Hero />);

    expect(
      screen.getByRole("img", {
        name: "Erline, Personal Trainer",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção inicial", () => {
    render(<Hero />);

    expect(
      document.querySelector("#inicio"),
    ).toBeInTheDocument();
  });
});