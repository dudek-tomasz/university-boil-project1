const express = require('express');
const http = require('http');
const app = express();
const router = express.Router();
const logistic = require('./api/logistic/controller');

const port = 6969;

logistic(router);

app.use('/api', router);
app.use('/logistic', logistic);

http.createServer(app).listen(port);
console.log('### SERVER:\t\t Running on port ' + port);

