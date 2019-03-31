require('dotenv').config();
const nodemailer = require('nodemailer');
const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename); // Absolute path to app dir

async function main() {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'the.one.brogrammers.inc@gmail.com',
            pass: `zkkhp65GZT9iB8GJ42Wf`
        }
    });

    const mailOptions = {
        from: 'the.one.brogrammers.inc@gmail.com',
        to: process.env.LOG_EMAIL,
        subject: 'Cloud Usage Monitor Report',
        text: 'Cloud Usage Monitor Report log file',
        attachments: [
            {
                path: ABSPATH + process.env.LOG_FILE
            }
        ]
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent %s', info.messageId);
}

main().catch(console.error);