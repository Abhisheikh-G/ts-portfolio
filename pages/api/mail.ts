import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { IEmail } from "../../@types";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message, token } = JSON.parse(req.body) as IEmail;
      if (!token || !token.success) {
        res.status(404).json({
          err: true,
          msg: "Please fill out the captcha again to prove you are human - thanks!",
        });
      }
      if (!name || !email || !message) {
        res.status(404).json({
          msg: "Unable to send your message, please ensure all fields are filled out.",
          err: true,
        });
      }

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
        subject: `New email from ${email} - ${name}`,
        text: message,
      };
      let result: SMTPTransport.SentMessageInfo = await transporter.sendMail(
        options
      );
      console.log(result);
      res.status(200).json({
        msg: "Message sent successfully, I will reach out to you soon",
        succcess: true,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Something went wrong.. Please try again or contact me on LinkedIn - thanks!",
        err: true,
      });
    }
  }
}
