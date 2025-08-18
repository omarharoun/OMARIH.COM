FROM node:22-alpine
WORKDIR /srv
COPY ./package.json ./package-lock.json* ./
RUN npm install --legacy-peer-deps || npm install --force
COPY ./ .
RUN npm run build
EXPOSE 4103
CMD ["node", "dist/index.js"]
