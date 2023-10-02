#!/usr/bin/env ts-node

import { createTransport } from 'nodemailer';

const transformer = createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.AE_EMAIL_ADDRESS,
    pass: process.env.AE_EMAIL_PASSWORD,
  },
});

transformer
  .sendMail({
    from: '"Security | Ahmet Emrebas" <security@aemrebas.com>',
    to: 'aemrebasus@gmail.com',
    subject: 'Interview Request | Ahmet Emrebas',
    text: 'Hi, Ahmet Emrebas. Please tell me aobut yourself!',
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
