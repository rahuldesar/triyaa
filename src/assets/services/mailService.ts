import nodemailer from 'nodemailer';
const NODEMAILER_USER = import.meta.env.NODEMAILER_USER;
const NODEMAILER_PASSWORD = import.meta.env.NODEMAILER_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASSWORD,
  },
});

// const mailOptions = {
//   from: 'vadernotifier@gmail.com',
//   to: 'desarrahul@gmail.com',
//   subject: 'Hello from Nodemailer',
//   text: 'This is a test email sent using Nodemailer.',
// };
//
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('Error sending email: ', error);
//   } else {
//     console.log('Email sent: ', info.response);
//   }
// });
