FROM node:16-alpine as build

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD [ "node", "dist/main" ]