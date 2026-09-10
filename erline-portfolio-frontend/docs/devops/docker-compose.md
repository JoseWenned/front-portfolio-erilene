# Docker Compose — Frontend Erline

## Objetivo

O Docker Compose é utilizado para facilitar a execução local do frontend em container, centralizando a configuração necessária para iniciar a aplicação.

A configuração atual possui um serviço responsável pela execução do frontend Next.js.

## Serviço

O serviço foi denominado:

```yaml
frontend
```

A imagem é construída diretamente a partir do `Dockerfile` do projeto:

```yaml
build:
  context: .
  dockerfile: Dockerfile
```

Isso permite que o ambiente seja reproduzido utilizando apenas os arquivos versionados no projeto.

## Configuração atual

O arquivo `docker-compose.yml` possui a seguinte configuração:

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: erline-portfolio-frontend
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_API_URL: http://localhost:8080
      HOSTNAME: 0.0.0.0
    restart: unless-stopped
```

## Porta da aplicação

A porta interna utilizada pelo Next.js é:

```text
3000
```

A porta é publicada no host através de:

```yaml
ports:
  - "3000:3000"
```

Dessa forma, a aplicação pode ser acessada localmente através de:

```text
http://localhost:3000
```

## Variáveis de ambiente

O Compose define as variáveis necessárias para execução da aplicação:

```yaml
environment:
  NODE_ENV: production
  NEXT_PUBLIC_API_URL: http://localhost:8080
  HOSTNAME: 0.0.0.0
```

### `NODE_ENV`

Define a execução da aplicação como ambiente de produção.

### `NEXT_PUBLIC_API_URL`

Define a URL utilizada pelo frontend para comunicação com a API.

No ambiente local atual:

```text
http://localhost:8080
```

Essa configuração corresponde à porta utilizada pelo backend durante o desenvolvimento local.

### `HOSTNAME`

O Next.js standalone precisa estar configurado para aceitar conexões vindas da interface de rede do container.

Foi utilizado:

```yaml
HOSTNAME: 0.0.0.0
```

Isso permite que o servidor escute em todas as interfaces de rede disponíveis no container, possibilitando o acesso através da porta publicada pelo Docker.

## Problema encontrado durante a execução

Na primeira tentativa de execução utilizando Docker Compose, o container iniciou, mas o servidor Next.js não conseguiu resolver o hostname atribuído ao container.

O erro apresentado foi:

```text
Failed to start server
Error: getaddrinfo EAI_AGAIN d12f057526ed
hostname: 'd12f057526ed'
```

O problema estava relacionado à resolução do hostname utilizado pelo processo do servidor dentro do ambiente Docker.

## Solução

Foi adicionada explicitamente a variável:

```yaml
HOSTNAME: 0.0.0.0
```

Após a alteração, o ambiente foi recriado utilizando:

```bash
docker compose down
docker compose up --build
```

A aplicação iniciou corretamente e ficou disponível em:

```text
http://localhost:3000
```

## Conflito de porta durante o desenvolvimento

Antes da utilização do Docker Compose, havia um container iniciado manualmente utilizando a porta `3000`.

Ao tentar iniciar o Compose, ocorreu:

```text
Bind for 0.0.0.0:3000 failed: port is already allocated
```

O problema foi causado pela existência de outro container utilizando a mesma porta no host.

O container anterior foi interrompido e, após liberar a porta `3000`, o Docker Compose conseguiu iniciar normalmente.

## Política de reinício

Foi configurado:

```yaml
restart: unless-stopped
```

Essa configuração permite que o container seja reiniciado automaticamente em situações como uma falha do processo, mantendo a aplicação disponível enquanto o serviço estiver habilitado.

## Execução

Para iniciar o ambiente:

```bash
docker compose up --build
```

Para executar em segundo plano:

```bash
docker compose up --build -d
```

Para interromper os serviços:

```bash
docker compose down
```

## Validação

A execução do ambiente foi validada com sucesso através do Docker Compose.

Após a inicialização, a aplicação foi acessada através de:

```text
http://localhost:3000
```

O frontend Next.js foi carregado corretamente dentro do container.

Também foram mantidas as validações da aplicação:

```bash
npm run lint
npm test
npm run build
```

Todas foram executadas com sucesso.

## Decisão

O Docker Compose foi adotado neste estágio principalmente para padronizar a execução local do frontend e facilitar a integração futura com o backend.

A configuração atual mantém o frontend isolado em seu próprio serviço, permitindo que outros serviços sejam adicionados posteriormente sem alterar a responsabilidade do container do frontend.
