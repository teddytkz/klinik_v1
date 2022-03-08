import { prisma } from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const getReferral = await prisma.referral.findMany()
            res.status(200).json({ message: "Success Get Referral", data: getReferral })
        } catch (err) {
            res.status(500).json({ message: "Failed Get Referral", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}