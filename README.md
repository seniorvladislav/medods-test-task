# Junior Backend Task

This is a test project for the Junior Backend Developer position.

## Table of Contents

- [Project Setup](#project-setup)
- [Scripts](#scripts)
- [Testing](#testing)
- [Formatting and Linting](#formatting-and-linting)
- [Docker Support](#docker-support)

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repo_url>
   cd <repo_name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- **Start** the server in production:
  ```bash
  npm start
  ```
- **Development mode** (with Nodemon):
  ```bash
  npm run dev
  ```
- **Run tests** with Jest:
  ```bash
  npm test
  ```
- **Lint** the code with ESLint:
  ```bash
  npm run lint
  ```
- **Format** the code with Prettier:
  ```bash
  npm run format
  ```

## Testing

The project uses **Jest** and **Supertest** for testing. Example test cases are provided for the authentication routes.

To run tests:

```bash
npm test
```

## Formatting and Linting

This project uses **ESLint** and **Prettier** to maintain code quality and consistency.

To lint the project:

```bash
npm run lint
```

To format the code:

```bash
npm run format
```

## Docker Support

The project includes a **Dockerfile** and **docker-compose.yml** for containerized deployment.

To build and run with Docker Compose:

```bash
docker-compose up --build
```

## Database Initialization

The database schema is provided in `data/init.sql`. Ensure the database service is running before applying the schema.

---

**Happy coding!**
