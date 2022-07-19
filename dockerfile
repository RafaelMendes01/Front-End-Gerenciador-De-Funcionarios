
FROM node:16-alpine

USER root

WORKDIR /usr/front-end-sistema-gerenciador-de-funcionarios/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
