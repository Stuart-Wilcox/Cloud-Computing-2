const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const Event = mongoose.model('Event', {
    start: { type: Date, default: Date.now },
    end: { type: Date },
    vm: { type: Schema.Types.ObjectId, ref: 'VM' },
    type: {type:String},
});

/**
 * Cost per minute of an event
 */
Event.getPrice = () => {
    switch(this.type) {
        case 'Basic':
            return 5;
        case 'Large':
            return 10;
        case 'Ultra Large':
            return 15;
        default:
            return 0;
    }
};

/**
 * Returns the number of minutes the VM was running for
 */
Event.getRunningTime = () => {
    const secondsStarting = this.start.getTime() / 1000;
    const secondsEnding = this.end.getTime() / 1000;

    const totalTimeSeconds = secondsEnding - secondsStarting;

    if(totalTimeSeconds < 60) {
        return 1;
    }

    return totalTimeSeconds / 60;
};

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
