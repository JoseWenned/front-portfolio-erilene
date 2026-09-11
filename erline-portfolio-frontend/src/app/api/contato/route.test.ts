import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendMock } = vi.hoisted(() => ({
  sendMock: vi.fn(),
}));

vi.mock("resend", () => ({
  Resend: class {
    emails = {
      send: sendMock,
    };
  },
}));

import { POST } from "./route";

describe("POST /api/contato", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deve enviar o contato com sucesso", async () => {
    sendMock.mockResolvedValue({
      data: {
        id: "email-test-id",
      },
      error: null,
    });

    const request = new Request(
      "http://localhost:3000/api/contato",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: "João",
          email: "joao@email.com",
          mensagem: "Gostaria de conhecer os serviços.",
        }),
      },
    );

    const response = await POST(request);

    expect(response.status).toBe(200);

    expect(sendMock).toHaveBeenCalledTimes(1);

    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        replyTo: "joao@email.com",
        subject: "Novo contato de João",
      }),
    );
  });

  it("deve retornar 400 quando os campos obrigatórios não forem enviados", async () => {
    const request = new Request(
      "http://localhost:3000/api/contato",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: "João",
        }),
      },
    );

    const response = await POST(request);

    expect(response.status).toBe(400);

    expect(sendMock).not.toHaveBeenCalled();
  });

  it("deve retornar 500 quando o Resend retornar erro", async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: {
        message: "Erro no envio",
      },
    });

    const request = new Request(
      "http://localhost:3000/api/contato",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: "João",
          email: "joao@email.com",
          mensagem: "Mensagem de teste.",
        }),
      },
    );

    const response = await POST(request);

    expect(response.status).toBe(500);
  });
});