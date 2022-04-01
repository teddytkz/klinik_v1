import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function listUser(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        try {
            const listUser = await prisma.user.findMany()
            let dataUser: any[] = []
            listUser.forEach((element: any) => {
                dataUser.push({
                    'name': element.name,
                    'email': element.email
                })
            })
            res.status(200).json({ message: "Success List User", data: dataUser })
        } catch (error) {
            res.status(500).json({ message: "Failed Get Pasien", data: error })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}