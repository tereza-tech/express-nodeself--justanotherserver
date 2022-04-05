FROM node:slim

RUN npm install -g pnpm

WORKDIR /usr/src/app/express-server
COPY . .

RUN pnpm i --prefer-offline
RUN npm run build

CMD npm run start:prod