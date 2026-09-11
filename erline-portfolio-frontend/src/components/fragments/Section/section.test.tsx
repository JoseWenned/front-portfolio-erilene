import { render, screen } from "@testing-library/react";

import styles from "./section.module.scss";
import { describe, expect, it } from "vitest";
import { Section } from "./Section.fragment";

describe("Section", () => {
  it("deve renderizar o conteúdo recebido", () => {
    render(
      <Section>
        <h2>Sobre mim</h2>
      </Section>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Sobre mim",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar um elemento section", () => {
    const { container } = render(
        <Section>
        <p>Conteúdo</p>
        </Section>,
    );

    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("deve aplicar a classe do section", () => {
    const { container } = render(
        <Section>
        <p>Conteúdo</p>
        </Section>,
    );

    expect(container.querySelector("section")).toHaveClass(
        styles.section,
    );
 });

  it("deve aceitar propriedades nativas do elemento section", () => {
    render(
      <Section aria-label="Seção sobre mim">
        <p>Conteúdo</p>
      </Section>,
    );

    expect(
      screen.getByRole("region", {
        name: "Seção sobre mim",
      }),
    ).toBeInTheDocument();
  });
});