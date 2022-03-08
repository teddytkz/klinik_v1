import { prisma } from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, description } = req.body
        try {
            const addReferral = await prisma.referral.create({
                data: {
                    name: String(name),
                    description: String(description)
                }
            })
            res.status(200).json({ message: "Success Add Referral", data: addReferral })
        } catch (err) {
            res.status(500).json({ message: "Failed Add Referral", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}