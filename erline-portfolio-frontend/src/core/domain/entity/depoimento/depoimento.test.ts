import { describe, expect, it } from "vitest";
import type { Depoimento, StatusDepoimento } from "./depoimento";

describe("Depoimento", () => {
    it("deve representar um depoimento aprovado", () => {
        const depoimento: Depoimento = {
        id: "550e8400-e29b-41d4-a716-446655440000",
        nome: "Maria",
        comentario: "Excelente profissional!",
        nota: 5,
        fotoUrl: "https://example.com/maria.jpg",
        status: "APROVADO",
        createdAt: "2026-09-14T10:00:00",
        updatedAt: "2026-09-14T10:00:00",
        };

        expect(depoimento.nome).toBe("Maria");
        expect(depoimento.comentario).toBe("Excelente profissional!");
        expect(depoimento.nota).toBe(5);
        expect(depoimento.fotoUrl).toBe("https://example.com/maria.jpg");
        expect(depoimento.status).toBe("APROVADO");
    });

    it("deve aceitar todos os status definidos pelo domínio", () => {
        const statuses: StatusDepoimento[] = [
            "PENDENTE",
            "APROVADO",
            "REJEITADO",
        ];
        
        expect(statuses).toHaveLength(3);
        expect(statuses).toContain("PENDENTE");
        expect(statuses).toContain("APROVADO");
        expect(statuses).toContain("REJEITADO");
    });

    it("deve permitir depoimento sem foto", () => {
        const depoimento: Depoimento = {
        id: "550e8400-e29b-41d4-a716-446655440001",
        nome: "João",
        comentario: "Ótimo acompanhamento.",
        nota: 4,
        fotoUrl: null,
        status: "APROVADO",
        createdAt: "2026-09-14T10:00:00",
        updatedAt: "2026-09-14T10:00:00",
        };

        expect(depoimento.fotoUrl).toBeNull();
    });
});
