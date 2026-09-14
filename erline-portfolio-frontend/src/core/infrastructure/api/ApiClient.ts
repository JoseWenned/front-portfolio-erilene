import { apiConfig } from "./apiConfig";

export class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string = apiConfig.baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get<T>(path: string): Promise<T> {
        return this.request<T>(path, {
        method: "GET",
        });
    }

    async post<T>(path: string, body: unknown): Promise<T> {
        return this.request<T>(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        });
    }

    async patch<T>(path: string, body?: unknown): Promise<T> {
        return this.request<T>(path, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        ...(body !== undefined && {
            body: JSON.stringify(body),
        }),
        });
    }

    private async request<T>(
        path: string,
        options: RequestInit,
    ): Promise<T> {
        const response = await fetch(`${this.baseUrl}${path}`, options);

        if (!response.ok) {
        throw new Error(
            `Erro na requisição HTTP: ${response.status} ${response.statusText}`,
        );
        }

        if (response.status === 204) {
        return undefined as T;
        }

        return response.json() as Promise<T>;
    }
}