import type { NextApiRequest, NextApiResponse } from "next";

const VERIFY_URL = "https://hcaptcha.com/siteverify";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { token } = JSON.parse(req.body) as { token: string };
      const verifyResponse = await fetch(VERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.HCAPTCHA_SECRET}&response=${token}`,
      });
      const verifyData = await verifyResponse.json();
      if (verifyData.success) {
        res.status(200).end();
      } else {
        res.status(400).end();
      }
    } catch (error) {
      res.status(400).end();
    }
  }
}
