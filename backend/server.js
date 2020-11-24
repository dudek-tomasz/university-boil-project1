const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();
const logistic = require('./api/logistic/controller');

const port = 6969;
app.use(bodyParser.json());

logistic(router);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(cors());
app.use(cookieParser());
app.set('trust proxy', true);

app.use('/api', router);
app.use('/logistic', logistic);

http.createServer(app).listen(port);
console.log('### SERVER:\t\t Running on port ' + port);

