const { auth } = require('./auth');
const vmRoutes = require('./routes/vm');
const usageRoutes = require('./routes/usage');
module.exports = (router) => {
  router.use(auth);

  vmRoutes(router);
  usageRoutes(router);
};
