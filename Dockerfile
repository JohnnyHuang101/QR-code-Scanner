
FROM node:16

WORKDIR /usr/src/app

COPY Server/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "Server/app.js"]
