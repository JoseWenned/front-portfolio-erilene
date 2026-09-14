import type {
  CriarDepoimentoData,
  DepoimentoRepository,
} from "./depoimentoRepository";

import type { Depoimento } from "../../entity/depoimento/depoimento";
import { describe, expect, it } from "vitest";

describe("DepoimentoRepository", () => {
    it("deve definir o contrato para criação de depoimento", async () => {
        const repository: DepoimentoRepository = {
        criar: async (
            data: CriarDepoimentoData,
        ): Promise<Depoimento> => ({
            id: "550e8400-e29b-41d4-a716-446655440000",
            nome: data.nome,
            comentario: data.comentario,
            nota: data.nota,
            fotoUrl: data.fotoUrl ?? null,
            status: "PENDENTE",
            createdAt: "2026-09-14T10:00:00",
            updatedAt: "2026-09-14T10:00:00",
        }),

        listar: async (): Promise<Depoimento[]> => [],
        };

        const resultado = await repository.criar({
        nome: "Maria",
        comentario: "Excelente profissional!",
        nota: 5,
        fotoUrl: "https://example.com/maria.jpg",
        });

        expect(resultado.nome).toBe("Maria");
        expect(resultado.comentario).toBe("Excelente profissional!");
        expect(resultado.nota).toBe(5);
        expect(resultado.fotoUrl).toBe("https://example.com/maria.jpg");
        expect(resultado.status).toBe("PENDENTE");
    });

    it("deve definir o contrato para listagem de depoimentos", async () => {
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

        const resultado = await repository.listar();

        expect(resultado).toEqual([]);
    });
});