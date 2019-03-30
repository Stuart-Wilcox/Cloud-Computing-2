const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

const PORT = process.env.PORT || 8000;

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req,res,next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});

routes(router);
app.use('/api', router);

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
