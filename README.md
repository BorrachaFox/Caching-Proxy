# Caching Proxy | Roadmap.sh Project

A simple CLI tool that starts a caching proxy server. It forwards requests to the actual server and caches the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the origin server, improving performance by reducing the number of requests sent to the origin server.

## Tech Used

- **Docker**: Containerization of the caching proxy server and Redis for seamless deployment.
- **Redis**: Used for caching responses from the origin server.
- **Express**: Web framework for building the caching proxy server.
- **TypeScript**: Superset of JavaScript for type safety and enhanced development experience.

## Features

- **Caching**: The server caches responses and returns them for subsequent identical requests.
- **X-Cache Header**: The server adds an `X-Cache` header to responses:
  - `X-Cache: HIT` when the response is served from the cache.
  - `X-Cache: MISS` when the response is fetched from the origin server.
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

## Extras
This Repo serves as a solution to [Roadmap.sh Caching Server Problem](https://roadmap.sh/projects/caching-server)
