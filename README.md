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

5. Сборка контейнера
   docker build -t todo .
6. Посмотреть запущеные контейнеры
   docker ps
7. Посмотртеть images
   docker images
8. Для запуска контейнера
   docker compose (утилита докера, которая позволяет описать, как хотим запустить приложение)
9. docker-compose.yml
   Создаём файл для конфигурации
   version: "3" // Минимально поддерживаемая версия докера
   services:
   app: // Произволное название
   image: todo // Базовый образ из которого будем разворачивать
   container_name: todo // Имя контейнера
   restart: always
   ports: - 3000:3000
10. Запуск контейнера
    docker-compose up -d
