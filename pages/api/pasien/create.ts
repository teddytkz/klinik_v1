import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, tanggal_lahir, no_telepon, alamat, referral_id, user } = req.body
        try {
            const createPasien = await prisma.pasien.create({
                data: {
                    name: name,
                    tanggal_lahir: new Date(tanggal_lahir),
                    no_telepon: no_telepon,
                    alamat: alamat,
                    referral_id: Number(referral_id),
                    created_by: user
                }
            })
            res.status(200).json({ message: "Success Create Pasien", data: createPasien })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Error Create Pasien", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}