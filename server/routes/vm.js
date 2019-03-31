const VM = require('../models/VM');
const Event = require('../models/Event');
const request = require('request-promise');
const queryString = require('querystring');

const USAGE_HOST = process.env.USAGE_HOST;
const USAGE_PORT = process.env.USAGE_PORT;
const USAGE_URL = `http://${USAGE_HOST}:${USAGE_PORT}/api`;

function createRequestOpts(fn, id, type, token) {
  const query = queryString.stringify({id, type});

  const options = {
    method: 'POST',
    json: true,
    url: `${USAGE_URL}/usage/${fn}?${query}`,
    headers: {
      'x-access-token': token,
    }
  };

  return options;
}

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
      res.json({msg:'Success'})
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

    async function upgradeVM(){
      let vm = await VM.findById(id);
      if(!vm) throw new Error('VM not found');
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

      await vm.save();

      const options = createRequestOpts('upgrade', id, vm.type, req.token);
      const event = await request(options);

      return vm;
    }

    upgradeVM().then(vm => {
      return res.json(vm);
    }).catch(err => {
      console.error(err);
      return res.status(500).send(err);
    });
  });

  router.post('/vm/downgrade', (req, res) => {
    let id = req.query['id'];

    if(!id){
      return res.status(400).send('Id required');
    }

    async function downgradeVM() {
      let vm = await VM.findById(id);
      if(!vm) throw new Error('VM not found');

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

      await vm.save();

      const options = createRequestOpts('downgrade', id, vm.type, req.token);
      const event = await request(options);

      return vm;
    }

    downgradeVM()
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

    async function startVM() {
      const vm = await VM.findById(id);

      // Check to make sure VM is not running
      if(vm.status) {
        return res.status(400).send('VM already running');
      } else {
        vm.status = true;
        await vm.save();

        const options = createRequestOpts('start', id, vm.type, req.token);
        const event = await request(options);

        return vm;
      }
    }

    startVM().then(vm => {
      return res.json(vm);
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

    async function stopVM() {
      const vm = await VM.findById(id);

      if(!vm.status) {
        return res.status(400).send('VM already stopped');
      } else {
        vm.status = false;
        await vm.save();

        const options = createRequestOpts('stop', id, vm.type, req.token);
        const event = await request(options);

        return vm;
      }
    }

    stopVM()
      .then(vm => {
        return res.json(vm);
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

  router.get('/vm/usage', (req, res) => {
    let id = req.query['id'];
    if(!id){
      return res.status(400).send('VM Id required');
    }

    const options = {
      method: 'GET',
      json: true,
      url: `${USAGE_URL}/usage?id=${id}`,
      headers: {
        'x-access-token': req.token,
      }
    };

    request(options).then((totalCost) => {
      return res.json(totalCost);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
  });

  router.get('/vm/time', (req, res) => {
    const id = req.query['id'];
    if(!id){
      return res.status(400).send('VM Id required');
    }

    const options = {
      method: 'GET',
      json: true,
      url: `${USAGE_URL}/usage/time?id=${id}`,
      headers: {
        'x-access-token': req.token,
      }
    };

    request(options).then((time) => {
      return res.json(time);
    })
    .catch(err => {
      return res.status(500).send(err);
    });
  });
};
