import { auth } from '@/auth'
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPaths = ['/board', '/map', '/chatbot']

export async function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname

    if (protectedPaths.some(protectedPath => path.startsWith(protectedPath))) {
      const session = await auth()
      
      if (!session) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('callbackUrl', path)
        return NextResponse.redirect(loginUrl)
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    // 에러 발생 시에도 로그인 페이지로 리다이렉트
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: [
    '/board/:path*',
    '/map/:path*',
    '/chatbot/:path*'
  ]
}