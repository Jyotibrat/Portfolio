import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_APP_PASSWORD, 
      },
    });

    // Email options
    const mailOptions = {
      from: email, 
      to: process.env.EMAIL, 
      subject: subject || 'No Subject Provided',
      text: `You have a new message from:
      Name: ${name}
      Email: ${email}

      Message:
      ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}