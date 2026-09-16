import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("deve renderizar o Hero da página inicial", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Olá, eu sou Erilene Santiago",
      }),
    ).toBeInTheDocument();
  });
});