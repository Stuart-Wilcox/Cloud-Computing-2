const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model('User', {
  username: { type: String, required: true, unique: true },
  password: String,
  vms: [{ type: Schema.Types.ObjectId, ref: 'VM' }],
});


User.clean = async () => {
  return User.remove({}).exec();
};

module.exports = User;
