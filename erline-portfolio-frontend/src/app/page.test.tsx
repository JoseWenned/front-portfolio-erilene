import { render, screen } from "@testing-library/react";

import Home from "./page";
import { describe, expect, it } from "vitest";

describe("Home", () => {
  it("deve renderizar o Hero da página inicial", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Olá, eu sou Erline",
      }),
    ).toBeInTheDocument();
  });
});