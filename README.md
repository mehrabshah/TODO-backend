<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Nest.js To-Do List Backend

This is the backend API for a to-do list application built with Nest.js, utilizing MongoDB for data storage. It provides endpoints for managing tasks and interacting with the database.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Nest.js**: A progressive Node.js framework for building efficient, scalable server-side applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB**: A NoSQL database for storing task data.

### Why Nest.js?

Nest.js was chosen for several reasons:
1. **Modular Structure**: Nest.js follows a modular structure, making it easy to organize and maintain code.
2. **TypeScript Support**: TypeScript brings static typing to JavaScript, catching errors early in the development process.
3. **Decorator-based Syntax**: Nest.js uses decorators for defining modules, controllers, and services, resulting in clean and readable code.



## Setup

Follow these steps to set up and run the backend API locally:

1. **Clone the Repository:**
    ```bash
    git clone  https://github.com/mehrabshah/backend.git
    cd backend
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Configure MongoDB Atlas:**
    - Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and configure your database.
    - Whitelist your IP address in the MongoDB Atlas cluster.
    - Update the MongoDB connection settings in `src/config/database.config.ts` with your connection string.

4. **Run the Application:**
    ```bash
    npm run start
    ```

5. The API will be running at `http://localhost:3000`.

