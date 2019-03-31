const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const Event = mongoose.model('Event', {
    start: { type: Date, default: Date.now },
    end: { type: Date },
    vm: { type: Schema.Types.ObjectId, ref: 'VM' },
    type: {type:String},
});

Event.finishEvent = () => {
    this.end = Date.now();
};

Event.createEvent = (vmId, type) => {
    return new Event({
        start: Date.now(),
        end: null,
        vm: vmId,
        type,
    });
};

module.exports = Event;
