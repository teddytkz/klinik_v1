import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { username, password } = req.body
        try {
            const user = await prisma.user.findFirst({
                where: {
                    username: username
                }
            })
            if (!user) {
                return res.status(401).json({ message: "Username or Password Not Macth" })
            }
            const check_password = await bcrypt.compare(password, String(user.password))
            if (!check_password) {
                return res.status(401).json({ message: "Username or Password Not Macth" })
            }
            const userAccessToken = jwt.sign({
                username: String(user.username),
                email: String(user.email),
                phone: String(user.phone)
            }, String(process.env.ACCESS_TOKEN_SECRET), {
                expiresIn: '5m'
            })
            const userRefreshToken = jwt.sign({
                username: String(user.username),
                email: String(user.email),
                phone: String(user.phone)
            }, String(process.env.REFRESH_TOKEN_SECRET), {
                expiresIn: '1d'
            })

            res.setHeader(
                'Set-Cookie',
                serialize('userToken', userRefreshToken, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                    secure: false,
                    // secure: process.env.NODE_ENV === "production",
                    path: '/',
                    sameSite: 'lax'
                }),
            );

            const updateRefreshToken = await prisma.user.update({
                where: {
                    id: Number(user.id)
                },
                data: {
                    token: String(userRefreshToken)
                }
            })

            res.json({
                message: "Success Login",
                data: {
                    token: userRefreshToken
                }
            })
        } catch (err) {
            res.status(500).json({ message: "Failed To Login", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}