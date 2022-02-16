# builder
FROM node:16 AS builder
ENV NODE_ENV=development

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# runner
FROM node:16-slim AS runner
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
CMD ["yarn", "start"]
