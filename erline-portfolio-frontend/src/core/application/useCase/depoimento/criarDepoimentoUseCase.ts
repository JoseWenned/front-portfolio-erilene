import { DepoimentoRepository } from "@/core/domain/repository/depoimento/depoimentoRepository";
import { criarDepoimentoDTO } from "../../dto/depoimento/criarDepoimentoDTO";
import { DepoimentoDTO } from "../../dto/depoimento/depoimentoDTO";

export class criarDepoimentoUseCase {
    constructor(
        private readonly depoimentoRepository: DepoimentoRepository,
    ) {}

    async executar(data: criarDepoimentoDTO): Promise<DepoimentoDTO> {
        const depoimento = await this.depoimentoRepository.criar(data);

        return {
            id: depoimento.id,
            nome: depoimento.nome,
            comentario: depoimento.comentario,
            nota: depoimento.nota,
            fotoUrl: depoimento.fotoUrl,
            status: depoimento.status,
            createdAt: depoimento.createdAt,
            updatedAt: depoimento.updatedAt,
        };
    }
}