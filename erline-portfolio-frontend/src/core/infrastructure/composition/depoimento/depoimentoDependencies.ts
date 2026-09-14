import { criarDepoimentoUseCase } from "../../../../core/application/useCase/depoimento/criarDepoimentoUseCase";
import { ApiClient } from "../../api/ApiClient";
import { DepoimentoRepositoryImpl } from "../../repository/depoimento/DepoimentoRepositoryImpl";
import { listarDepoimentosUseCase } from "../../../../core/application/useCase/depoimento/listarDepoimentosUseCase";

const apiClient = new ApiClient();

const depoimentoRepository = new DepoimentoRepositoryImpl(
  apiClient,
);

export const depoimentoDependencies = {
  criarDepoimentoUseCase: new criarDepoimentoUseCase(
    depoimentoRepository,
  ),

  listarDepoimentosUseCase: new listarDepoimentosUseCase(
    depoimentoRepository,
  ),
};