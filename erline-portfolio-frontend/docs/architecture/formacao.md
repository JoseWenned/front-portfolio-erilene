# Formação

## Objetivo

A seção **Formação** apresenta a formação acadêmica da Erline e contextualiza como esse conhecimento fundamenta sua atuação profissional como Personal Trainer.

A seção foi desenvolvida como uma feature independente, seguindo o padrão estrutural adotado nas demais seções do portfólio.

## Estrutura

```text
src/features/Formacao/
├── Formacao.feature.tsx
├── formacao.module.scss
└── Formacao.test.tsx
```

### Responsabilidades

* `Formacao.feature.tsx`

  * Responsável pela composição e renderização da seção.
  * Mantém os dados de formação separados da estrutura visual por meio de uma coleção.
  * Utiliza os fragments `Section` e `Container`.

* `formacao.module.scss`

  * Responsável exclusivamente pela apresentação visual.
  * Define o layout da timeline.
  * Controla espaçamentos, tipografia, cores, cards e responsividade.

* `Formacao.test.tsx`

  * Responsável pelos testes da feature.
  * Valida a renderização da identificação da seção.
  * Valida o título principal.
  * Valida a formação acadêmica.
  * Valida a existência da seção pelo identificador `#formacao`.

## Composição

A feature utiliza componentes reutilizáveis do Design System:

```tsx
<Section>
  <Container>
    ...
  </Container>
</Section>
```

Essa composição mantém a responsabilidade de cada componente bem definida:

* `Section`: estrutura semântica e espaçamento da seção.
* `Container`: controle de largura e alinhamento do conteúdo.
* `Formacao`: conteúdo específico da seção.

## Modelo de dados

Os dados da formação são representados inicialmente por uma coleção local:

```ts
const formations = [
  {
    title: "Educação Física",
    description: "...",
  },
];
```

A utilização de uma coleção permite que novas formações sejam adicionadas futuramente sem alterar a estrutura principal do componente.

## Apresentação visual

A seção utiliza uma estrutura visual semelhante a uma timeline.

Cada formação possui:

* marcador visual;
* identificação do tipo de formação;
* título;
* descrição.

A timeline é construída utilizando CSS, evitando dependências externas desnecessárias.

## Responsividade

O layout foi desenvolvido seguindo a abordagem responsiva utilizada nas demais features.

Em telas menores:

* o conteúdo permanece centralizado;
* o cabeçalho da seção recebe alinhamento central;
* o tamanho dos títulos é reduzido;
* os cards recebem espaçamento adequado para dispositivos menores.

## Dados não confirmados

A implementação inicial não informa instituição de ensino, período de formação ou outros dados específicos que ainda não foram fornecidos.

Isso evita a criação de informações fictícias no portfólio.

Quando os dados reais forem disponibilizados, a coleção poderá ser expandida para representar essas informações.

## Acessibilidade

A estrutura utiliza elementos semânticos:

* `section`;
* `article`;
* `h2`;
* `h3`;
* `p`.

A hierarquia de títulos mantém:

```text
h2
└── h3
```

Isso facilita a interpretação da estrutura da página por tecnologias assistivas.

## Testes

A feature possui testes automatizados utilizando React Testing Library e Vitest.

São verificados:

1. identificação da seção;
2. título principal;
3. formação acadêmica;
4. identificador `#formacao`.

## Integração

A feature foi integrada à página principal:

```tsx
<Hero />
<Sobre />
<Habilidades />
<Formacao />
```

A ordem segue a sequência definida para apresentação do portfólio.

## Princípios aplicados

A implementação segue os princípios já estabelecidos no projeto:

* componentes com responsabilidade única;
* reutilização de fragments;
* separação entre estrutura e estilos;
* CSS Modules;
* HTML semântico;
* responsividade;
* testes automatizados;
* organização por feature.

## Validação

Antes do fechamento da feature devem ser executados:

```bash
npm test
npm run lint
npm run build
```

A feature somente deve ser considerada concluída após as três validações apresentarem sucesso.
