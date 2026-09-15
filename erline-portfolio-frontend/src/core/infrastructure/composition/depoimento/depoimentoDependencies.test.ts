import { describe, expect, it } from "vitest";

import { depoimentoDependencies } from "./depoimentoDependencies";

describe("depoimentoDependencies", () => {
  it("deve disponibilizar o use case de criação de depoimento", () => {
    expect(
      depoimentoDependencies.criarDepoimentoUseCase,
    ).toBeDefined();

    expect(
      depoimentoDependencies.criarDepoimentoUseCase.executar,
    ).toBeTypeOf("function");
  });

  it("deve disponibilizar o use case de listagem de depoimentos", () => {
    expect(
      depoimentoDependencies.listarDepoimentosUseCase,
    ).toBeDefined();

    expect(
      depoimentoDependencies.listarDepoimentosUseCase.executar,
    ).toBeTypeOf("function");
  });
});