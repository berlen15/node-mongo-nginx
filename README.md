Some server configurations for a AWS EC2 machine using Docker containers, NGINX as front server and Node.js as back server.

Configuration 1 - Just NGINX as front server.

Endpoints:
- "/" (port 80)

How to deploy:
1) Install Docker Engine on AWS EC2 (or any) machine.
2) On the EC2 machine run:  sudo docker run -d -p 80:80 873271/configuration1:configuration1_nginx

Configuration 2 - NGINX as a front server and Node.js as a back server.

Endpoints:
- "/" (port 80)
- "/api" (port 3000)

How to deploy:
1) Install Docker Engine and docker-compose on AWS EC2 (or any) machine.
2) Copy docker-compose-prod.yml to the EC2 machine.
3) On the EC2 machine run:  sudo docker-compose -f docker-compose-prod.yml up -d

Configuration 3 - NGINX as a front server AND reverse proxy for a Node.js-based back server.

Endpoints:
- "/" (port 80)
- "/api" (port 80)

How to deploy:
1) Install Docker Engine and docker-compose on AWS EC2 (or any) machine.
2) Copy docker-compose-prod.yml to the EC2 machine.
3) On the EC2 machine run:  sudo docker-compose -f docker-compose-prod.yml up -d

Configuration 4 - NGINX as a front server AND reverse proxy and load balancer for multiple Node.js-based back servers.

Endpoints:
- "/" (port 80)
- "/api" (port 80)

How to deploy:
1) Install Docker Engine and docker-compose on AWS EC2 (or any) machine.
2) Copy docker-compose-prod.yml to the EC2 machine.
3) On the EC2 machine run:  sudo docker-compose -f docker-compose-prod.yml up -d