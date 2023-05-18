# [React Berry Dashboard](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/) 

**Berry** is a creative **[React Dashboard](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/)** built using the `Material-UI`. It is meant to be the best User Experience with highly customizable feature-riched pages. It is a complete game-changer **React Dashboard** with an easy and intuitive responsive design as on retina screens or laptops. The product comes with a simple JWT authentication flow: `login`/`register`/`logout` powered by an open-source **Node JS API** Backend via `Passport` Library.

- 👉 [React Node JS Berry](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/) - product page
- 👉 [React Node JS Berry](https://react-node-js-berry-dashboard.appseed-srv1.com/) - LIVE Demo

<br />

> 🚀 Built with **[React App Generator](https://appseed.us/generator/react/)**

- ✅ Modern aesthetics UI design - Designed by *CodedThemes*
- ✅ React, Redux, Redux-persist
- ✅ Authentication: JWT Login/Register/Logout
- ✅ **Full-stack Ready** using a **Node JS API Server** (open-source project) - Server Features
  - `Typescript` / SQLite Persistence / TypeORM / Joy (validation)
  - Passport library - `passport-jwt` strategy.

![React Nodejs Berry - Open-source full-stack seed project crafted by CodedThemes and AppSeed.](https://user-images.githubusercontent.com/51070104/176936514-f1bccb21-bafe-4b43-9e4c-b6fe0ec9511d.png)

<br />

## Tests

> `Compatibility matrix` tested with [Render API Wrapper](https://github.com/app-generator/deploy-automation-render).

| NodeJS | NPM | YARN | 
| --- | --- | --- |  
| `v14.0.0` | ✅ | ✅ |
| `v16.0.0` | ✅ | ✅ | 
| `v18.0.0` | ❌ | ❌ | 

<br />

## Quick Start in [Docker](https://www.docker.com/)

> Get the code

```bash
$ git clone https://github.com/app-generator/react-berry-dashboard.git
$ cd react-berry-dashboard
```

> Start the app in Docker

```bash
$ docker-compose pull  # download dependencies 
$ docker-compose build # local set up
$ docker-compose up    # start the app 
```

The React UI starts on port `3000` and expects an API server on port `5000` (saved in configuration).

<br />

> **Note**: This product can be used with other API Servers for a complete full-stack experience. **ALL API servers use a unified interface**

- [Django API Server](https://github.com/app-generator/api-server-django) - open-source product
- [Flask API Server](https://github.com/app-generator/api-server-flask) - open-source product
- [Node JS API Server](https://github.com/app-generator/api-server-nodejs) - open-source product / Typescript / SQLite / TypeORM / Joy for validation
- [Node JS API Server PRO](https://github.com/app-generator/api-server-nodejs-pro) - **commercial product**
    - Typescript / SQLite / TypeORM / Joy Validation / Docker
    - Typescript / MongoDB / Mongoose / Joy Validation / Docker (separate branch, same project)

<br />

## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-berry-dashboard.git
$ cd react-berry-dashboard
```

<br >

**Step 2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step 3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'http://localhost:5000/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />

## Node JS API Server

The product is also open-source and is already configured to work with Berry Dashboard Template - product features:

- Typescript / `NodeJS` / `Express` Server
- JWT authentication (`passport-jwt` strategy)
- Persistence: `SQLite` / `TypeORM`

> Links

- [Node JS API](https://github.com/app-generator/api-server-nodejs) - source code
- [Node JS API](https://appseed.us/boilerplate-code/nodejs-starter) - product page

<br />

![Node JS API - Open-source API server built on top of Express Nodejs Framework.](https://user-images.githubusercontent.com/51070104/124934824-c210a700-e00d-11eb-9d01-e05bd8bfb608.png)

<br />

### Compile the API Server

**Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step 3** - Run the SQLite migration via TypeORM

```
$ npm run typeorm migration:run
// OR 
$ yarn typeorm migration:run
```

**Step 4** - Start the API server (development mode)

```bash
$ npm run dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

---
[React Berry Dashboard](https://appseed.us/product/berry-dashboard/api-server-nodejs/react/) - Provided by [CodedThemes](https://codedthemes.com/) and **AppSeed [App Generator](https://appseed.us/generator)**.
