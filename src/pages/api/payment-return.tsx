import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const status = req.body.Status;
    if (status === "SUCCESS") {
      res.redirect(302, "/success-order");
      console.log("成功");
    } else {
      res.redirect(302, "/failure-order");
      console.log("失敗");
    }
  } else {
    // 不處理get請求
    res.status(405).end();
  }
}
