# Caching Proxy | Roadmap.sh Projectlink

A simple CLI tool that starts a caching proxy server. It forwards requests to the actual server and caches the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the origin server, improving performance by reducing the number of requests sent to the origin server.

PROJECT URL: https://roadmap.sh/projects/caching-server

## Features

- **Caching**: Automatically caches responses from the origin server to reduce request load.
- **Cache Headers**: Adds `X-Cache` header to indicate whether the response is from the cache (`HIT`) or from the origin server (`MISS`).
- **Port and Origin Configuration**: Easily configurable via command-line arguments.
- **Clear Cache**: Option to clear the cached responses from the server.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/BorrachaFox/Caching-Proxy.git
cd caching-proxy
```
2. Install the necessary dependencies and build the project:

```bash
npm install

npm run build
```

3. (Optional) Link the CLI tool globally so you can use it directly from the command line:
```
npm link
```

## Usando Docker Compose
Para facilitar o processo de configuração do Redis, o projeto usa o Docker Compose. Para rodar o Redis e o servidor proxy juntos, basta executar o comando abaixo:

Subir os serviços com Docker Compose:

```
docker-compose up
```
O comando ```docker-compose up``` irá iniciar o Redis e o servidor proxy no ambiente configurado.

## Usage
You can start the caching proxy server with the following command:
```
caching-proxy --port <port_number> --origin <origin_url>
```

- --port <port_number>: The port on which the caching proxy server will run (e.g., 3000).
- --origin <origin_url>: The URL of the origin server to which the requests will be forwarded (e.g., http://dummyjson.com).

## Command-Line Options
- ```-p, --port <number>```: The port on which the caching proxy server will run.
- ```-o, --origin <url>```: The URL of the origin server to which the requests will be forwarded.
- ```-c, --clear-cache```: Clear the cached responses from the server.

### Example Command
Start the proxy server and cache responses from the origin server:
```
caching-proxy --port 3000 --origin [<origin_url>](http://dummyjson.com)
```
Clear the cache:
```
caching-proxy --clear-cache
```
