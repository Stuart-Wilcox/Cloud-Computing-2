const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { login, register } = require('./auth');

const isLocal = false; // change this when working locally

const host = '127.0.0.1';
const port = isLocal ? 8080 : process.env.PORT;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req,res,next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static('static'));

routes(router);
app.use('/api', router);
app.post('/public-api/login', login);
app.post('/public-api/register', register);

if(isLocal){
  app.listen(port, host, () => console.log(`Listening at ${host}:${port}`));
}
else {
  app.listen(port, () => console.log(`Listening at port ${port}`));
}
