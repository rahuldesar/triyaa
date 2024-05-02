export const prerender = false;

import nodemailer from 'nodemailer';
export async function GET() {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'vadernotifier@gmail.com',
      pass: 'gwbvhwpniyyhljgr',
    },
  });

  const mailOptions = {
    from: 'vadernotifier@gmail.com',
    to: 'pabeh14567@dxice.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });

  const number = Math.random();

  return new Response(
    JSON.stringify({
      number,
      message: `Here's a random number: ${number}`,
    })
  );
}
