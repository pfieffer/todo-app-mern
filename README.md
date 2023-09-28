# Fullstack TODO Web App

## Web app made in the MERN stack

## Features

- Create a TODO item
- Mark TODO item as complete
- Delete TODO item

## Tech

- [Mongo](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Web framework
- [React](https://react.dev/) - Frontend
- [Node JS](https://nodejs.org/en) - Backend

The project was build using node version 16.17.1 and yarn version 1.22.19

```
node -v
v16.17.1

yarn -v
1.22.19
```

## Installation

For setting up your development environment, use respective links in the **[Tech](https://github.com/pfieffer/todo-app-mern#tech)** section

1. First of all create an account at <https://www.mongodb.com/> and create a cluster and database
2. Create a `nodemon.json` file inside server
3. Paste the following inside nodemon.json

    ```
    {
        "env": {
            "MONGO_USER": "<your_mongo_db_user>",
            "MONGO_PASSWORD": "<your_mongo_db_password>",
            "MONGO_DB": "<your_db_name>"
        }
    }
    ```

4. Replace your mongo db user, password and db name
5. Don't forget to whitelist your ip address from mongo db atlas everytime you connect to a different network
6. Start server `cd server` and `yarn start`
4. Start client app : `cd client` and `yarn start`

> Full tutorial on [free code camp](https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/) by Ibrahim Ndaw. [Github](https://github.com/ibrahima92/fullstack-typescript-mern-todo)
