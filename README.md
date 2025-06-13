This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docer

1. Создаём файл
   .env.production
2. Сборка проекта
   npm run build
3. Проверка сборки
   NODE_ENV=production npm start
4. Создаем в корне докер файл
   Dockerfile

5. Запуск контейнера
   docker build -t client .
