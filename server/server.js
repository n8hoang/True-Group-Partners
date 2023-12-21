const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(express.json()); // For parsing application/json
app.use(cors()); // Cross Origin Resource Sharing for nodemailer

const port = process.env.PORT || 3001;

//nodemailer setup
const transporter = require('./mailer/mailer');

// Contact Me Email
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'sliqq123@gmail.com', // sender address
    to: 'natehoang911@gmail.com', // list of receivers
    subject: 'TGP Website - Contact Form ', // Subject line
    text: `From: ${name}\nEmail: ${email}\nMessage: ${message} `, // plain text body
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
// Employment Email
app.post('/send-employment', upload.single('file'), (req, res) => {
    const { firstName, lastName, email, phone, position, file } = req.body;
    const mailOptions = {
      from: 'sliqq123@gmail.com', // sender address
      to: 'natehoang911@gmail.com', // list of receivers
      subject: 'TGP Website - Employment Form', // Subject line
      text: `From: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition Desired: ${position}`, // plain text body
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});