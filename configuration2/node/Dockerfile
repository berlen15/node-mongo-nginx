FROM node:alpine

WORKDIR /api

RUN apk update && apk add bash && rm -rf /var/cache/apk/*

COPY ./api .

EXPOSE 3000

CMD ["node","server.js"]
