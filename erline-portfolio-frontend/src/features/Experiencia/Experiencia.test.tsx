import { render, screen } from "@testing-library/react";

import { Experiencia } from "./Experiencia.feature";
import { describe, expect, it } from "vitest";

describe("Experiencia", () => {
  it("deve renderizar a identificação da seção", () => {
    render(<Experiencia />);

    expect(
      screen.getByText("Experiência"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name:
          "Experiência profissional e acompanhamento personalizado",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a experiência profissional", () => {
    render(<Experiencia />);

    expect(
      screen.getByText("Experiência profissional"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Personal Trainer"),
    ).toBeInTheDocument();
  });

  it("deve renderizar a descrição da experiência", () => {
    render(<Experiencia />);

    expect(
      screen.getByText(
        /Atuação profissional com treinamento e acompanhamento individualizado/,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de experiência", () => {
    render(<Experiencia />);

    expect(
      document.querySelector("#experiencia"),
    ).toBeInTheDocument();
  });
});