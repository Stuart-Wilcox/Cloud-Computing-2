const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWTSECRET = 'mySuperSpecialSecret12345';

const User = require('./User');

module.exports = {
  auth: (req, res, next) => {
    let token = req.cookies['x-access-token'];

    decodeToken(token).then(username => {
      return User.find({username}).exec();
    }).then((err, user) => {
      if(err || !user) throw new Error('Invalid token');
      req.user = user;
      return next()
    }).catch(err => {
      res.status(401).send(err);
    });
  },
  login: (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    // lookup username hash
    User.find({username}).exec().then((err, user) => {
      if(err || !user) throw new Error('User Not Found');
      return user.password;
    }).then(hashedPassword => {
      return doesMatch(password, hashedPassword);
    }).then(success => {
      if(!success) throw new Error('Incorrect Password');
      return encodeToken(user.username);
    }).then(token => {
      return res.set('Set-Cookie', `x-access-token=${token};SameSite=Strict`).send('Success');
    }).catch(err => {
      return res.status(401).send(err);
    });
  },
  register: (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    getHash(password).then(hashedPassword => {
      let user = new User({
        username: username,
        password: hashedPassword,
      });
      return user.save();
    }).then((user) => {
      if(!user) throw new Error('Failed to save');
      return encodeToken(user.username);
    }).then(token => {
      return res.set('Set-Cookie', `x-access-token=${token};SameSite=Strict`).send('Success');
    }).catch(err => {
      console.error(err);
      return res.status(400).send(err);
    })
  }
};

const decodeToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWTSECRET, (err, decoded) => {
      if(err || !decoded) return reject(err);
      resolve(decoded);
    });
  });
};

const encodeToken = async (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(user, JWTSECRET, {}, (err, encoded) => {
      if(err || !encoded) return reject(err);
      resolve(encoded);
    });
  });
};

const getHash = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if(err || !hashedPassword) return reject(err);
      resolve(hashedPassword);
    });
  });
};

const doesMatch = async (password, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, correct) => {
      if(err) return reject(err);
      return resolve(correct);
    });
  });
}
