import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD
    })
}