# Todo List App

This project is a web application that lets you create tasks, check if you have finished the task and delete it. In order to use the app you have to sign up and log in.

## Instructions

You have to open the link of the backend before open the link of the frontend because sometimes the backend is sleep and you have to wakeup.

## Front-end

[Front-end](https://frontend-todo-list-app.herokuapp.com/)

### Tecnologies

- React
- Typescript
- Bootstrap
- Axios
- Node
- Redux

### Run Aplication

```bash
# development
$ npm start

# test
$ npm test
```

### Structure

```bash
./todo-list-app/src
|-- API
|   `-- api.tsx
|-- App.tsx
|-- Components
|   |-- CreateTask.tsx
|   |-- Home.tsx
|   |-- Login.tsx
|   |-- Navbar.tsx
|   |-- Signup.tsx
|   |-- Tasks.tsx
|   `-- tasksSlice.tsx
|-- Tests
|   `-- Signup.test.tsx
|-- hooks.ts
|-- index.css
|-- index.tsx
|-- react-app-env.d.ts
|-- setupTests.ts
`-- store.tsx

```

## Back-end

[Back-end](https://backend-todo-list-app.herokuapp.com/)

### Tecnologies

- Nest
- Typescript
- Mongodb
- Express
- Bcrypt
- JWT
- Node

### Run Aplication

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# mongodb
$ mongodb
```

### Structure

```bash
./backend-todo-list-app/src
|-- app.controller.spec.ts
|-- app.controller.ts
|-- app.module.ts
|-- app.service.ts
|-- auth
|   |-- auth.module.ts
|   |-- auth.service.ts
|   |-- constants.ts
|   |-- jwt-auth.guard.ts
|   |-- jwt.strategy.ts
|   |-- local-auth.guard.ts
|   `-- local.strategy.ts
|-- config
|   `-- mongo.module.ts
|-- main.ts
|-- tasks
|   |-- dtos
|   |   |-- create-task.dto.ts
|   |   `-- update-task.dto.ts
|   |-- interfaces
|   |   `-- task.interface.ts
|   |-- schemas
|   |   `-- task.schema.ts
|   |-- tasks.controller.ts
|   |-- tasks.module.ts
|   `-- tasks.service.ts
`-- users
    |-- dtos
    |   `-- create-user.dto.ts
    |-- interfaces
    |   `-- user.interface.ts
    |-- schemas
    |   `-- user.schema.ts
    |-- users.controller.ts
    |-- users.module.ts
    `-- users.service.ts
```
