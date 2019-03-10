const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const VM = mongoose.model('VM', {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, unique: true },
  type: String,
  processorCores: Number,
  virtualRam: Number,
  storageSpace: Number,
  price: Number,
});

VM.clean = () => {
  return VM.remove({}).exec();
};

VM.getBasicInstance = (user, name) => {
  return new VM({
    user: user,
    name: name,
    type: 'Basic',
    processorCores: 8,
    virtualRam: 16,
    storageSpace: 20,
    price: 5,
  });
};

VM.getLargeInstance = (user, name) => {
  return new VM({
    user: user,
    name: name,
    type: 'Large',
    processorCores: 32,
    virtualRam: 64,
    storageSpace: 20,
    price: 10,
  });
};

VM.getUltraLargeInstance = (user, name) => {
  return new VM({
    user: user,
    name: name,
    type: 'Ultra Large',
    processorCores: 128,
    virtualRam: 512,
    storageSpace: 40,
    price: 15,
  });
};

VM.getInstance = (user, name, type) => {
  if(type == 'Basic'){
    return VM.getBasicInstance(user, name);
  }
  else if (type == 'Large'){
    return VM.getLargeInstance(user, name);
  }
  else if (type == 'Ultra Large'){
    return VM.getUltraLargeInstance(user, name);
  }
  else {
    return null;
  }
};

module.exports = VM;
