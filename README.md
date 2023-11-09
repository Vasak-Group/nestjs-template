<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://bun.sh/" target="blank"><img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">Template de repositorio para servicios en <a href="https://nestjs.com/" target="blank">NestJS</a> y <a href="https://bun.sh/" target="blank">bun</a> creado por <a href='https://vasak.net.ar' target='_blank'>Vasak Group</a>. Contiene Swagger, Fastify, Jest, compression, Dockerfiles y CORS preconfigurados.</p>


## Description

Repositorio utilizado como template para proyectos con [Nest](https://github.com/nestjs/nest) framework desarrollado en TypeScript. Este template incluye las siguientes características:

- NestJS
- Bun
- Fastify
- Swagger
- Jest
- Compression
- CORS
- Dockerfile

## Instalacion

Instalacion de dependencias del proyecto

### Node (yarn)

```bash
yarn install
```

### Bun

```bash
bun install
```

## Ejecucion

Distintos metodos para ejecutar la aplicacion ya sea que estes usando NodeJS o Bun

### NodeJS (yarn)

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

### Bun

```bash
# development
bun run start:bun

# watch mode
bun run start:dev:bun

# production mode
bun run start:prod:bun
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

