const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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
  login: (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];
    let foundUsername = null;

    // lookup username hash
    User.find({username}).exec().then((user, err) => {
      user = user ? user[0] : null;
      if(err || !user) throw new Error('User Not Found');
      foundUsername = user.username;
      return user;
    }).then(user => {
      return doesMatch(password, user.password);
    }).then(success => {
      if(!success) throw new Error('Incorrect Password');
      return encodeToken(foundUsername);
    }).then(token => {
      return res.set('Set-Cookie', `x-access-token=${token};SameSite=Strict`).json({token});
    }).catch(err => {
      console.error(err);
      return res.status(401).send(err.message);
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
