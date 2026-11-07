const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();
const fs = require('fs');
const cleanupUploads = require('./cleanup/cleanup')
const { saveLead } = require('./leads/leadStore');

app.set('trust proxy', 1); // Heroku router — gives the real client IP for rate limiting
app.use(express.json({ limit: '50kb' }));
app.use(cors());

const port = process.env.PORT || 3001;

const transporter = require('./mailer/mailer');

// Very small in-memory rate limiter for public form endpoints
const hits = new Map();
function rateLimit(max, windowMs) {
  return (req, res, next) => {
    const key = `${req.path}:${req.ip}`;
    const now = Date.now();
    const recent = (hits.get(key) || []).filter(t => now - t < windowMs);
    if (recent.length >= max) return res.status(429).json({ ok: false, error: 'Too many requests' });
    recent.push(now);
    hits.set(key, recent);
    next();
  };
}
setInterval(() => hits.clear(), 60 * 60 * 1000);

const SOURCE_SUBJECTS = {
  'grant-review': 'TGP Website - Grant Accounting Readiness Consultation Request',
  sarah: 'TGP Website - Talk With Sarah',
  'life-sciences': 'TGP Website - Life Sciences Consultation Request',
  consultation: 'TGP Website - Consultation Request',
};

// Contact Form Email
app.post('/send-message', rateLimit(10, 10 * 60 * 1000), (req, res) => {
  const { name, email, phone, company, service, stage, message, source } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.SEND_TO,
    replyTo: email,
    subject: SOURCE_SUBJECTS[source] || 'TGP Website - Contact Form',
    text: `
New Contact Form Submission
===========================
Name:     ${name}
Email:    ${email}
Phone:    ${phone || 'Not provided'}
Company:  ${company || 'Not provided'}
Service:  ${service || 'Not specified'}
Stage:    ${stage || 'Not specified'}
Source:   ${source || 'contact'}

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

// NIH/SBIR Accounting Readiness Checklist — lead capture + PDF delivery
const CHECKLIST_PDF = path.join(__dirname, 'assets', 'NIH-SBIR-Accounting-Readiness-Checklist.pdf');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v, max) => String(v || '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

app.post('/api/checklist', rateLimit(5, 10 * 60 * 1000), async (req, res) => {
  const body = req.body || {};
  if (body.website) return res.json({ ok: true, delivered: true }); // honeypot filled → bot

  const lead = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 200).toLowerCase(),
    marketingConsent: body.marketingConsent === true,
    source: 'Life Sciences page — NIH/SBIR Accounting Readiness Checklist',
    submittedAt: new Date().toISOString(),
  };
  if (!lead.name || !lead.company || !EMAIL_RE.test(lead.email)) {
    return res.status(400).json({ ok: false, error: 'Please provide your name, company and a valid email.' });
  }

  const pdfReady = fs.existsSync(CHECKLIST_PDF);
  const firstName = lead.name.split(/\s+/)[0];

  const deliver = pdfReady
    ? transporter.sendMail({
        from: `True Group Partners <${process.env.EMAIL}>`,
        to: lead.email,
        replyTo: process.env.SEND_TO,
        subject: 'Your NIH/SBIR Accounting Readiness Checklist',
        text: [
          `Hi ${firstName},`,
          '',
          'Thanks for requesting the NIH/SBIR Accounting Readiness Checklist. It\'s attached to this email.',
          '',
          'If you\'d like to talk through your answers, we offer a complimentary 20-minute Grant Accounting Readiness Consultation. Just reply to this email to set up a time.',
          '',
          'Best regards,',
          'True Group Partners',
          'truegrouppartners.com · 818.822.8310',
        ].join('\n'),
        attachments: [{ filename: 'NIH-SBIR-Accounting-Readiness-Checklist.pdf', path: CHECKLIST_PDF }],
      })
    : Promise.reject(new Error('Checklist PDF not uploaded yet'));

  const [delivery, store] = await Promise.allSettled([deliver, saveLead(lead)]);
  const delivered = delivery.status === 'fulfilled';
  const savedTo = store.status === 'fulfilled' ? store.value : [];
  if (!delivered) console.error('[checklist] delivery failed:', delivery.reason && delivery.reason.message);

  let notified = true;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.SEND_TO,
      replyTo: lead.email,
      subject: `TGP Website - Checklist Download: ${lead.name} (${lead.company})`,
      text: `
New NIH/SBIR Checklist Download
===============================
Name:              ${lead.name}
Company:           ${lead.company}
Email:             ${lead.email}
Marketing consent: ${lead.marketingConsent ? 'Yes' : 'No'}
Submitted:         ${lead.submittedAt}

Checklist emailed: ${delivered ? 'Yes' : 'NO — please send the checklist manually'}
Saved to CRM:      ${savedTo.length ? savedTo.join(', ') : 'Not configured — this email is the record'}
      `.trim(),
    });
  } catch (err) {
    notified = false;
    console.error('[checklist] notification failed:', err.message);
  }

  if (!delivered && !notified && !savedTo.length) {
    return res.status(500).json({ ok: false, error: 'Could not process request' });
  }
  res.json({ ok: true, delivered });
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
