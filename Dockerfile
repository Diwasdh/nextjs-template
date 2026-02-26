# 1️⃣ Dependencies stage
ARG NODE_VERSION=22.13.0-slim
FROM node:${NODE_VERSION} AS base

FROM base AS deps
WORKDIR /app

# Enable corepack (for yarn)
RUN corepack enable

COPY package.json yarn.lock* ./
RUN corepack enable && yarn install --frozen-lockfile

# 2️⃣ Build stage
FROM base AS builder
WORKDIR /app
RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# 3️⃣ Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S nodejs
RUN adduser -S nextjs -G nodejs

# Copy standalone output (recommended)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]