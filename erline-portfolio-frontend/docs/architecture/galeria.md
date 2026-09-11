# Galeria

## Objetivo

A seção de Galeria apresenta registros visuais relacionados à atuação profissional da Erline, permitindo destacar treinamentos, atividades profissionais e outros momentos relevantes da sua trajetória.

A estrutura foi desenvolvida para permitir a inclusão de novas imagens sem alteração na estrutura do componente.

## Estrutura

```text
src/features/Galeria/
├── Galeria.feature.tsx
├── galeria.module.scss
└── Galeria.test.tsx
```

## Responsabilidade

A feature é responsável por:

* apresentar a identificação da seção;
* apresentar título e descrição;
* exibir as imagens da galeria;
* apresentar uma descrição para cada imagem;
* organizar as imagens em um grid responsivo;
* utilizar o sistema de otimização de imagens do Next.js.

## Modelagem dos dados

As imagens são representadas por uma coleção local:

```ts
const gallery = [
  {
    src: image,
    alt: "...",
    title: "...",
  },
];
```

Essa abordagem permite adicionar novas imagens de maneira simples, mantendo a separação entre os dados e a estrutura de apresentação.

Os dados visuais utilizados nesta primeira implementação possuem caráter provisório. As imagens e descrições poderão ser substituídas posteriormente pelo material oficial fornecido pela profissional.

## Next/Image

A implementação utiliza o componente `Image` do Next.js:

```tsx
<Image
  src={item.src}
  alt={item.alt}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className={styles.image}
/>
```

O uso de `next/image` permite utilizar os recursos de otimização de imagens disponibilizados pelo framework.

O atributo `sizes` auxilia o navegador e o Next.js a determinar o tamanho adequado da imagem de acordo com o viewport.

## Layout

A galeria utiliza CSS Grid.

Em telas maiores, as imagens são distribuídas em três colunas:

```text
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Imagem   │ │ Imagem   │ │ Imagem   │
└──────────┘ └──────────┘ └──────────┘
```

Em telas intermediárias:

```text
┌──────────┐ ┌──────────┐
│ Imagem   │ │ Imagem   │
└──────────┘ └──────────┘
```

Em dispositivos móveis:

```text
┌──────────┐
│ Imagem   │
└──────────┘
```

## Proporção das imagens

O container das imagens utiliza:

```scss
aspect-ratio: 4 / 3;
```

Isso mantém uma proporção visual consistente entre os cards mesmo quando as imagens originais possuem dimensões diferentes.

O `object-fit: cover` permite preencher o espaço disponível preservando a proporção da imagem.

## Interação visual

Os cards possuem uma interação discreta no estado `hover`, utilizando:

* elevação do card;
* aumento da sombra;
* pequeno deslocamento vertical;
* leve ampliação da imagem.

As transições utilizam os tokens definidos no Design System.

## Responsividade

A grade utiliza três breakpoints:

* acima de `1024px`: três colunas;
* até `1024px`: duas colunas;
* até `768px`: uma coluna.

Essa abordagem mantém a apresentação adequada em desktops, tablets e dispositivos móveis.

## Acessibilidade

Cada imagem possui um atributo `alt` descritivo.

O indicador visual utilizado na interface não transmite informação adicional e, por isso, pode ser ocultado de tecnologias assistivas quando necessário.

A estrutura semântica utiliza:

* `section`;
* `article`;
* `h2`;
* `h3`;
* `p`.

A hierarquia de títulos segue o padrão:

```text
h2
└── h3
```

## Testes

A feature possui testes para validar:

* identificação da seção;
* título principal;
* descrição;
* renderização da imagem;
* texto alternativo da imagem;
* título do card;
* existência do identificador `#galeria`.

## Integração

A Galeria foi adicionada à página principal após Certificações:

```tsx
<Certificacoes />
<Galeria />
```

A composição atual da página segue a ordem definida para o portfólio:

```text
Hero
Sobre
Habilidades
Formação
Experiência
Certificações
Galeria
```

## Princípios aplicados

A implementação mantém os princípios adotados nas features anteriores:

* separação de responsabilidades;
* composição de componentes;
* reutilização dos fragments;
* CSS Modules;
* organização por feature;
* HTML semântico;
* acessibilidade;
* responsividade;
* testes automatizados;
* utilização dos recursos nativos do Next.js.

## Evolução futura

Quando as fotos oficiais forem disponibilizadas, a coleção `gallery` poderá receber:

* fotos individuais da Erline;
* treinamentos com alunos;
* academias onde atuou;
* atividades profissionais;
* descrições específicas para cada imagem.

A estrutura da feature não precisará ser modificada para essas inclusões.

## Validação

A implementação foi validada através de:

```bash
npm test
npm run lint
npm run build
```

Todas as validações foram executadas com sucesso.
