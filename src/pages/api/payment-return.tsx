// pages/api/payment-callback.js
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { Status } = req.query;

  // 检查支付状态
  if (Status === "SUCCESS") {
    // 处理支付成功的逻辑
    // 例如，更新数据库，记录交易信息等

    // 重定向到成功页面
    res.redirect("https://nu-cares.vercel.app/");
  } else {
    // 处理支付失败的逻辑
    res.redirect("https://nu-cares.vercel.app/nutritionist-list");
  }
}
