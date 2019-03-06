FROM alpine
WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --update nodejs && \
    apk add --update npm && \
    npm install cordova && \
    npm install ionic && \
    npm cache clear --force 

EXPOSE 8100