# Design System

## 1. Objetivo

O Design System inicial do portfólio da Erline foi criado para estabelecer uma base visual consistente e reutilizável para o desenvolvimento das próximas seções da aplicação.

A implementação concentra tokens de design e componentes genéricos que podem ser reutilizados em diferentes partes da aplicação, evitando duplicação de estilos e mantendo consistência visual.

## 2. Tokens de design

Os tokens estão centralizados em `src/styles/` e são disponibilizados por meio de variáveis CSS.

### 2.1 Cores

A identidade visual utiliza o azul-claro como cor principal, complementado por tons neutros e uma cor de destaque.

Principais tokens:

* `--color-primary`
* `--color-primary-dark`
* `--color-background`
* `--color-surface`
* `--color-text`
* `--color-text-muted`
* `--color-border`
* `--color-accent`

### 2.2 Tipografia

A aplicação utiliza a família **Inter**, carregada por meio do `next/font/google`.

Os tokens tipográficos estão definidos em `src/styles/_typography.scss`, incluindo:

* tamanhos de fonte;
* pesos;
* alturas de linha.

A variável `--font-family-base` centraliza a família tipográfica utilizada pela aplicação.

### 2.3 Espaçamentos

Os espaçamentos são definidos por tokens para manter uma escala consistente:

* `--spacing-xs`
* `--spacing-sm`
* `--spacing-md`
* `--spacing-lg`
* `--spacing-xl`
* `--spacing-2xl`
* `--spacing-3xl`

### 2.4 Bordas e sombras

Foram definidos tokens para:

* raios de borda;
* sombras de diferentes níveis.

Isso permite que componentes compartilhem os mesmos padrões visuais sem repetir valores diretamente nos estilos.

### 2.5 Transições

As transições também são centralizadas por tokens:

* `--transition-fast`
* `--transition-normal`
* `--transition-slow`

### 2.6 Breakpoints

Foram definidos breakpoints para orientar a construção responsiva:

* `--breakpoint-sm`
* `--breakpoint-md`
* `--breakpoint-lg`
* `--breakpoint-xl`
* `--breakpoint-2xl`

## 3. Componentes reutilizáveis

Os componentes genéricos estão organizados em:

```text
src/components/fragments/
```

Essa camada representa pequenos elementos reutilizáveis da interface, sem conhecimento específico sobre as regras de negócio ou sobre uma seção específica do portfólio.

### 3.1 Button

Localização:

```text
src/components/fragments/Button/
```

Responsabilidade:

* fornecer um botão reutilizável;
* padronizar aparência e estados;
* suportar variantes visuais;
* aceitar propriedades nativas de `HTMLButtonElement`.

Variantes implementadas:

* `primary`;
* `secondary`.

O componente também possui estados de foco, desabilitado e interação.

### 3.2 Container

Localização:

```text
src/components/fragments/Container/
```

Responsabilidade:

* controlar a largura máxima do conteúdo;
* centralizar o conteúdo horizontalmente;
* fornecer espaçamento horizontal consistente.

O `Container` não controla o espaçamento vertical das seções.

### 3.3 Section

Localização:

```text
src/components/fragments/Section/
```

Responsabilidade:

* representar semanticamente uma seção da página;
* padronizar o espaçamento vertical entre as principais áreas do portfólio;
* aceitar propriedades nativas do elemento HTML `section`.

O `Section` não possui responsabilidade sobre a largura do conteúdo.

## 4. Separação de responsabilidades

Os componentes foram projetados com responsabilidades específicas:

```text
Section
   ↓
define o espaçamento vertical

Container
   ↓
define largura e espaçamento horizontal

Conteúdo
   ↓
define a interface específica da seção
```

Exemplo de composição:

```tsx
<Section>
  <Container>
    <h2>Sobre mim</h2>
  </Container>
</Section>
```

Essa separação permite reutilizar os componentes em diferentes seções sem criar dependências entre suas responsabilidades.

## 5. Organização dos estilos

Os componentes utilizam **CSS Modules**, mantendo os estilos isolados por componente.

Exemplo:

```text
Button/
├── Button.tsx
├── button.module.scss
└── Button.test.tsx
```

Essa abordagem evita conflitos de classes entre componentes e mantém a implementação visual próxima do componente ao qual pertence.

## 6. Testes

Cada fragmento reutilizável possui testes próprios.

Os testes verificam principalmente:

* renderização do conteúdo;
* aplicação das classes;
* variantes;
* propriedades nativas;
* estados relevantes;
* comportamento de interação quando aplicável.

Os testes utilizam **Vitest** e **React Testing Library**.

## 7. Princípios adotados

Durante a implementação foram considerados os seguintes princípios:

* reutilização;
* separação de responsabilidades;
* composição de componentes;
* acessibilidade básica;
* tipagem com TypeScript;
* isolamento de estilos;
* evitar abstrações prematuras;
* manutenção de uma estrutura simples e evolutiva.

O Design System inicial não busca antecipar todos os componentes que serão necessários no projeto. Novos fragmentos devem ser criados conforme necessidades reais surgirem durante o desenvolvimento.

## 8. Estrutura resultante

```text
src/
├── components/
│   └── fragments/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── button.module.scss
│       │   └── Button.test.tsx
│       │
│       ├── Container/
│       │   ├── Container.tsx
│       │   ├── container.module.scss
│       │   └── container.test.tsx
│       │
│       └── Section/
│           ├── Section.tsx
│           ├── section.module.scss
│           └── section.test.tsx
│
└── styles/
    ├── _variables.scss
    └── _typography.scss
```

## 9. Resultado

O FRONT-002 estabelece a base visual e os componentes genéricos necessários para iniciar a construção do layout global da aplicação.

As próximas funcionalidades devem utilizar esses tokens e componentes sempre que suas responsabilidades forem compatíveis, mantendo a consistência visual e evitando duplicação de estilos.
