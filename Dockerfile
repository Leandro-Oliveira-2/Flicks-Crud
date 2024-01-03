FROM node:16.10

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
