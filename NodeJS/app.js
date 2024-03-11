const http = require('http');
// const routes = require('./routes');
// console.log(routes.someText);
// const server = http.createServer(routes.handler);

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In the Another Middleware');
    res.send({ key1: 2 });
});

const server = http.createServer(app);

server.listen(3000);
