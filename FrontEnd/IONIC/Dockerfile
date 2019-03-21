FROM ubuntu:latest
WORKDIR /app

RUN apt-get update && \
    apt-get install nodejs npm ssh git -y && \
    npm install -g ionic 

EXPOSE 8100