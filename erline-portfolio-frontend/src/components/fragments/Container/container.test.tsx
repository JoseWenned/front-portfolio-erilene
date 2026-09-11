import { render, screen } from "@testing-library/react";
import { Container } from "./Container";
import styles from "./container.module.scss";
import { describe, expect, it } from "vitest";

describe("Container", () => {
  it("deve renderizar o conteúdo recebido", () => {
    render(
      <Container>
        <h1>Conteúdo do container</h1>
      </Container>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Conteúdo do container",
      }),
    ).toBeInTheDocument();
  });

  it("deve aplicar a classe do container", () => {
    const { container } = render(
      <Container>
        <p>Conteúdo</p>
      </Container>,
    );

    expect(container.firstChild).toHaveClass(styles.container);
  });
});