import { NextApiRequest, NextApiResponse } from 'next'

export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
    console.log('a')
}