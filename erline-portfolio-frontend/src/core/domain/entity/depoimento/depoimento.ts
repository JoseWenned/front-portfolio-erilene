export type StatusDepoimento =
  | "PENDENTE"
  | "APROVADO"
  | "REJEITADO";

export interface Depoimento {
  id: string;
  nome: string;
  comentario: string;
  nota: number;
  fotoUrl: string | null;
  status: StatusDepoimento;
  createdAt: string;
  updatedAt: string;
}