const jwt = require('jsonwebtoken');
const JWTSECRET = 'mySuperSpecialSecret12345';

const User = require('./models/User');

module.exports = {
  auth: (req, res, next) => {
    let token = req.headers['x-access-token'];

    decodeToken(token).then(username => {
      return User.find({username}).exec();
    }).then((user, err) => {
      if(err || !user || user.length==0) throw new Error('Invalid token');
      req.user = user[0];
      return next()
    }).catch(err => {
      console.error(err);
      res.status(401).send(err);
    });
  },
};

const decodeToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWTSECRET, (err, decoded) => {
      if(err || !decoded) return reject(err);
      resolve(decoded);
    });
  });
};
