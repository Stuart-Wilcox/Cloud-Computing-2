const {auth} = require('./auth');
const VM = require('./VM');

module.exports = (router) => {
  router.get('/usage', auth, (req, res) => {
    let id = req.query['id'];

    // TODO implement usage. Calculate the previous events for the VM and figure it out
    res.send('usage works!');
  });

  router.post('/usage', auth, (req, res) => {
    let id = req.query['id'];

    // TODO implement. save the given event
    res.send('usage works!');
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

  router.post('/vm/upgrade', auth, (req, res) => {
    let id = req.body.id;

    if(!id){
      return res.status(400).send('Id required');
    }

    VM.findById(id)
    .then((vm, err) => {
      if(err || !vm) throw new Error('VM not found');
      if(vm.type == 'Ultra Large') return res.send('Can\'t upgrade beyond Ultra Large');

      if(vm.type == 'Large'){
        vm.type = 'Ultra Large';
        vm.processorCores = 128;
        vm.virtualRam = 512;
        vm.storageSpace = 40;
        vm.price = 15;
      }
      else {
        vm.type = 'Large';
        vm.processorCores = 32;
        vm.virtualRam = 64;
        vm.storageSpace = 20;
        vm.price = 10;
      }

      return vm.save();
    })
    .then(vm => {
      return res.json(vm);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    })
  });

  router.post('/vm/downgrade', auth, (req, res) => {
    let id = req.body.id;

    if(!id){
      return res.status(400).send('Id required');
    }

    VM.findById(id)
    .then((vm, err) => {
      if(err || !vm) throw new Error('VM not found');
      if(vm.type == 'Basic') return res.send('Can\'t downgrade beyond Basic');

      if(vm.type == 'Large'){
        vm.type = 'Basic';
        vm.processorCores = 8;
        vm.virtualRam = 16;
        vm.storageSpace = 20;
        vm.price = 5;
      }
      else {
        vm.type = 'Large';
        vm.processorCores = 32;
        vm.virtualRam = 64;
        vm.storageSpace = 20;
        vm.price = 10;
      }

      return vm.save();
    })
    .then(vm => {
      return res.json(vm);
    })
    .catch(err => {
      console.error(err);
      return res.status(404).send(err);
    })
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
