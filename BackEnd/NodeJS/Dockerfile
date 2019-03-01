FROM alpine
WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --update nodejs && \
    apk add --update npm

EXPOSE 3000

#CMD ["node", "src/app.js"]