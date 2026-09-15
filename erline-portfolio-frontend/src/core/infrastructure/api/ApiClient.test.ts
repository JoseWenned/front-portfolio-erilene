import { beforeEach, describe, expect, it, vi } from "vitest";

import { ApiClient } from "./ApiClient";

describe("ApiClient", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("deve realizar uma requisição GET", async () => {
    const response = {
      id: "1",
      nome: "Maria",
    };

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify(response), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      );

    const apiClient = new ApiClient("http://localhost:8080");

    const resultado = await apiClient.get("/api/depoimentos");

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:8080/api/depoimentos",
      {
        method: "GET",
      },
    );

    expect(resultado).toEqual(response);
  });

  it("deve realizar uma requisição POST com JSON", async () => {
    const response = {
      id: "1",
      nome: "Maria",
    };

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify(response), {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      );

    const apiClient = new ApiClient("http://localhost:8080");

    const resultado = await apiClient.post("/api/depoimentos", {
      nome: "Maria",
      comentario: "Excelente profissional!",
      nota: 5,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:8080/api/depoimentos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: "Maria",
          comentario: "Excelente profissional!",
          nota: 5,
        }),
      },
    );

    expect(resultado).toEqual(response);
  });

  it("deve realizar upload de uma imagem", async () => {
    const response = {
      url: "/uploads/depoimentos/imagem.jpg",
    };

    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify(response), {
          status: 201,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      );

    const apiClient = new ApiClient("http://localhost:8080");

    const file = new File(
      ["conteudo da imagem"],
      "imagem.jpg",
      {
        type: "image/jpeg",
      },
    );

    const resultado = await apiClient.upload(
      "/api/uploads/imagem",
      file,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);

    const [url, options] = fetchMock.mock.calls[0];

    expect(url).toBe(
      "http://localhost:8080/api/uploads/imagem",
    );

    expect(options).toBeDefined();
    expect(options?.method).toBe("POST");

    expect(options?.headers).toBeUndefined();

    expect(options?.body).toBeInstanceOf(FormData);

    const formData = options?.body as FormData;

    expect(formData.get("file")).toBeInstanceOf(File);

    const uploadedFile = formData.get("file") as File;

    expect(uploadedFile.name).toBe("imagem.jpg");
    expect(uploadedFile.type).toBe("image/jpeg");

    expect(resultado).toEqual(response);
  });

  it("deve lançar erro quando a API retornar uma resposta de erro", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, {
        status: 400,
        statusText: "Bad Request",
      }),
    );

    const apiClient = new ApiClient("http://localhost:8080");

    await expect(
      apiClient.get("/api/depoimentos"),
    ).rejects.toThrow(
      "Erro na requisição HTTP: 400 Bad Request",
    );
  });

  it("deve retornar undefined para respostas com status 204", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(null, {
        status: 204,
      }),
    );

    const apiClient = new ApiClient("http://localhost:8080");

    const resultado = await apiClient.patch(
      "/api/depoimentos/1/aprovar",
    );

    expect(resultado).toBeUndefined();
  });
});