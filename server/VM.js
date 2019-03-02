const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const VM = mongoose.model('VM', {
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  type: String,
  processorCores: Number,
  virtualRam: Number,
  storageSpace: Number,
  price: Number,
});

VM.clean = () => {
  return VM.remove({}).exec();
};

module.exports = VM;
