import { CriarDepoimentoData, DepoimentoRepository } from "@/core/domain/repository/depoimento/depoimentoRepository";
import { ApiClient } from "../../api/ApiClient";
import { Depoimento } from "@/core/domain/entity/depoimento/depoimento";

export class DepoimentoRepositoryImpl implements DepoimentoRepository {
  constructor(
    private readonly apiClient: ApiClient,
  ) {}

  async criar(data: CriarDepoimentoData): Promise<Depoimento> {
    return this.apiClient.post<Depoimento>(
      "/api/depoimentos",
      data,
    );
  }

  async listar(): Promise<Depoimento[]> {
    return this.apiClient.get<Depoimento[]>(
      "/api/depoimentos",
    );
  }
}