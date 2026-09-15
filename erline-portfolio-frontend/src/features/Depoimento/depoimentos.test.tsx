import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Depoimentos } from "./Depoimentos.feature";

const executarMock = vi.fn();

vi.mock(
  "../../core/infrastructure/composition/depoimento/depoimentoDependencies",
  () => ({
    depoimentoDependencies: {
      listarDepoimentosUseCase: {
        executar: executarMock,
      },
    },
  }),
);

describe("Depoimentos", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    executarMock.mockResolvedValue([
      {
        id: "1",
        nome: "Maria",
        comentario:
          "Excelente acompanhamento e atenção durante os treinos.",
        nota: 5,
        fotoUrl: null,
        status: "APROVADO",
        createdAt: "2026-09-14T10:00:00",
        updatedAt: "2026-09-14T10:00:00",
      },
      {
        id: "2",
        nome: "João",
        comentario:
          "Profissional dedicada, atenciosa e comprometida.",
        nota: 5,
        fotoUrl: null,
        status: "APROVADO",
        createdAt: "2026-09-14T11:00:00",
        updatedAt: "2026-09-14T11:00:00",
      },
    ]);
  });

  it("deve renderizar a identificação da seção", () => {
    render(<Depoimentos />);

    expect(
      screen.getByText("Depoimentos"),
    ).toBeInTheDocument();
  });

  it("deve renderizar o título da seção", () => {
    render(<Depoimentos />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Histórias de quem vive o movimento.",
      }),
    ).toBeInTheDocument();
  });

  it("deve carregar e renderizar os depoimentos através do use case", async () => {
    render(<Depoimentos />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Excelente acompanhamento e atenção durante os treinos/,
        ),
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText("Maria"),
    ).toBeInTheDocument();

    expect(
      executarMock,
    ).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar o formulário de depoimento", () => {
    render(<Depoimentos />);

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Compartilhe sua história.",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Nome"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Depoimento"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Enviar depoimento",
      }),
    ).toBeInTheDocument();
  });

  it("deve renderizar a seção de depoimentos", () => {
    render(<Depoimentos />);

    expect(
      document.querySelector("#depoimentos"),
    ).toBeInTheDocument();
  });

  it("deve exibir mensagem quando não houver depoimentos", async () => {
    executarMock.mockResolvedValueOnce([]);

    render(<Depoimentos />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Ainda não há depoimentos publicados.",
        ),
      ).toBeInTheDocument();
    });
  });

  it("deve exibir mensagem quando ocorrer erro ao carregar os depoimentos", async () => {
    executarMock.mockRejectedValueOnce(
      new Error("Erro na API"),
    );

    render(<Depoimentos />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Não foi possível carregar os depoimentos.",
        ),
      ).toBeInTheDocument();
    });
  });
});