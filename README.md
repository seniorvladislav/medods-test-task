# Тестовое задание на позицию Junior Backend Developer

## Содержание

- [Установка проекта](#установка-проектта)
- [Скрипты](#скрипты)
- [Форматирование и линтинг](#форматирование-и-линтинг)
- [Docker Compose](#docker-compose)

## Установка проекта

1. Склонируйте репозиторий на локальную машину (или скачайте .zip архив):

   ```bash
   git clone https://github.com/seniorvladislav/medods-test-task medods-auth-jwt
   cd medods-auth-jwt
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите dev сервер:
   ```bash
   npm run dev
   ```

## Скрипты

- **Запустить** сервер на проде:
  ```bash
  npm start
  ```
- **Dev Server (Nodemon)**:
  ```bash
  npm run dev
  ```

## Formatting and Linting

Этот проект использует **ESLint** and **Prettier** для поддержания качества и согласованности кода.

Сделать **Lint** кода:

```bash
npm run lint
```

**Отформатрировать** код:

```bash
npm run format
```

## Docker Compose

The project includes a **Dockerfile** and **docker-compose.yml** for containerized deployment.

**Запустить проект** через Docker Compose:

```bash
docker-compose up -d --build
```

**Выключить проект** Docker Compose:

```bash
docker-compose down
```
(можно добавить флаг -v для удаления БД)

## Database Initialization

Схема базы данных находится по пути `data/init.sql`. Убедитесь, что на локальном компьютере установлена и запущена СУБД PostgreSQL, либо запускайте проект непосредственно через **Docker Compose**.

---

**До обратной связи!**
