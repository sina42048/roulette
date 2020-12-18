/* eslint-disable linebreak-style */
const nodeMailer = require('nodemailer');
const config = require('../../config/index');

const transporter = nodeMailer.createTransport({
  host: config.emailHost,
  port: config.emailPort,
  auth: {
    user: config.emailUserName,
    pass: config.emailPassword,
  },
});


module.exports = transporter;
