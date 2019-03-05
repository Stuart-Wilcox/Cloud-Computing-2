const VM = require('../models/VM');
const Event = require('../models/Event');

module.exports = (router) => {
  router.get('/vm/offerings', (req, res) => {
    let offerings = [
      VM.getBasicInstance(),
      VM.getLargeInstance(),
      VM.getUltraLargeInstance(),
    ];

    return res.json(offerings);
  });

  router.get('/vm', (req, res) => {
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

  router.post('/vm', (req, res) => {
    let { name, type } = req.body;

    if(!name || !type) {
      return res.status(400).send('fields \'name\' and \'type\' are required');
    }

    let vm = VM.getInstance(req.user._id, name, type)

    if(!vm){
      return res.status(400).send('field \'type\' must be one of "Basic", "Large", "Ultra Large"');
    }

    vm.save()
    .then(vm => {
      return res.json(vm);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
  });

  router.delete('/vm', (req, res) => {
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

  router.post('/vm/upgrade', (req, res) => {
    let id = req.query['id'];

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

  router.post('/vm/downgrade', (req, res) => {
    let id = req.query['id'];

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

  router.post('/vm/start', (req, res) => {
    let id = req.query['id'];

    if(!id){
      return res.status(400).send('VM Id required');
    }

    VM.findById(id).then(vm => {
      const event = Event.createEvent(id, vm.type);
      return event.save();
    })
    .then(event => {
      return res.json(event);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send(err);
    });
  });

  router.post('/vm/stop', (req, res) => {
    let id = req.query['id'];

    if(!id){
      return res.status(400).send('VM Id required');
    }

    Event.find({ vm: id }).sort('-start').exec()
      .then(events => {
        console.log(events);
        // Events are sorted by most recent one, so the most
        // recent one needs to be stopped
        const lastEvent = events[0];
        lastEvent.end = Date.now();
        return lastEvent.save();
      })
      .then(event => {
        return res.json(event);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      });
  });

  router.get('/vm/event', (req, res) => {
    let id = req.query['id'];

    if(!id){
      return res.status(400).send('VM Id required');
    }

    Event.find({ vm: id }).sort('-start').exec()
      .then(events => {
        return res.json(events);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send(err);
      })
  });
};
