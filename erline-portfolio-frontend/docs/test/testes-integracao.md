# Testes de Integração

## 1. Objetivo

Os testes de integração do frontend têm como objetivo validar o comportamento da aplicação quando seus componentes se comunicam com serviços externos reais.

No contexto do projeto, o principal cenário de integração é o envio do formulário de contato através da API Route do Next.js e da API do Resend.

A implementação possui três níveis complementares de validação:

- Testes unitários: validam a API Route de forma isolada, utilizando mocks.
- Testes de integração: validam a API Route utilizando o Resend real.
- Testes E2E: validam o fluxo completo realizado pelo usuário através da interface.

---

## 2. Arquitetura do fluxo de contato

O fluxo de contato implementado no frontend segue a seguinte arquitetura:

```text
Usuário
   ↓
Formulário de contato
   ↓
POST /api/contato
   ↓
Next.js Route Handler
   ↓
Resend API
   ↓
E-mail configurado em CONTACT_EMAIL_TO