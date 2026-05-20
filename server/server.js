const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();
const cleanupUploads = require('./cleanup/cleanup')

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

const transporter = require('./mailer/mailer');

// Contact Form Email
app.post('/send-message', (req, res) => {
  const { name, email, phone, company, service, stage, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.SEND_TO,
    subject: 'TGP Website - Contact Form',
    text: `
New Contact Form Submission
===========================
Name:     ${name}
Email:    ${email}
Phone:    ${phone || 'Not provided'}
Company:  ${company || 'Not provided'}
Service:  ${service || 'Not specified'}
Stage:    ${stage || 'Not specified'}

Message:
${message}
    `.trim(),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Employment Form Email
app.post('/send-employment', upload.single('file'), (req, res) => {
  const { firstName, lastName, email, phone, position } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.SEND_TO,
    subject: 'TGP Website - Employment Form',
    text: `
New Employment Application
==========================
Name:              ${firstName} ${lastName}
Email:             ${email}
Phone:             ${phone}
Position Desired:  ${position}
    `.trim(),
    attachments: [
      {
        filename: req.file.originalname,
        path: req.file.path
      }
    ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const fifteenMinutes = 15 * 60 * 1000;
setInterval(cleanupUploads, fifteenMinutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
