import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  debug: true,
});

const mail = async ({ name, email, message }) => {
  try {
    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: `jmorrison.m44@gmail.com`,
      subject: `${name} wants to get in contact!`,
      text: `${message}`,
    });
    console.log(info);
  } catch (err) {
    console.error(err);
  }
};

export default mail;
