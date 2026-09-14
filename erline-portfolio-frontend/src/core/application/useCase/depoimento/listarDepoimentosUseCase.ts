import { DepoimentoRepository } from "@/core/domain/repository/depoimento/depoimentoRepository";
import { DepoimentoDTO } from "../dto/depoimento/depoimentoDTO";

export class listarDepoimentosUseCase {
    constructor(
        private readonly depoimentoRepository: DepoimentoRepository,
    ) {}

    async executar(): Promise<DepoimentoDTO[]> {
        const depoimentos = await this.depoimentoRepository.listar();

        return depoimentos.map((depoimento) => ({
            id: depoimento.id,
            nome: depoimento.nome,
            comentario: depoimento.comentario,
            nota: depoimento.nota,
            fotoUrl: depoimento.fotoUrl,
            status: depoimento.status,
            createdAt: depoimento.createdAt,
            updatedAt: depoimento.updatedAt,
        }));
    }
}