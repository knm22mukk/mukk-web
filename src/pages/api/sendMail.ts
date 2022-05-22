import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  const data = JSON.parse(req.body);
  await transporter.sendMail({
    from: process.env.MAIL_ADDRESS,
    to: process.env.MAIL_ADDRESS,
    subject: '以下の内容でお問い合わせを受け付けました',
    text: `
    名前
    ${data.name}
    
    メールアドレス
    ${data.email}
    
    お問い合わせ内容
    ${data.msg}
    `,
  });

  res.status(200).json({
    success: true,
  });
};

export default sendMail;
