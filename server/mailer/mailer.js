const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email provider
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW
  }
});

module.exports = transporter;