FROM node:lts-alpine as builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --chown=node . .
RUN npm ci --legacy-peer-deps --omit=dev
RUN npm prune
EXPOSE 80
USER node