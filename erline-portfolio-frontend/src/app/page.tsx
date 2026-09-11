import { Sobre } from "../features/Sobre/Sobre.feature";
import { Hero } from "../features/Hero/Hero.feature";
import { Habilidades } from "../features/Habilidades/Habilidades.feature";
import { Formacao } from "../features/Formacao/Formacao.feature";
import { Experiencia } from "../features/Experiencia/Experiencia.feature";
import { Certificacoes } from "../features/Certificacoes/Certificacoes.feature";
import { Galeria } from "../features/Galeria/Galeria.feature";
import { Depoimentos } from "../features/Depoimento/Depoimentos.feature";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Habilidades />
      <Formacao />
      <Experiencia />
      <Certificacoes />
      <Galeria />
      <Depoimentos />
    </>
  );
}
