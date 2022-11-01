FROM node:lts-alpine as builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --chown=node . .
RUN npm ci --legacy-peer-deps --production
RUN npm prune
EXPOSE 80
USER node