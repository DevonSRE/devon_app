// pages/api/send-email.js
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_PUBLIC_KEY,
  process.env.MAILJET_API_PRIVATE_KEY
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, message } = req.body;

    if (!firstname || !lastname || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const request = mailjetClient.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: email, // Replace with your email
              Name: lastname // Replace with your name
            },
            To: [
              {
                Email: 'nkechinyere.nzeamalu.247504@unn.edu.ng', // Replace with recipient's email
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
      return res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Mailjet Error:', error.response?.data || error);
      return res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}



