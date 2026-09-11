# Experiência

## Objetivo

A seção **Experiência** apresenta a experiência profissional da Erline e contextualiza sua atuação como Personal Trainer.

A feature foi desenvolvida seguindo o padrão arquitetural adotado no frontend, mantendo seu conteúdo, apresentação e testes organizados dentro de uma estrutura própria.

## Estrutura

```text
src/features/Experiencia/
├── Experiencia.feature.tsx
├── experiencia.module.scss
└── Experiencia.test.tsx
```

### Responsabilidades

* `Experiencia.feature.tsx`

  * Composição da seção.
  * Organização dos dados de experiência.
  * Renderização das experiências profissionais.
  * Utilização dos fragments reutilizáveis.

* `experiencia.module.scss`

  * Responsável pela apresentação visual.
  * Layout dos cards.
  * Tipografia.
  * Cores.
  * Espaçamentos.
  * Estados de interação.
  * Responsividade.

* `Experiencia.test.tsx`

  * Testes automatizados da feature.
  * Validação da estrutura e conteúdo principal da seção.

## Modelo de dados

As experiências são representadas por uma coleção local:

```ts
const experiences = [
  {
    company: "Experiência profissional",
    role: "Personal Trainer",
    description: "...",
  },
];
```

A utilização de uma coleção permite adicionar novas experiências sem alterar a estrutura de renderização do componente.

## Composição

A feature utiliza os fragments do Design System:

```tsx
<Section>
  <Container>
    ...
  </Container>
</Section>
```

As responsabilidades permanecem separadas:

* `Section`: estrutura semântica e espaçamento da seção.
* `Container`: largura e alinhamento do conteúdo.
* `Experiencia`: conteúdo específico da experiência profissional.

## Apresentação visual

Cada experiência é apresentada em um card contendo:

* identificação da empresa ou contexto profissional;
* função exercida;
* descrição da experiência.

Os cards possuem interação visual através de uma elevação durante o estado `hover`.

A apresentação foi mantida simples para permitir a inclusão futura de múltiplas experiências.

## Responsividade

Em dispositivos menores:

* o cabeçalho da seção é centralizado;
* o título é reduzido;
* as informações do card são reorganizadas verticalmente;
* o conteúdo mantém espaçamento adequado;
* a função deixa de ocupar uma posição horizontal fixa.

## Dados profissionais

A implementação inicial utiliza uma descrição profissional genérica porque ainda não foram definidos dados específicos como:

* nome de academias;
* empresas;
* períodos;
* cargos anteriores;
* datas de início e término.

Nenhuma informação profissional específica foi inventada.

Quando os dados reais forem disponibilizados, a coleção `experiences` poderá ser atualizada sem necessidade de alteração estrutural da feature.

## Acessibilidade

A estrutura utiliza elementos semânticos:

* `section`;
* `article`;
* `h2`;
* `p`;
* elementos de texto para identificação das informações.

A hierarquia de títulos mantém a relação:

```text
h2
└── informações da experiência
```

## Testes

A feature possui testes automatizados utilizando Vitest e React Testing Library.

São validados:

1. identificação da seção;
2. título principal;
3. experiência profissional;
4. descrição da experiência;
5. identificador `#experiencia`.

## Integração

A feature foi adicionada à página principal após a seção Formação:

```tsx
<Hero />
<Sobre />
<Habilidades />
<Formacao />
<Experiencia />
```

Essa ordem mantém a progressão de apresentação do portfólio:

```text
Apresentação
    ↓
Sobre
    ↓
Habilidades
    ↓
Formação
    ↓
Experiência
```

## Princípios aplicados

A implementação mantém os princípios adotados no projeto:

* responsabilidade única;
* separação de responsabilidades;
* reutilização de componentes;
* organização por feature;
* CSS Modules;
* HTML semântico;
* responsividade;
* testes automatizados;
* ausência de dados profissionais não confirmados.

## Validação

A feature foi validada utilizando:

```bash
npm test
npm run lint
npm run build
```

Todas as validações foram concluídas com sucesso.
