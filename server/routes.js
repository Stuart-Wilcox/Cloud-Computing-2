const {auth} = require('./auth');

module.exports = (router) => {
  router.get('/authenticated', auth, (req, res) => {
    return res.send('Success');
  });

  router.get('/usage', auth, (req, res) => {
    let id = req.query['id'];

    res.send('usage works!')
  });

  router.get('/vm', auth, (req, res) => {
    let id = req.query['id'];

    if(!id){
      return res.send('vms works!');
    }

    res.send('vm works!');
  });
};
