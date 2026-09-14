import { describe, expect, it } from "vitest";

import { Depoimento } from "@/core/domain/entity/depoimento/depoimento";
import { CriarDepoimentoData, DepoimentoRepository } from "@/core/domain/repository/depoimento/depoimentoRepository";
import { criarDepoimentoUseCase } from "./criarDepoimentoUseCase";

describe("CriarDepoimentoUseCase", () => {
    it("deve criar um depoimento através do repositório", async () => {
        const depoimentoCriado: Depoimento = {
        id: "550e8400-e29b-41d4-a716-446655440000",
        nome: "Maria",
        comentario: "Excelente profissional!",
        nota: 5,
        fotoUrl: "https://example.com/maria.jpg",
        status: "PENDENTE",
        createdAt: "2026-09-14T10:00:00",
        updatedAt: "2026-09-14T10:00:00",
        };

        const criarMock = async (
        data: CriarDepoimentoData,
        ): Promise<Depoimento> => ({
        ...depoimentoCriado,
        nome: data.nome,
        comentario: data.comentario,
        nota: data.nota,
        fotoUrl: data.fotoUrl ?? null,
        });

        const repository: DepoimentoRepository = {
        criar: criarMock,
        listar: async (): Promise<Depoimento[]> => [],
        };

        const useCase = new criarDepoimentoUseCase(repository);

        const resultado = await useCase.executar({
        nome: "Maria",
        comentario: "Excelente profissional!",
        nota: 5,
        fotoUrl: "https://example.com/maria.jpg",
        });

        expect(resultado.id).toBe(depoimentoCriado.id);
        expect(resultado.nome).toBe("Maria");
        expect(resultado.comentario).toBe("Excelente profissional!");
        expect(resultado.nota).toBe(5);
        expect(resultado.fotoUrl).toBe("https://example.com/maria.jpg");
        expect(resultado.status).toBe("PENDENTE");
    });

    it("deve permitir criar um depoimento sem foto", async () => {
        const repository: DepoimentoRepository = {
        criar: async (
            data: CriarDepoimentoData,
        ): Promise<Depoimento> => ({
            id: "550e8400-e29b-41d4-a716-446655440001",
            nome: data.nome,
            comentario: data.comentario,
            nota: data.nota,
            fotoUrl: null,
            status: "PENDENTE",
            createdAt: "2026-09-14T10:00:00",
            updatedAt: "2026-09-14T10:00:00",
        }),

        listar: async (): Promise<Depoimento[]> => [],
        };

        const useCase = new criarDepoimentoUseCase(repository);

        const resultado = await useCase.executar({
        nome: "João",
        comentario: "Ótimo acompanhamento.",
        nota: 4,
        });

        expect(resultado.nome).toBe("João");
        expect(resultado.nota).toBe(4);
        expect(resultado.fotoUrl).toBeNull();
        expect(resultado.status).toBe("PENDENTE");
    });
});