import { NextApiRequest, NextApiResponse } from 'next';
import svgCaptcha from 'svg-captcha';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const captcha = svgCaptcha.create({
            size: 6, 
            noise: 3,
            color: true,
            background: '#ccf2ff',
        });

        res.status(200).json({ data: captcha.data });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
 