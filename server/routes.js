const {auth} = require('./auth');
const VM = require('./VM');

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
      return VM.find({user:req.user}).exec()
      .then((vms, err) => {
        if(err || !vms) throw new Error('VMs not found');
        return res.json(vms);
      })
      .catch(err => {
        return res.status(404).send(err);
      });
    }

    VM.findById(id).exec()
    .then((vm, err) => {
      if (err || !vm) throw new Error('VM not found');
      let correctUser = vm.user.toString() == req.user._id.toString();
      if (!correctUser) throw new Error('VM not owned by user, unable to access');
      return res.json(vm);
    })
    .catch(err => {
      console.error(err);
      return res.status(404).send(err);
    })
  });

  router.post('/vm', auth, (req, res) => {
    let { name, type, processorCores, virtualRam, storageSpace, price } = req.body;

    if(!name || !type || !processorCores || !virtualRam || !storageSpace || !price) {
      return res.status(400).send('All fields must be specified');
    }

    let vm = new VM({
      user: req.user._id,
      name,
      type,
      processorCores,
      virtualRam,
      storageSpace,
      price,
    });

    vm.save()
    .then(vm => {
      return res.json(vm);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
  });

  router.post('/vm/upgrade', auth, (req, req) => {
    let id = req.body.id;

    if(!id){
      return res.status(400).send('Id required');
    }
  });

  router.post('/vm/downgrade', auth, (req, res) => {
    let id = req.body.id;

    if(!id){
      return res.status(400).send('Id required');
    }
  });

  router.delete('/vm', auth, (req, res) => {
    let id = req.query['id'];

    if (!id) {
      return res.status(400).send('Id required');
    }

    VM.findByIdAndDelete(id).exec()
    .then((vm, err) => {
      if(!vm || err) throw new Error('Unable to delete');
      res.send('Success');
    })
    .catch(err => {
      console.error(err);
      return res.status(404).send(err);
    });
  });
};
