require('dotenv').config();
const nodemailer = require('nodemailer');
const request = require('request-promise');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to app dir
console.log(ABSPATH);

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

async function main() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'the.one.brogrammers.inc@gmail.com',
            pass: `zkkhp65GZT9iB8GJ42Wf`
        }
    });

    while(true) {
        try {
            const result = await request.get(`http://127.0.0.1:${process.env.USAGE_PORT}/status`);
            console.log('Cloud Usage Monitor Status: ', result);
            await sleep(3000);
        } catch(err) {
            const mailOptions = {
                from: 'the.one.brogrammers.inc@gmail.com',
                to: 'aszepess@uwo.ca',
                subject: 'Cloud Usage Monitor Down!',
                text: 'Cloud Usage Monitor is Down!\n\n' + err,
                attachments: [
                    {
                        path: ABSPATH + `/${process.env.LOG_FILE}`
                    }
                ]
            };
            
            console.log('Cloud Usage Monitor is Down! Sending email...')

            const info = await transporter.sendMail(mailOptions);
            console.log('Message sent %s', info.messageId);

            break;
        }
    }
    
}

main().catch(console.error);
