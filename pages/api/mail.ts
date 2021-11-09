import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface IEmail {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const { name, subject, email, message } = JSON.parse(req.body) as IEmail;
      let transporter: Transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_NAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      let options = {
        from: process.env.EMAIL_NAME,
        to: process.env.EMAIL_NAME,
        subject: `${email}- ${name} - ${subject}`,
        text: message,
      };
      let result: SMTPTransport.SentMessageInfo = await transporter.sendMail(
        options
      );

      console.log(result);

      res.status(200).end();
    } catch (error) {
      res.status(400).end();
    }
  }
}
