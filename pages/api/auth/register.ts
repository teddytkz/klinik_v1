import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password, name, email, phone } = req.body
        try {
            const salt = bcrypt.genSaltSync(10)
            const pass_hashes = bcrypt.hashSync(password, salt)

            const register = await prisma.user.create({
                data: {
                    username: username,
                    password: pass_hashes,
                    email: email,
                    name: name,
                    phone: phone
                }
            })
            res.status(200).json({ message: 'Success Add User', data: register })
        } catch (err) {
            res.status(403).json({ message: 'Failed To Register', data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }

}