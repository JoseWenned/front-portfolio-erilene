# Docker — Frontend Erline

## Objetivo

O projeto utiliza Docker para padronizar a execução do frontend em um ambiente de produção, isolando a aplicação e suas dependências do ambiente local.

A imagem Docker foi configurada para executar a aplicação Next.js utilizando o modo `standalone`, permitindo uma imagem final contendo apenas os artefatos necessários para execução.

## Estratégia de construção

Foi adotado um **multi-stage build**, dividido em três etapas:

* `deps`: instalação das dependências do projeto;
* `builder`: compilação da aplicação Next.js;
* `runner`: execução da aplicação compilada em ambiente de produção.

Essa abordagem evita levar ferramentas e dependências desnecessárias para a imagem final.

## Configuração do Next.js

O projeto utiliza:

```ts
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

O modo `standalone` permite que o Next.js gere uma estrutura otimizada para execução independente, adequada para utilização em containers.

## Imagem base

A imagem utiliza:

```dockerfile
node:22-alpine
```

A variante Alpine foi escolhida por ser uma distribuição Linux compacta, reduzindo o tamanho da imagem em comparação com imagens mais completas.

## Execução como usuário não-root

O container de produção cria um usuário específico para executar a aplicação:

```dockerfile
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs
```

A aplicação é executada com:

```dockerfile
USER nextjs
```

Essa decisão reduz privilégios do processo da aplicação dentro do container e segue uma prática de segurança para ambientes de produção.

## Dockerfile

O Dockerfile utiliza a seguinte estratégia:

```dockerfile
FROM node:22-alpine AS base

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

## `.dockerignore`

Foi criado um `.dockerignore` para evitar o envio de arquivos desnecessários ao contexto de build:

```dockerignore
node_modules
.next
.git
.gitignore
Dockerfile
docker-compose.yml
npm-debug.log*
coverage
.env
.env.local
.env*.local
```

Essa configuração evita copiar dependências instaladas localmente, artefatos de build, informações do Git, arquivos de ambiente e outros arquivos que não são necessários para a construção da imagem.

Durante o primeiro build, o contexto enviado ao Docker estava em aproximadamente 772 MB. Após a criação do `.dockerignore`, o contexto passou a ser significativamente menor, tornando o processo mais eficiente.

## Construção da imagem

A imagem pode ser construída utilizando:

```bash
docker build -t erline-portfolio-frontend .
```

A construção da imagem foi validada com sucesso.

## Execução do container

A imagem foi executada localmente na porta `3000` para validar o funcionamento da aplicação.

A aplicação foi acessada através de:

```text
http://localhost:3000
```

O container iniciou corretamente e a aplicação Next.js foi disponibilizada.

## Validação

Após a configuração do Docker, foram realizadas as seguintes validações:

```bash
npm run lint
npm test
npm run build
```

As três etapas foram executadas com sucesso.

Também foi validada a construção da imagem:

```bash
docker build -t erline-portfolio-frontend .
```

E a execução da aplicação dentro do container.

## Observação

Durante a construção da imagem, o Docker apresentou um aviso relacionado ao uso do **legacy builder** e à recomendação de utilização do BuildKit/buildx.

Esse aviso não impediu a construção ou execução da aplicação e não foi tratado como falha do projeto.
