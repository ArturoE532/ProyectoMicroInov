FROM node:carbon-alpine
RUN mkdir /my_app
COPY package.json /my_app
COPY server.js /my_app
COPY . .
WORKDIR /my_app
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
