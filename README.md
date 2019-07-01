# Introduction

I decided to go ahead and try to build an API strictly from nodejs using expressjs. I followed an article found (here)[https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb].

Created the app.js file and ran

```
npm init
```

To create the package.json file.

Afterwards, ran these

```
npm install express
npm install babel-cli
npm install babel-preset-es2015
npm install body-parser
```

Running this app requires this command

```
npm run start
```

After putting this into the package.json file

```
"scripts": {
    "start": "node_modules/.bin/nodemon app.js --exec babel-node --"
}
```

To ease development, I decided to also throw nodemon up here.

```
npm install nodemon --save-dev
```