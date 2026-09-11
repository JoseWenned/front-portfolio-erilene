# Seção de Contato

## Objetivo

A seção de contato permite que visitantes do portfólio enviem uma mensagem para Erline através de um formulário.

A implementação inicial da seção contempla a estrutura visual e semântica do formulário, preparando a interface para a futura integração com um serviço externo de envio de e-mails.

## Estrutura

A seção é organizada em duas áreas principais:

- informações de contato;
- formulário para envio de mensagem.

### Informações de contato

A seção apresenta informações relacionadas aos canais de contato da profissional:

- WhatsApp;
- Instagram;
- informações sobre atendimento.

Os links reais serão configurados posteriormente, após o recebimento dos dados definitivos da cliente.

### Formulário

O formulário contém os seguintes campos:

- Nome;
- E-mail;
- Mensagem.

Os campos possuem labels associados e utilizam elementos HTML semânticos apropriados.

## Integração futura

O envio das mensagens será realizado através da API externa do Resend.

A arquitetura planejada será:

```text
Visitante
    ↓
Formulário de contato
    ↓
Next.js API Route
    ↓
Resend API
    ↓
E-mail da Erline