import type { Depoimento } from "../../entity/depoimento/depoimento";

export interface CriarDepoimentoData {
    nome: string;
    comentario: string;
    nota: number;
    fotoUrl?: string;
}

export interface DepoimentoRepository {
    criar(data: CriarDepoimentoData): Promise<Depoimento>;
    listar(): Promise<Depoimento[]>;
}
