FROM ubuntu:latest
WORKDIR /app

RUN apt-get update && \
    apt-get install nodejs -y && \
    apt-get install npm -y && \
    npm install -g ionic

EXPOSE 8100