Some server configurations for a AWS EC2 machine using Docker containers, NGINX as front server and Node.js as back server.

Configuration 1 - Just NGINX as front server.

Endpoints:
- "/" (port 80)

Configuration 2 - NGINX as a front server and Node.js as a back server.

Endpoints:
- "/" (port 80)
- "/api" (port 3000)

Configuration 3 - NGINX as a front server AND reverse proxy for a Node.js-based back server.

Endpoints:
- "/" (port 80)
- "/api" (port 80)

Configuration 4 - NGINX as a front server AND reverse proxy and load balancer for multiple Node.js-based back servers.

Endpoints:
- "/" (port 80)
- "/api" (port 80)