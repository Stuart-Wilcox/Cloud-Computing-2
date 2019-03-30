module.exports = (router) => {
    router.get('/usage', (req, res) => {
        let id = req.query['id'];

        // TODO implement usage. Calculate the previous events for the VM and figure it out
        res.send('usage works!');
    });

    router.post('/usage', (req, res) => {
        let id = req.query['id'];

        // TODO implement. save the given event
        res.send('usage works!');
    });
};
  