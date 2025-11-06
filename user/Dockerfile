FROM ubuntu:22.04

RUN apt-get update && apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

RUN useradd -m dinesh

RUN mkdir -p /var/www/html /var/lib/nginx /var/log/nginx /run/nginx && \
    chown -R dinesh:dinesh /var/www/html /var/lib/nginx /var/log/nginx /run/nginx /etc/nginx

USER dinesh
WORKDIR /var/www/html

RUN echo "<h1>Hello from Docker container running as user: $(whoami)</h1>" > index.html

USER root
RUN sed -i 's/listen 80 default_server;/listen 8080 default_server;/' /etc/nginx/sites-enabled/default && \
    sed -i 's/listen \[::\]:80 default_server;/listen \[::\]:8080 default_server;/' /etc/nginx/sites-enabled/default && \
    sed -i 's|pid /run/nginx.pid;|pid /run/nginx/nginx.pid;|' /etc/nginx/nginx.conf && \
    chown -R dinesh:dinesh /etc/nginx /run/nginx

USER dinesh

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
