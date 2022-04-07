import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { userToken } = req.cookies
        try {
            if (!userToken) {
                return res.status(401).json({ message: "Token Not Found" })
            }
            const removeToken = await res.setHeader('Set-Cookie', 'userToken=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
            const user = await prisma.user.findFirst({ where: { token: String(userToken) } })
            const deleteToken = await prisma.user.update({
                where: {
                    id: Number(user?.id)
                }, data: {
                    token: ''
                }
            })
            return res.status(200).json({ message: "Logout" })
        } catch (err) {
            return res.status(500).json({ message: "Error", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }

}