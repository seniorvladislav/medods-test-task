FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm i --omit=dev

COPY . .

EXPOSE 3000