# Certificações

## Objetivo

A seção de Certificações apresenta qualificações e conhecimentos complementares relacionados à atuação profissional da Erline.

A implementação foi estruturada para permitir a inclusão posterior das certificações reais, sem necessidade de alteração na estrutura do componente.

## Estrutura

```text
src/features/Certificacoes/
├── Certificacoes.feature.tsx
├── certificacoes.module.scss
└── Certificacoes.test.tsx
```

## Responsabilidade

A feature é responsável por:

* apresentar a identificação da seção;
* apresentar o título e a descrição introdutória;
* listar certificações profissionais;
* manter a estrutura preparada para múltiplas certificações;
* fornecer uma apresentação visual consistente com o Design System.

## Modelagem dos dados

As certificações são representadas inicialmente por uma coleção local:

```ts
const certifications = [
  {
    title: "...",
    description: "...",
  },
];
```

Essa estrutura permite posteriormente substituir os dados provisórios pelas certificações reais da profissional.

Os dados reais não foram inventados durante a implementação. Quando forem fornecidos, poderão ser adicionados mantendo a mesma estrutura.

## Composição

A feature utiliza os fragments:

* `Container`
* `Section`

Isso mantém a composição alinhada à arquitetura definida anteriormente e evita duplicação de estruturas de layout.

## Interface visual

Cada certificação é apresentada em um card contendo:

* indicador visual;
* nome da certificação;
* descrição;
* espaçamento e tipografia definidos pelo Design System.

A seção utiliza a superfície clara da interface e mantém os mesmos padrões de borda, sombra, raio e cores utilizados nas demais features.

## Responsividade

O layout utiliza CSS Grid.

Em telas maiores:

```text
┌───────────────┐ ┌───────────────┐
│ Certificação  │ │ Certificação  │
└───────────────┘ └───────────────┘
```

Em telas menores, os cards passam para uma única coluna.

Em dispositivos ainda menores, o conteúdo interno do card também é reorganizado verticalmente.

## Acessibilidade

A implementação utiliza elementos semânticos:

* `section`;
* `article`;
* `h2`;
* `h3`;
* `p`.

O indicador visual de certificação possui `aria-hidden="true"`, pois não transmite informação adicional necessária ao usuário de tecnologias assistivas.

A hierarquia de títulos mantém a estrutura:

```text
h2
└── h3
```

## Testes

O componente possui testes para validar:

* identificação da seção;
* título principal;
* certificação profissional;
* descrição;
* existência do identificador `#certificacoes`.

Os testes utilizam React Testing Library e Vitest.

## Integração

A feature foi integrada à página principal:

```tsx
<Hero />
<Sobre />
<Habilidades />
<Formacao />
<Experiencia />
<Certificacoes />
```

Dessa forma, a seção passa a fazer parte da composição principal do portfólio.

## Princípios aplicados

A implementação segue os princípios definidos anteriormente:

* separação de responsabilidades;
* composição de componentes;
* reutilização de fragments;
* CSS Modules;
* componentes específicos por feature;
* semântica HTML;
* responsividade;
* testes automatizados.

## Validação

A implementação foi validada com:

```bash
npm test
npm run lint
npm run build
```

Todas as validações foram executadas com sucesso.

## Próxima evolução

Quando as informações reais forem disponibilizadas, a coleção `certifications` deverá ser atualizada com dados como:

* nome da certificação;
* instituição;
* ano;
* especialização;
* demais informações relevantes.

A estrutura do componente não precisa ser alterada para essa evolução.
