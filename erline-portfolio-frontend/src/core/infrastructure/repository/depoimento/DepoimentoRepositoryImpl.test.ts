import { beforeEach, describe, expect, it, vi } from "vitest";

import type { Depoimento } from "../../../domain/entity/depoimento/depoimento";

import { DepoimentoRepositoryImpl } from "./DepoimentoRepositoryImpl";

describe("DepoimentoRepositoryImpl", () => {
  const postMock = vi.fn();
  const getMock = vi.fn();

  const apiClientMock = {
    post: postMock,
    get: getMock,
  };

  const repository = new DepoimentoRepositoryImpl(
    apiClientMock as never,
  );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve criar um depoimento através da API", async () => {
    const data = {
      nome: "Maria",
      comentario: "Excelente profissional!",
      nota: 5,
      fotoUrl: "https://example.com/foto.jpg",
    };

    const depoimento: Depoimento = {
      id: "1",
      nome: "Maria",
      comentario: "Excelente profissional!",
      nota: 5,
      fotoUrl: "https://example.com/foto.jpg",
      status: "PENDENTE",
      createdAt: "2026-09-14T10:00:00",
      updatedAt: "2026-09-14T10:00:00",
    };

    postMock.mockResolvedValue(depoimento);

    const resultado = await repository.criar(data);

    expect(postMock).toHaveBeenCalledWith(
      "/api/depoimentos",
      data,
    );

    expect(resultado).toEqual(depoimento);
  });

  it("deve listar os depoimentos através da API", async () => {
    const depoimentos: Depoimento[] = [
      {
        id: "1",
        nome: "Maria",
        comentario: "Excelente profissional!",
        nota: 5,
        fotoUrl: null,
        status: "APROVADO",
        createdAt: "2026-09-14T10:00:00",
        updatedAt: "2026-09-14T10:00:00",
      },
      {
        id: "2",
        nome: "João",
        comentario: "Ótimo acompanhamento!",
        nota: 5,
        fotoUrl: null,
        status: "APROVADO",
        createdAt: "2026-09-14T11:00:00",
        updatedAt: "2026-09-14T11:00:00",
      },
    ];

    getMock.mockResolvedValue(depoimentos);

    const resultado = await repository.listar();

    expect(getMock).toHaveBeenCalledWith(
      "/api/depoimentos",
    );

    expect(resultado).toEqual(depoimentos);
  });
});