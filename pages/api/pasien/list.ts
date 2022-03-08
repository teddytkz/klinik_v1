import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const getPasien = await prisma.pasien.findMany({
                include: {
                    referral: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            })
            let dataPasien: any[] = []
            getPasien.forEach((element) => {
                dataPasien.push({
                    'nomor_rm': String(element.id).padStart(6, "0"),
                    'name': element.name,
                    'no_telepon': element.no_telepon,
                    'alamat': element.alamat,
                    'tanggal_lahir': element.tanggal_lahir,
                    'referral_id': element.referral.id,
                    'referral_name': element.referral.name
                })
            })
            res.status(200).json({ message: "Success Get Pasien", data: dataPasien })
        } catch (err) {
            res.status(500).json({ message: "Failed Get Pasien", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}