import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
    const { userToken } = req.cookies

    const url = req.nextUrl.clone()

    if (!userToken) {
        url.pathname = '/auth/login'
        return NextResponse.rewrite(url)
    } else {
        url.pathname = '/dashboard'
        return NextResponse.rewrite(url)
    }
}