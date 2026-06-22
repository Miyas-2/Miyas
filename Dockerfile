FROM node:18-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --silent

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy only runtime artifacts
COPY --from=builder /app/.next ./.next
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY public ./public
COPY app ./app
EXPOSE 3000
CMD ["npm", "run", "start"]
