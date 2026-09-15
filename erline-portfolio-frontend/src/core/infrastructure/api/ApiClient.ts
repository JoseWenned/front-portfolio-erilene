// import { apiConfig } from "./apiConfig";

// export class ApiClient {
//   private readonly baseUrl: string;

//   constructor(baseUrl: string = apiConfig.baseUrl) {
//     if (!baseUrl) {
//       throw new Error(
//         "NEXT_PUBLIC_API_URL não está configurada.",
//       );
//     }

//     this.baseUrl = baseUrl;
//   }

//   async get<T>(path: string): Promise<T> {
//     return this.request<T>(path, {
//       method: "GET",
//     });
//   }

//   async post<T>(path: string, body: unknown): Promise<T> {
//     return this.request<T>(path, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//   }

//   async patch<T>(
//     path: string,
//     body?: unknown,
//   ): Promise<T> {
//     return this.request<T>(path, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       ...(body !== undefined && {
//         body: JSON.stringify(body),
//       }),
//     });
//   }

//   async upload<T>(
//     path: string,
//     file: File,
//   ): Promise<T> {
//     const formData = new FormData();

//     formData.append("file", file);

//     return this.request<T>(path, {
//       method: "POST",
//       body: formData,
//     });
//   }

//   private async request<T>(
//     path: string,
//     options: RequestInit,
//   ): Promise<T> {
//     const response = await fetch(
//       `${this.baseUrl}${path}`,
//       options,
//     );

//     if (!response.ok) {
//       throw new Error(
//         `Erro na requisição HTTP: ${response.status} ${response.statusText}`,
//       );
//     }

//     if (response.status === 204) {
//       return undefined as T;
//     }

//     return response.json() as Promise<T>;
//   }
// }

import { apiConfig } from "./apiConfig";

export class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string = apiConfig.baseUrl) {
    if (!baseUrl) {
      throw new Error(
        "NEXT_PUBLIC_API_URL não está configurada.",
      );
    }

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

  async patch<T>(
    path: string,
    body?: unknown,
  ): Promise<T> {
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

  async upload<T>(
    path: string,
    file: File,
  ): Promise<T> {
    const formData = new FormData();

    formData.append("file", file);

    return this.request<T>(path, {
      method: "POST",
      body: formData,
    });
  }

  private async request<T>(
    path: string,
    options: RequestInit,
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Erro na requisição HTTP: ${response.status} ${response.statusText} | ${options.method ?? "GET"} ${url}`,
      );
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }
}