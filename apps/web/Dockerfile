# Web (Next.js)
FROM node:22-alpine AS deps
WORKDIR /app
COPY ../../package.json ../../package-lock.json* ./
RUN npm pkg set workspaces=[] || true
RUN npm install --legacy-peer-deps || npm install --force

FROM node:22-alpine AS builder
WORKDIR /app
COPY ../../ ./
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps
RUN npm --workspace apps/web run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/web/.next/ ./.next/
COPY --from=builder /app/apps/web/package.json ./package.json
RUN npm install next react react-dom --omit=dev
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
