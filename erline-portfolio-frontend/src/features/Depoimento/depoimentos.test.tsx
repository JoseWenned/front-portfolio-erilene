import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const {
  listarExecutarMock,
  criarExecutarMock,
  uploadMock,
} = vi.hoisted(() => ({
  listarExecutarMock: vi.fn(),
  criarExecutarMock: vi.fn(),
  uploadMock: vi.fn(),
}));

vi.mock(
  "../../core/infrastructure/composition/depoimento/depoimentoDependencies",
  () => ({
    depoimentoDependencies: {
      listarDepoimentosUseCase: {
        executar: listarExecutarMock,
      },
      criarDepoimentoUseCase: {
        executar: criarExecutarMock,
      },
    },
  }),
);

vi.mock(
  "../../core/infrastructure/api/ApiClient",
  () => ({
    ApiClient: class {
      upload = uploadMock;
    },
  }),
);

vi.mock(
  "../../core/infrastructure/api/apiConfig",
  () => ({
    apiConfig: {
      baseUrl: "http://localhost:8080",
    },
  }),
);

import { Depoimentos } from "./Depoimentos.feature";

describe("Depoimentos", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    listarExecutarMock.mockResolvedValue([
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

    criarExecutarMock.mockResolvedValue({
      id: "3",
      nome: "Carlos",
      comentario: "Excelente experiência.",
      nota: 5,
      fotoUrl: "/uploads/carlos.jpg",
      status: "PENDENTE",
      createdAt: "2026-09-14T12:00:00",
      updatedAt: "2026-09-14T12:00:00",
    });

    uploadMock.mockResolvedValue({
      url: "/uploads/foto.jpg",
    });
  });

  it("deve renderizar a identificação da seção", () => {
    render(<Depoimentos />);

    expect(
      screen.getByText("DEPOIMENTOS"),
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
      listarExecutarMock,
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
      screen.getByLabelText("Seu nome"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Sua experiência"),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Foto"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Enviar depoimento/,
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
    listarExecutarMock.mockResolvedValueOnce([]);

    render(<Depoimentos />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Ainda não temos depoimentos publicados/,
        ),
      ).toBeInTheDocument();
    });
  });

  it("deve exibir mensagem quando ocorrer erro ao carregar os depoimentos", async () => {
    listarExecutarMock.mockRejectedValueOnce(
      new Error("Erro na API"),
    );

    render(<Depoimentos />);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Não foi possível carregar os depoimentos no momento.",
        ),
      ).toBeInTheDocument();
    });
  });
});