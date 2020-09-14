FROM node:12-alpine AS builder

COPY ./package*.json ./

RUN npm install && npm cache clean --force --loglevel=error

COPY ./src ./

COPY tsconfig.build.json ./

COPY tsconfig.json ./

RUN npm run build

FROM node:12-alpine

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node --from=builder node_modules ./node_modules

COPY --chown=node:node --from=builder ./dist ./dist

COPY --chown=node:node --from=builder ./package*.json ./

USER node

RUN npm prune --production

CMD [ "npm", "run", "start:prod"]

