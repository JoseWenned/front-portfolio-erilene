import { Sobre } from "../features/Sobre/Sobre.feature";
import { Hero } from "../features/Hero/Hero.feature";
import { Habilidades } from "../features/Habilidades/Habilidades.feature";
import { Formacao } from "../features/Formacao/Formacao.feature";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Habilidades />
      <Formacao />
    </>
  );
}
