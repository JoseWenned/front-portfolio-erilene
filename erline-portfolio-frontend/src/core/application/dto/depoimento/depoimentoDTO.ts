import type { StatusDepoimento } from "../../../domain/entity/depoimento/depoimento";

export interface DepoimentoDTO {
  id: string;
  nome: string;
  comentario: string;
  nota: number;
  fotoUrl: string | null;
  status: StatusDepoimento;
  createdAt: string;
  updatedAt: string;
}
