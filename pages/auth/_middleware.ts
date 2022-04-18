import { NextPageContext } from 'next'
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest, ctx: NextPageContext) {
    const { userToken } = req.cookies
    const url = req.nextUrl.clone()
    if (!userToken) {
        url.pathname = '/auth/login'
        return NextResponse.rewrite(url)
    } else {
        const cookie = ctx.req?.headers.cookie
        const token = await fetch('http://localhost:3000/api/auth/token', {
            method: "post",
            headers: {
                cookie: cookie!
            }
        })
        const tokens = await token.json()
        if (token.status != 200) {
            url.pathname = '/api/auth/logout'
            return NextResponse.rewrite(url)
        }

        url.pathname = '/dashboard'
        return NextResponse.rewrite(url)
    }
}