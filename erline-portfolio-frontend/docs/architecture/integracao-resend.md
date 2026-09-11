# Integração com Resend

## Objetivo

Implementar o envio das mensagens submetidas pelo formulário de contato do portfólio por meio da API do Resend.

A integração é realizada no próprio frontend através de um Route Handler do Next.js, mantendo a chave da API exclusivamente no ambiente do servidor.

## Fluxo

```text
Visitante
   ↓
Formulário de contato
   ↓
Next.js — /api/contato
   ↓
Resend API
   ↓
E-mail configurado em CONTACT_EMAIL_TO