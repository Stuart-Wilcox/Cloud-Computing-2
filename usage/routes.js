const { auth } = require('./auth');
const usageRoutes = require('./routes/usage');
module.exports = (router) => {
  router.use(auth);

  usageRoutes(router);
};
