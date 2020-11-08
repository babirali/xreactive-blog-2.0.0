
FROM node:10-alpine

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
# RUN chmod -R 777 /home/node/app

# RUN chmod -R 777 /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]