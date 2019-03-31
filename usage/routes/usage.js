const Event = require('../models/Event');
const logger = require('../logger');

function getPrice(event) {
    switch(event.type) {
        case 'Basic':
            return 5;
        case 'Large':
            return 10;
        case 'Ultra Large':
            return 15;
        default:
            return 0;
    }
}

// Returns the running time for a single event. If an event doesn't
// have an end, it uses the current time as the end
function getRunningTime(event) {
    const secondsStarting = event.start.getTime() / 1000;

    // Check if there's an ending time, otherwise use current time
    const secondsEnding = (() => {
        if(event.end) {
            return event.end.getTime() / 1000;
        }

        return Date.now() / 1000;
    })();

    const totalTimeSeconds = secondsEnding - secondsStarting;

    if(totalTimeSeconds < 60) {
        return 1;
    }

    return ~~(totalTimeSeconds / 60);
}

// Returns total running time in minutes
async function getTotalRunningTime(id) {
    const events = await Event.find({ vm: id }).sort('-start').exec();
    
    let totalTime = 0;

    for(let i = 0; i < events.length; ++i) {
        totalTime += getRunningTime(events[i]);
    }

    return totalTime;
}

// Returns the total cost of a VM in cents
async function getUsage(id) {
    const events = await Event.find({ vm: id }).sort('-start').exec();
    
    let totalCost = 0;

    for(let i = 0; i < events.length; ++i) {
        totalCost += getPrice(events[i]) * getRunningTime(events[i]);
    }

    return totalCost;
}

module.exports = (router) => {
    // Returns the cost, in cents, of the VM
    router.get('/usage', (req, res) => {
        let id = req.query['id'];

        if(!id){
            return res.status(400).send('VM Id required');
        }

        getUsage(id).then((totalCost) => {
            logger.info(`GET /usage?id=${id}: ${totalCost}`);
            return res.json(totalCost);
            })
            .catch(err => {
                logger.error(`GET /usage?id=${id}:`);
                logger.error(err);
            return res.status(500).send(err);
        });
    });

    // Returns the total running time for the VM
    router.get('/usage/time', (req, res) => {
        const id = req.query['id'];

        if(!id){
            return res.status(400).send('VM Id required');
        }

        getTotalRunningTime(id).then((totalTime) => {
            logger.info(`GET /usage/time?id=${id}: ${totalTime}`);
            return res.json({
                time: totalTime,
            });
        }).catch(err => {
            logger.error(`GET /usage/time?id=${id}:`);
            logger.error(err);
            return res.status(500).send(err);
        });
    });

    // Creates an event for VM start
    router.post('/usage/start', (req, res) => {
        const id = req.query.id;
        const type = req.query.type;

        if(!id || !type) {
            return res.status(400).send('VM Id & type required');
        }

        async function startVM() {
            const event = Event.createEvent(id, type);
            return await event.save();
        }

        startVM().then(event => {
            logger.info(`POST /usage/start?id=${id}&type=${type}:`);
            logger.info(event);
            return res.json(event);
        }).catch(err => {
            logger.error(`POST /usage/start?id=${id}&type=${type}:`);
            logger.error(err);
            return res.status(500).json(err);
        });
    });

    // Creates an event for VM stop
    router.post('/usage/stop', (req, res) => {
        const id = req.query.id;

        if(!id) {
            return res.status(400).send('VM Id required');
        }

        async function stopVM() {
            const events = await Event.find({ vm: id }).sort('-start').exec();
            const lastEvent = events[0];
      
            lastEvent.end = Date.now();
            return await lastEvent.save();
        }

        stopVM().then(event => {
            logger.info(`POST /usage/stop?id=${id}:`);
            logger.info(event);
            return res.json(event);
        }).catch(err => {
            logger.error(`POST /usage/start?id=${id}:`);
            logger.error(err);
            return res.status(500).json(err);
        });
    });

    // Creates an event for VM upgrade
    router.post('/usage/upgrade', (req, res) => {
        const id = req.query.id;
        const type = req.query.type;

        if(!id || !type) {
            return res.status(400).send('VM Id & type required');
        }

        async function upgradeVM() {
            let events = await Event.find({ vm: id }).sort('-start').exec();
            const event = events[0];

            // If VM is still running, we need to add a new event so we can keep
            // track of the new cost
            if(event && !event.end) {
                event.end = Date.now();
                await event.save();

                const upgradeEvent = Event.createEvent(id, type);
                return await upgradeEvent.save();
            }
        }

        upgradeVM().then(event => {
            logger.info(`POST /usage/upgrade?id=${id}&type=${type}:`);
            logger.info(event);
            return res.json(event);
        }).catch(err => {
            logger.error(`POST /usage/start?id=${id}&type=${type}:`);
            logger.error(err);
            res.status(500).json(err);
        });
    });

    // Creates an event for VM downgrade
    router.post('/usage/downgrade', (req, res) => {
        const id = req.query.id;
        const type = req.query.type;

        if(!id || !type) {
            return res.status(400).send('VM Id & type required');
        }

        async function downgradeVM() {
            let events = await Event.find({ vm: id }).sort('-start').exec();
            const event = events[0];

            // If VM is still running, we need to add a new event so we can keep
            // track of the new cost
            if(event && !event.end) {
                event.end = Date.now();
                await event.save();

                const downgradeEvent = Event.createEvent(id, type);
                return await downgradeEvent.save();
            }
        }

        downgradeVM().then(event => {
            logger.info(`POST /usage/stop?id=${id}&type=${type}:`);
            logger.info(event);
            return res.json(event);
        }).catch(err => {
            logger.error(`POST /usage/start?id=${id}&type=${type}:`);
            logger.error(err);            
            return res.status(500).json(err);
        });
    });
};
  