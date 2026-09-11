import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header.component";

describe("Header", () => {
  it("deve renderizar a identidade da Erline", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: "Erline",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a navegação principal", () => {
    render(<Header />);

    expect(
      screen.getByRole("navigation", {
        name: "Navegação principal",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar os links de navegação", () => {
    render(<Header />);

    expect(
      screen.getByRole("link", {
        name: "Sobre",
      }),
    ).toHaveAttribute("href", "#sobre");

    expect(
      screen.getByRole("link", {
        name: "Contato",
      }),
    ).toHaveAttribute("href", "#contato");
  });
});