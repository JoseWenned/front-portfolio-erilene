import { describe, expect, it } from "vitest";

import { POST } from "./route";

describe("POST /api/contato - integração com Resend", () => {
    it("deve enviar o contato utilizando o Resend real", async () => {
        const request = new Request(
        "http://localhost:3000/api/contato",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            nome: "Teste de Integração",
            email: process.env.CONTACT_EMAIL_TO,
            mensagem:
                "Mensagem enviada através do teste de integração do FRONT-014.",
            }),
        },
        );

        const response = await POST(request);

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.message).toBe(
        "Mensagem enviada com sucesso.",
        );
        expect(body.id).toBeDefined();
    });
});