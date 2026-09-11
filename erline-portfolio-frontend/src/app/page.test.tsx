import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("deve renderizar o Header", () => {
    render(<Home />);

    expect(
      screen.getByRole("navigation", {
        name: "Navegação principal",
      }),
    ).toBeInTheDocument();
  });
});