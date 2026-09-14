import { Depoimento } from "@/core/domain/entity/depoimento/depoimento";
import { DepoimentoRepository } from "@/core/domain/repository/depoimento/depoimentoRepository";
import { describe, expect, it } from "vitest";
import { listarDepoimentosUseCase } from "./listarDepoimentosUseCase";

describe("ListarDepoimentosUseCase", () => {
    it("deve listar os depoimentos através do repositório", async () => {
        const depoimentos: Depoimento[] = [
            {
                id: "550e8400-e29b-41d4-a716-446655440000",
                nome: "Maria",
                comentario: "Excelente profissional!",
                nota: 5,
                fotoUrl: "https://example.com/maria.jpg",
                status: "APROVADO",
                createdAt: "2026-09-14T10:00:00",
                updatedAt: "2026-09-14T10:00:00",
            },
            {
                id: "550e8400-e29b-41d4-a716-446655440001",
                nome: "João",
                comentario: "Ótimo acompanhamento.",
                nota: 4,
                fotoUrl: null,
                status: "APROVADO",
                createdAt: "2026-09-14T11:00:00",
                updatedAt: "2026-09-14T11:00:00",
            },
        ];

            const repository: DepoimentoRepository = {
            criar: async (): Promise<Depoimento> => depoimentos[0],
            listar: async (): Promise<Depoimento[]> => depoimentos,
        };

        const useCase = new listarDepoimentosUseCase(repository);

        const resultado = await useCase.executar();

        expect(resultado).toHaveLength(2);

        expect(resultado[0]).toEqual(depoimentos[0]);
        expect(resultado[1]).toEqual(depoimentos[1]);
    });

    it("deve retornar uma lista vazia quando não houver depoimentos", async () => {
        const repository: DepoimentoRepository = {
            criar: async (): Promise<Depoimento> => ({
                id: "550e8400-e29b-41d4-a716-446655440000",
                nome: "Maria",
                comentario: "Excelente profissional!",
                nota: 5,
                fotoUrl: null,
                status: "PENDENTE",
                createdAt: "2026-09-14T10:00:00",
                updatedAt: "2026-09-14T10:00:00",
            }),

            listar: async (): Promise<Depoimento[]> => [],
        };

        const useCase = new listarDepoimentosUseCase(repository);

        const resultado = await useCase.executar();

        expect(resultado).toEqual([]);
    });
});