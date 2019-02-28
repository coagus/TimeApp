FROM alpine
WORKDIR /app
ADD . /app

RUN apk update && apk upgrade && \
    apk add --update nodejs

EXPOSE 3000

#CMD ["node", "src/app.js"]