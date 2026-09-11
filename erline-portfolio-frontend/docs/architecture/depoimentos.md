# Depoimentos

## 1. Objetivo

A feature `Depoimentos` apresenta relatos de clientes sobre a experiência com o trabalho da Erline e disponibiliza uma interface para que novos depoimentos possam ser enviados.

Nesta primeira implementação, a funcionalidade possui caráter exclusivamente visual. Os depoimentos apresentados são dados locais temporários e o formulário ainda não possui integração com a API.

A integração com o backend será realizada posteriormente na etapa `FRONT-013 — Integração API`.

---

## 2. Localização

A feature está localizada em:

```text
src/features/Depoimentos/
├── Depoimentos.feature.tsx
├── depoimentos.module.scss
└── Depoimentos.test.tsx
```

---

## 3. Responsabilidades

A feature é responsável por:

* apresentar a seção de depoimentos;
* exibir depoimentos disponíveis;
* apresentar nome e texto do depoimento;
* disponibilizar formulário para envio de novos depoimentos;
* estruturar semanticamente os campos do formulário;
* manter o layout responsivo;
* fornecer uma base preparada para futura integração com a API.

A feature **não é responsável atualmente por**:

* realizar requisições HTTP;
* persistir depoimentos;
* validar dados no backend;
* realizar aprovação ou rejeição de depoimentos;
* realizar upload de imagens;
* controlar estado de envio;
* tratar respostas da API.

Essas responsabilidades serão adicionadas em etapas posteriores.

---

## 4. Estrutura da interface

A seção é dividida em duas áreas principais:

```text
Depoimentos
│
├── Cabeçalho
│   ├── Identificação da seção
│   ├── Título
│   └── Descrição
│
├── Depoimentos
│   ├── Depoimento
│   └── Depoimento
│
└── Formulário
    ├── Nome
    ├── Depoimento
    └── Enviar depoimento
```

Em telas maiores, os depoimentos e o formulário são apresentados lado a lado.

Em telas menores, o layout passa a utilizar uma única coluna.

---

## 5. Dados temporários

Nesta etapa os depoimentos são definidos localmente no componente:

```tsx
const testimonials = [
  {
    name: "Cliente",
    text: "Excelente acompanhamento e atenção durante os treinos.",
  },
  {
    name: "Cliente",
    text: "Profissional dedicada, atenciosa e comprometida com os resultados.",
  },
];
```

Esses dados possuem finalidade exclusivamente demonstrativa.

Não devem ser interpretados como depoimentos reais de clientes.

Posteriormente, esses dados serão substituídos pelos registros retornados pela API.

---

## 6. Formulário

O formulário possui atualmente dois campos:

* `Nome`
* `Depoimento`

Além disso, possui o botão:

```text
Enviar depoimento
```

Os campos utilizam elementos HTML semanticamente apropriados:

```html
<label>
<input>
<textarea>
<button>
```

A associação entre os `label` e seus respectivos campos é realizada através dos atributos `htmlFor` e `id`.

---

## 7. Integração com backend

A integração com o backend foi deliberadamente adiada.

Nesta etapa não existe:

```text
fetch
axios
POST
GET
onSubmit
```

Essa decisão mantém a feature de apresentação desacoplada da infraestrutura externa.

A futura integração deverá seguir o fluxo:

```text
Formulário
    ↓
Camada de integração
    ↓
API
    ↓
Backend
    ↓
Banco de dados
```

Para a leitura dos depoimentos:

```text
API
    ↓
Frontend
    ↓
Depoimentos aprovados
    ↓
Interface
```

Apenas depoimentos aprovados deverão ser apresentados publicamente quando a regra de moderação estiver implementada.

---

## 8. Possível evolução

A feature poderá evoluir posteriormente para suportar:

* envio real de depoimentos;
* estados de carregamento;
* mensagens de sucesso;
* mensagens de erro;
* validação dos campos;
* integração com API;
* fotos enviadas pelos clientes;
* aprovação ou rejeição dos depoimentos;
* paginação ou carregamento progressivo;
* atualização automática da lista.

Essas funcionalidades não fazem parte do escopo atual.

---

## 9. Responsividade

O layout utiliza CSS Grid.

Em telas maiores:

```text
┌───────────────────────────┬──────────────────┐
│                           │                  │
│      Depoimentos          │    Formulário    │
│                           │                  │
└───────────────────────────┴──────────────────┘
```

Em telas menores:

```text
┌───────────────────────────┐
│       Depoimentos         │
├───────────────────────────┤
│       Formulário          │
└───────────────────────────┘
```

A mudança ocorre através de media query em `768px`.

---

## 10. Acessibilidade

A implementação utiliza elementos semânticos e associações adequadas entre labels e campos.

Os depoimentos utilizam:

```html
<blockquote>
```

para representar semanticamente o conteúdo citado.

O formulário utiliza:

```html
<form>
```

e cada campo possui um `label` associado.

Os testes também utilizam queries orientadas à acessibilidade, como:

```tsx
screen.getByLabelText("Nome")
```

e:

```tsx
screen.getByRole("button", {
  name: "Enviar depoimento",
})
```

Isso ajuda a garantir que a interface seja identificável por tecnologias assistivas e que os testes validem o comportamento do usuário em vez de depender exclusivamente da estrutura interna do DOM.

---

## 11. Testes

A feature possui testes para:

* identificação da seção;
* título;
* depoimentos;
* formulário;
* campo de nome;
* campo de depoimento;
* botão de envio;
* identificação da seção através do `id`.

Arquivo:

```text
src/features/Depoimentos/Depoimentos.test.tsx
```

Os testes utilizam:

* Vitest;
* React Testing Library;
* queries semânticas e orientadas à acessibilidade.

---

## 12. Composição na página

A feature é adicionada à página principal:

```tsx
import { Depoimentos } from "../features/Depoimentos/Depoimentos.feature";
```

e composta após a galeria:

```tsx
<Certificacoes />
<Galeria />
<Depoimentos />
```

A página mantém a responsabilidade de composição das features, enquanto cada feature permanece responsável apenas pelo seu próprio conteúdo.

---

## 13. Princípios aplicados

A implementação segue os princípios definidos anteriormente no projeto:

### Separação de responsabilidades

A feature concentra apenas as responsabilidades relacionadas aos depoimentos.

### Componentização

Elementos genéricos continuam sendo reutilizados através dos fragments existentes:

```text
Container
Section
```

### Baixo acoplamento

A feature não possui dependência direta da API nesta etapa.

### Responsividade

O layout adapta sua estrutura para diferentes tamanhos de tela.

### Acessibilidade

São utilizados elementos HTML semânticos e labels associados aos campos.

### Evolução incremental

A implementação atual cria a interface antes da integração com infraestrutura externa.

Isso permite validar a experiência visual e o contrato da interface antes de introduzir complexidade de comunicação com o backend.

---

## 14. Próxima evolução

A próxima responsabilidade relacionada diretamente aos dados dos depoimentos será tratada em:

```text
FRONT-013 — Integração API
```

Nesse momento, os dados locais serão substituídos por dados provenientes do backend e o formulário poderá realizar o envio real de depoimentos.

A regra de aprovação/moderação deverá permanecer como responsabilidade do backend.
