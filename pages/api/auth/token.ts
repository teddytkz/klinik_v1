import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { serialize, } from 'cookie';
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userToken } = req.cookies
        if (!userToken) {
            return res.status(401).json({ message: "Token Not Found" })
        }
        const user = await prisma.user.findFirst({
            where: {
                token: userToken
            }
        })
        if (!user) {
            return res.status(401).json({ message: "Token Not Valid" })
        }

        const verifyToken = jwt.verify(
            userToken,
            String(process.env.REFRESH_TOKEN_SECRET),
            (error, data) => {
                if (!error) {
                    console.log(data)
                } else {
                    return res.status(401).json({ message: "Token Not Cant Verify" })
                }
            }
        )

        const userAccessToken = jwt.sign({
            username: String(user.username),
            email: String(user.email),
            phone: String(user.phone)
        }, String(process.env.ACCESS_TOKEN_SECRET), {
            expiresIn: '20s'
        })

        res.json({
            message: "Success Refresh Token",
            data: {
                token: userAccessToken
            }
        })
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }

}