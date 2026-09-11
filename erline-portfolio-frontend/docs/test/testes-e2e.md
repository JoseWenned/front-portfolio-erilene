# Testes End-to-End (E2E)

## 1. Objetivo

Este documento descreve a estratégia de testes End-to-End (E2E) adotada no frontend do portfólio da Erline.

Os testes E2E têm como objetivo validar o comportamento da aplicação a partir da perspectiva do usuário, garantindo que os principais fluxos da interface funcionem corretamente de ponta a ponta.

A ferramenta escolhida para essa finalidade foi o **Playwright**.

---

## 2. Motivação

Os testes unitários e de integração já existentes validam partes específicas da aplicação.

Entretanto, esses testes não garantem completamente que:

* a página consiga ser carregada corretamente;
* os elementos estejam disponíveis na interface;
* o usuário consiga interagir com o formulário;
* o formulário envie a requisição esperada;
* a aplicação trate corretamente respostas de sucesso;
* a aplicação trate corretamente respostas de erro;
* as validações nativas do navegador sejam respeitadas.

Os testes E2E complementam essas camadas validando o fluxo completo pela interface.

---

## 3. Ferramenta escolhida

A ferramenta utilizada é o **Playwright**.

Principais motivos da escolha:

* suporte a aplicações modernas;
* integração com Next.js;
* execução em navegadores reais;
* API de testes baseada em interações do usuário;
* suporte a interceptação e mock de requisições;
* possibilidade de execução em ambiente CI/CD;
* geração de traces para investigação de falhas.

O navegador utilizado inicialmente no projeto é o **Chromium**.

---

## 4. Estrutura

Os testes E2E ficam separados dos testes unitários e de integração:

```text
tests/
└── e2e/
    └── contato.spec.ts
```

Essa separação evita misturar responsabilidades entre as diferentes camadas de testes.

A estrutura geral do projeto de testes é:

```text
src/
├── ...
├── app/
│   └── api/
│       └── contato/
│           ├── route.ts
│           ├── route.test.ts
│           └── route.integration.test.ts
└── test/
    └── setup.ts

tests/
└── e2e/
    └── contato.spec.ts
```

### Responsabilidade de cada camada

| Tipo       | Localização                    | Objetivo                                      |
| ---------- | ------------------------------ | --------------------------------------------- |
| Unitário   | `src/**/*.test.ts(x)`          | Validar unidades isoladas                     |
| Integração | `src/**/*.integration.test.ts` | Validar integração real com serviços externos |
| E2E        | `tests/e2e/**`                 | Validar fluxos completos pela interface       |

---

## 5. Configuração do Playwright

O Playwright utiliza o arquivo:

```text
playwright.config.ts
```

Configuração atual:

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",

  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "on-first-retry",
  },

  webServer: {
    command: "npm run dev -- --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: !process.env.CI,
  },
});
```

### `testDir`

Define o diretório responsável pelos testes E2E:

```text
tests/e2e
```

### `baseURL`

Define a URL utilizada pelos testes:

```text
http://127.0.0.1:3100
```

Dessa forma, os testes podem utilizar:

```ts
await page.goto("/");
```

em vez de repetir a URL completa.

### `webServer`

O Playwright inicia automaticamente o servidor Next.js antes da execução dos testes:

```bash
npm run dev -- --port 3100
```

Essa abordagem evita depender de um servidor iniciado manualmente.

---

## 6. Separação entre Vitest e Playwright

O projeto utiliza duas ferramentas com responsabilidades diferentes:

* **Vitest** para testes unitários e de integração;
* **Playwright** para testes E2E.

Para impedir que o Vitest tente executar arquivos do Playwright, o `vitest.config.ts` exclui o diretório:

```ts
exclude: [
  "tests/e2e/**",
  "src/**/*.integration.test.ts",
],
```

Os testes de integração também são separados porque utilizam uma configuração específica:

```text
vitest.integration.config.ts
```

Essa configuração carrega as variáveis de ambiente necessárias para a integração real com o Resend.

---

## 7. Fluxo testado

O primeiro fluxo E2E implementado é o formulário de contato.

Fluxo:

```text
Usuário
   ↓
Acessa a página
   ↓
Localiza formulário de contato
   ↓
Preenche nome
   ↓
Preenche e-mail
   ↓
Preenche mensagem
   ↓
Envia formulário
   ↓
POST /api/contato
   ↓
Aplicação processa resposta
   ↓
Exibe feedback ao usuário
```

---

## 8. Cenário de sucesso

O primeiro cenário valida o envio bem-sucedido do formulário.

O teste:

1. acessa a página;
2. intercepta a requisição para `/api/contato`;
3. simula uma resposta HTTP `200`;
4. preenche os campos;
5. envia o formulário;
6. valida a resposta HTTP;
7. valida a mensagem exibida na interface.

A resposta da API é simulada:

```json
{
  "message": "Mensagem enviada com sucesso.",
  "id": "e2e-test-id"
}
```

A interface deve apresentar:

```text
Mensagem enviada com sucesso! Em breve entraremos em contato.
```

---

## 9. Cenário de erro

O segundo cenário valida o comportamento quando a API retorna erro.

A requisição para:

```text
POST /api/contato
```

é simulada com:

```text
HTTP 500
```

O teste verifica se a interface apresenta:

```text
Não foi possível enviar sua mensagem. Tente novamente.
```

O elemento é localizado dentro da seção de contato:

```ts
page.locator("#contato").getByRole("alert")
```

Essa restrição de escopo é importante porque o Next.js pode possuir outros elementos com `role="alert"` na página.

---

## 10. Validação de campos obrigatórios

O formulário utiliza a validação nativa do HTML:

```html
required
```

Os campos obrigatórios são:

* nome;
* e-mail;
* mensagem.

O teste E2E verifica que o formulário não deve realizar a requisição quando os campos obrigatórios estiverem vazios.

Essa validação complementa os testes da API, pois verifica o comportamento diretamente na interface.

---

## 11. Mock da API no E2E

Os testes E2E não utilizam o Resend real.

A requisição:

```text
/api/contato
```

é interceptada pelo Playwright.

Exemplo:

```ts
await page.route("**/api/contato", async (route) => {
  await route.fulfill({
    status: 200,
    contentType: "application/json",
    body: JSON.stringify({
      message: "Mensagem enviada com sucesso.",
      id: "e2e-test-id",
    }),
  });
});
```

Essa decisão é intencional.

### Motivos

Os testes E2E devem validar o comportamento da aplicação sem depender de um serviço externo.

Isso proporciona:

* execução determinística;
* maior velocidade;
* ausência de consumo desnecessário da API do Resend;
* independência de credenciais;
* menor risco de envio de e-mails reais durante os testes;
* execução segura em CI/CD.

A integração real com o Resend permanece coberta pelo teste de integração do FRONT-014.

---

## 12. Relação entre as camadas

A estratégia adotada é:

```text
                 ┌──────────────────────┐
                 │       Vitest         │
                 └──────────┬───────────┘
                            │
              ┌─────────────┴─────────────┐
              ↓                           ↓
       Testes unitários            Testes integração
              │                           │
              ↓                           ↓
       Código isolado               Resend real
                                          
                 ┌──────────────────────┐
                 │      Playwright      │
                 └──────────┬───────────┘
                            ↓
                       Interface
                            ↓
                    API simulada
```

Cada camada possui uma responsabilidade específica.

---

## 13. Problema identificado durante a implementação

Durante a implementação do teste de sucesso foi identificado um problema relacionado ao acesso ao `currentTarget` após uma operação assíncrona.

A implementação original utilizava diretamente:

```ts
event.currentTarget.reset();
```

depois de um `await`.

Isso causou comportamento inconsistente durante o teste E2E.

A implementação foi ajustada para preservar a referência do formulário antes da operação assíncrona:

```ts
const form = event.currentTarget;
```

Posteriormente:

```ts
const formData = new FormData(form);
```

e:

```ts
form.reset();
```

Essa alteração tornou o fluxo assíncrono mais previsível e permitiu que o teste E2E validasse corretamente a mensagem de sucesso.

---

## 14. Servidor de desenvolvimento

Durante a implementação foi identificado que executar manualmente outro servidor Next.js poderia causar conflito com o lock do diretório `.next/dev`.

A configuração final utiliza o `webServer` do Playwright para controlar o ciclo de vida do servidor.

Portanto, não é necessário executar manualmente:

```bash
npm run dev
```

antes de:

```bash
npm run test:e2e
```

O próprio Playwright inicializa a aplicação.

---

## 15. Validações

Os testes E2E são executados através de:

```bash
npm run test:e2e
```

Também estão disponíveis:

```bash
npm run test:e2e:ui
```

para execução através da interface visual do Playwright.

As demais camadas podem ser executadas com:

```bash
npm test
npm run test:integration
npm run lint
npm run build
```

---

## 16. Resultado

Com a implementação do FRONT-015, o frontend passa a possuir três níveis complementares de validação:

```text
Unitários
   ↓
Integração
   ↓
E2E
```

Essa estratégia aumenta a confiança na aplicação sem transformar os testes em uma única camada de responsabilidade.

Os testes E2E ficam responsáveis por garantir que os fluxos críticos da interface funcionem conforme esperado pelo usuário.
