import { prisma } from '../../../../lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function detailsPasien(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    if (req.method === 'GET') {
        try {
            const getPasien = await prisma.pasien.findUnique(
                {
                    where: {
                        id: Number(id)
                    },
                    include: {
                        referral: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            )
            let dataPasien: any[] = []

            let tanggal_lahir = new Date(getPasien.tanggal_lahir)
            let tgl_lahir_day = ('0' + tanggal_lahir.getDate()).slice(-2)
            let tgl_lahir_month = ('0' + (tanggal_lahir.getMonth() + 1)).slice(-2)
            let tgl_lahir_year = tanggal_lahir.getFullYear()
            let tgl_lahir_full = tgl_lahir_year + '/' + tgl_lahir_month + '/' + tgl_lahir_day

            dataPasien.push({
                'nomor_rm': String(getPasien.id).padStart(6, "0"),
                'name': getPasien.name,
                'no_telepon': getPasien.no_telepon,
                'alamat': getPasien.alamat,
                'tanggal_lahir': tgl_lahir_full,
                'referral_id': getPasien.referral.id,
                'referral_name': getPasien.referral.name
            })

            res.status(200).json({ message: "Success Get Pasien", data: dataPasien })
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Failed Get Pasien", data: err })
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" })
    }
}