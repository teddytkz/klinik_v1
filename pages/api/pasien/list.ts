import { prisma } from '../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import authorization from '../../../middlewares/authorization'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {

        const auth = await authorization(req, res)

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
            getPasien.forEach((element: any) => {
                let tanggal_lahir = new Date(element.tanggal_lahir)
                let tgl_lahir_day = ('0' + tanggal_lahir.getDate()).slice(-2)
                let tgl_lahir_month = ('0' + (tanggal_lahir.getMonth() + 1)).slice(-2)
                let tgl_lahir_year = tanggal_lahir.getFullYear()
                let tgl_lahir_full = tgl_lahir_year + '/' + tgl_lahir_month + '/' + tgl_lahir_day
                dataPasien.push({
                    'nomor_rm': String(element.id).padStart(6, "0"),
                    'name': element.name,
                    'no_telepon': element.no_telepon,
                    'alamat': element.alamat,
                    'tanggal_lahir': tgl_lahir_full,
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