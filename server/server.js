const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { login, register } = require('./auth');

const host = '127.0.0.1';
const port = 8080;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

routes(router);
app.use('/api', router);
app.post('/api/login', login);
app.post('/api/register', register);

app.listen(port, host, () => console.log(`Listening at ${host}:${port}`));
