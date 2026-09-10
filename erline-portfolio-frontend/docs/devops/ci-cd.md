# CI/CD

## Objetivo

O projeto utiliza **GitHub Actions** para executar um pipeline de Integração Contínua (CI), garantindo que alterações enviadas ao repositório sejam automaticamente verificadas antes de serem integradas às branches principais de desenvolvimento.

O pipeline é responsável por validar:

* instalação das dependências;
* qualidade do código através do ESLint;
* execução dos testes automatizados;
* geração da build de produção.

O objetivo é detectar problemas de qualidade, testes ou compilação antes da integração das alterações.

---

## Workflow

O workflow está localizado em:

```text
.github/workflows/ci.yml
```

O workflow é identificado pelo nome:

```text
CI
```

---

## Gatilhos

O pipeline é executado nos seguintes eventos:

### Push

Executado quando há um `push` nas branches:

```text
main
develop
```

### Pull Request

Executado quando um Pull Request tem como destino:

```text
main
develop
```

Dessa forma, alterações propostas para as branches principais passam pelas mesmas validações automatizadas.

---

## Ambiente de execução

O pipeline utiliza:

```text
Sistema operacional: Ubuntu
Node.js: 22
```

O ambiente é provisionado através do runner:

```text
ubuntu-latest
```

A configuração do Node.js é realizada utilizando a action oficial:

```text
actions/setup-node@v4
```

O cache do npm também é habilitado para otimizar a instalação das dependências.

---

## Etapas do pipeline

### 1. Checkout

O primeiro passo realiza o checkout do código-fonte utilizando:

```text
actions/checkout@v4
```

Isso disponibiliza o conteúdo do repositório no ambiente de execução do GitHub Actions.

---

### 2. Configuração do Node.js

O pipeline configura o Node.js na versão 22:

```text
node-version: 22
```

O cache do npm é habilitado para reduzir o tempo das execuções seguintes.

---

### 3. Instalação das dependências

As dependências são instaladas através de:

```bash
npm ci
```

O `npm ci` utiliza o `package-lock.json` para realizar uma instalação reproduzível das dependências declaradas no projeto.

---

### 4. Lint

O ESLint é executado através do script:

```bash
npm run lint
```

Essa etapa verifica problemas relacionados à qualidade e às regras de estilo do código.

Caso o lint falhe, o pipeline é interrompido.

---

### 5. Testes

Os testes automatizados são executados através de:

```bash
npm test
```

Essa etapa garante que as alterações realizadas não provoquem falhas nos testes existentes.

Caso algum teste falhe, o pipeline é considerado inválido.

---

### 6. Build

Por último, o projeto é compilado através de:

```bash
npm run build
```

Essa etapa verifica se a aplicação consegue ser construída corretamente para produção.

Problemas de compilação ou configuração impedem a conclusão bem-sucedida do pipeline.

---

## Fluxo de validação

O fluxo executado pelo CI é:

```text
Código
  ↓
Checkout
  ↓
Node.js 22
  ↓
npm ci
  ↓
Lint
  ↓
Testes
  ↓
Build
  ↓
CI aprovado
```

Se qualquer etapa falhar, o workflow é interrompido e o Pull Request não deve ser considerado pronto para integração.

---

## Relação com o fluxo Git

O CI faz parte do fluxo de desenvolvimento baseado em branches e Pull Requests.

Exemplo:

```text
feature/frontend-initial-setup
          │
          │ Pull Request
          ▼
        main
          │
          ▼
      GitHub Actions
          │
     ┌────┴────┐
     │         │
   sucesso    falha
     │         │
     ▼         ▼
   Merge     Corrigir
```

O pipeline permite validar automaticamente a branch antes da integração com `main` ou `develop`.

---

## Critérios de sucesso

Uma execução do CI é considerada bem-sucedida quando todas as seguintes etapas são concluídas sem erros:

* checkout do código;
* configuração do Node.js;
* instalação das dependências;
* lint;
* testes;
* build.

O objetivo é garantir que o código integrado ao projeto mantenha um nível mínimo de qualidade e esteja em condições de ser compilado.

---

## Manutenção

Alterações no processo de Integração Contínua devem ser realizadas no arquivo:

```text
.github/workflows/ci.yml
```

Sempre que novas ferramentas, comandos de validação ou etapas obrigatórias forem adicionados ao projeto, o pipeline e esta documentação devem ser atualizados em conjunto.
