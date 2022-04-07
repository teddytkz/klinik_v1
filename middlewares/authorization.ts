import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export default function authorization(req: NextApiRequest, res: NextApiResponse) {
    return new Promise((resolve, reject) => {
        const { authorization } = req.headers
        if (!authorization) {
            return res.status(401).end()
        }

        const authSplit = authorization.split(' ')
        const [authType, authToken] = [
            authSplit[0],
            authSplit[1]
        ]

        if (authType !== 'Bearer') {
            return res.status(401).end()
        }

        return jwt.verify(authToken, String(process.env.ACCESS_TOKEN_SECRET), function (err, decoded) {
            if (err) return res.status(401).end()
            return resolve(decoded)
        })

    })
}