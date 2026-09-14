# Integração Frontend com API

## Objetivo

Estabelecer a arquitetura responsável pela comunicação do frontend com a API REST do portfólio, mantendo a interface de apresentação desacoplada dos detalhes de comunicação HTTP.

A integração será implementada utilizando uma estrutura baseada em Clean Architecture, separando domínio, aplicação e infraestrutura.

## Estrutura

```text
src/
├── core/
│   ├── domain/
│   │   ├── entities/
│   │   └── repositories/
│   ├── application/
│   │   ├── DTO/
│   │   └── useCases/
│   └── infrastructure/
│       ├── api/
│       └── repositories/
│
├── features/
│   └── Depoimento/
│
└── infrastructure/
    └── api.ts
```

## Responsabilidade das camadas

### Domain

Representa as regras e os conceitos fundamentais do domínio consumido pelo frontend.

Nesta camada ficam:

* entidades;
* contratos de repositórios;
* tipos relacionados ao domínio.

A camada de domínio não deve possuir dependência de:

* React;
* Next.js;
* `fetch`;
* HTTP;
* infraestrutura;
* componentes visuais.

### Application

Representa os casos de uso executados pela aplicação.

Nesta camada ficam:

* use cases;
* DTOs de entrada e saída;
* orquestração das operações do domínio.

Os casos de uso dependem dos contratos definidos no domínio, e não das implementações concretas dos repositórios.

### Infrastructure

Contém as implementações responsáveis pela comunicação com sistemas externos.

Nesta camada ficam:

* cliente HTTP;
* implementação dos repositórios;
* adaptação entre API e domínio.

A infraestrutura conhece os detalhes da API REST.

### Features

As features permanecem responsáveis pela apresentação e interação com o usuário.

A feature `Depoimento` não deve conhecer diretamente os detalhes de HTTP.

O fluxo esperado é:

```text
Feature
   ↓
Application Use Case
   ↓
Domain Repository
   ↑
Infrastructure Repository
   ↓
HTTP API
   ↓
Spring Boot
```

## Contrato de Depoimento

O backend disponibiliza os seguintes dados para um depoimento:

```text
id
nome
comentario
nota
fotoUrl
status
createdAt
updatedAt
```

A criação de um depoimento utiliza:

```text
nome
comentario
nota
fotoUrl
```

O backend define que um novo depoimento inicia com status `PENDENTE`.

Os status existentes são:

```text
PENDENTE
APROVADO
REJEITADO
```

A API pública de listagem utiliza:

```http
GET /api/depoimentos
```

e retorna uma lista de depoimentos aprovados.

A criação utiliza:

```http
POST /api/depoimentos
```

e não exige autenticação.

As operações de aprovação e rejeição são administrativas e exigem autenticação:

```http
PATCH /api/depoimentos/{id}/aprovar
PATCH /api/depoimentos/{id}/rejeitar
```

Essas operações não fazem parte da primeira integração pública do frontend.

## Princípio de dependência

O domínio não deve depender da infraestrutura.

A dependência deve apontar para abstrações:

```text
Application → Domain
Infrastructure → Domain
Feature → Application
```

A implementação concreta do repositório fica na infraestrutura, enquanto seu contrato permanece no domínio.

Dessa forma, a aplicação pode substituir a implementação HTTP sem alterar as regras do domínio ou os componentes de apresentação.

## API Base

A variável:

```text
NEXT_PUBLIC_API_URL
```

define a URL base da API.

A configuração existente em:

```text
src/infrastructure/api.ts
```

permanece responsável somente pela configuração base da API.

A comunicação específica com `Depoimento` será implementada posteriormente na infraestrutura, evitando transformar o arquivo de configuração em um repositório ou conjunto de chamadas específicas.

## Escopo da FRONT-013.1

A primeira etapa da integração contempla somente:

* entidade `Depoimento`;
* enum/status do depoimento;
* contrato `DepoimentoRepository`;
* testes do domínio;
* documentação arquitetural.

Não fazem parte desta etapa:

* `fetch`;
* chamadas HTTP;
* DTOs de API;
* use cases;
* integração com componentes React;
* autenticação administrativa.

Esses elementos serão implementados nas etapas seguintes da FRONT-013.
