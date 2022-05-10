# Example Unum ID Pair Programming Project
This project is very similar to the one used as a starting point for our pair programming interviews.
Please make sure that you are able to run this project on your machine before your interview.

## Requirements
- Node.js v14.14.0 or higher
  - run `node -v` to check your current version
  - you can use [nvm](https://github.com/nvm-sh/nvm) to install and manage multiple Node.js versions if necessary
- npm v6.14.14 or higher
  - should be included with your Node.js installation.
  - run `npm -v` to check your current version

## Running the project
This project uses [nodemon](https://nodemon.io/) to run the server and [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) to build and serve the client. Run `npm install` to install dependencies, then `npm run start` to start the project. You can also start the server and client separately using `npm run start:server` and `npm run start:client`, respectively. The server runs on `localhost:3000`, the client on `localhost:8080`.

## The App
This is an extremely simple web app consisting of a NodeJS Express server and a React client. It allows a user to create an account for the application and log in/out.

### App Structure
```
  ├── client — all client-side code
  │ ├── .babelrc — defines rules for the babel js transpiler
  │ ├── components — direcrory containing all of our React components
  │ ├── index.html — simple html page our built client app will be added into
  │ └── index.js — entry point for client javascript code
  ├── server — our server-side application
  │ └── index.js — our nodejs server code
  ├── db.json — json file that will act as our data store for this project
  ├── package.json
  ├── README.md - this README
  ├── webpack.config.js - configuration file for the webpack build tool
```

## Technologies & Libraries Used
#### Node.js
- A server-side JavaScript runtime
- API documentation [here](https://nodejs.org/api/)

#### Express JS
- Fast, unopinionated, minimalist web framework for Node.js
- API documentation [here](https://expressjs.com/en/4x/api.html)

#### React JS
- JavaScript library for building component-based user interfaces. Developed by Facebook.
- Documentation [here](https://reactjs.org/docs/getting-started.html)

#### LowDB
- A small, simple JSON-based database
- Documentation [here](https://github.com/typicode/lowdb)

