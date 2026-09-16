import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import { Footer } from "./Footer.component";

describe("Footer", () => {
  it("deve renderizar a identidade da Erilene", () => {
    render(<Footer />);

    expect(
      screen.getByText("Erilene Santiago"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o copyright", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(
        `© ${currentYear} Erilene Santiago. Todos os direitos reservados.`,
      ),
    ).toBeInTheDocument();
  });

  it("deve renderizar a navegação de redes sociais", () => {
    render(<Footer />);

    expect(
      screen.getByRole("navigation", {
        name: "Redes sociais",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar os links sociais", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: "Instagram",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "WhatsApp",
      }),
    ).toBeInTheDocument();
  });
});