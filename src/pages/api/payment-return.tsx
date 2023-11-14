// pages/api/payment-callback.js
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const status = req.body.Status;
    if (status === "SUCCESS") {
      res.redirect(302, "/");
      console.log("成功");
    } else {
      res.redirect(302, "/nutritionist-list");
      console.log("失敗");
    }
  } else {
    // 不處理get請求
    res.status(405).end();
  }
}
