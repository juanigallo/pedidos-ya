FROM node:13-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm config set unsafe-perm true
RUN npm install --production --silent

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]