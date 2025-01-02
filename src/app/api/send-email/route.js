// pages/api/send-email.js

/*
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_PUBLIC_KEY,
  process.env.MAILJET_API_PRIVATE_KEY
);

const mailjet = require('node-mailjet').connect(
  PUBLIC_KEY,
  PRIVATE_KEY,
)
*/

const PUBLIC_KEY = process.env.MAILJET_API_PUBLIC_KEY;
const PRIVATE_KEY = process.env.MAILJET_API_PRIVATE_KEY;

const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: PUBLIC_KEY || 'your-api-key',
  apiSecret: PRIVATE_KEY || 'your-api-secret'
});


const sendEmail = (email, firstname, lastname, message, phone) => {
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: email, // Replace with your email
            Name: lastname // Replace with your name
          },
          To: [
            {
              Email: 'info@devontech.io', // Replace with recipient's email
              Name: 'Devon Technologies', // Replace with recipient's name
            },
          ],
          Subject: 'New Form Submission',
          TextPart: `You have a new message from ${firstname} ${lastname} (${email} - ${phone}):\n\n${message}`,
          HTMLPart: `<p>You have a new message from <strong>${lastname}</strong> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
        },
      ],
    });

  return request
    .then((result) => {
      // console.log(result.body);
      return result.body;
    })
    .catch((err) => {
      // console.log(err.statusCode);
      throw new Error(err.statusCode);
      // return err.statusCode;
    });
};


// export default async function handler(req, res) {
export async function POST(req) {
  const { firstname, lastname, email, phone, message } = await req.json();

  if (!firstname || !lastname || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
      status: 400,
    });
    // return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    sendEmail(email, firstname, lastname, message, phone);

    /*
    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: email, // Replace with your email
            Name: lastname // Replace with your name
          },
          To: [
            {
              Email: 'godswill@devontech.io', // Replace with recipient's email
              Name: 'Devon Technologies', // Replace with recipient's name
            },
          ],
          Subject: 'New Form Submission',
          TextPart: `You have a new message from ${lastname} (${email}):\n\n${message}`,
          HTMLPart: `<p>You have a new message from <strong>${lastname}</strong> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
        },
      ],
    });

    await request;
    */
    return new Response(JSON.stringify({ message: 'Email sent successfully.' }), {
      status: 200,
    });

    // return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Mailjet Error:', error.response?.data || error);
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
    });
    // return res.status(500).json({ error: 'Failed to send email.' });
  }
}
