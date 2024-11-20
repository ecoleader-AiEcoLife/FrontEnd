// middleware.ts
import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const protectedPaths = ['/board', '/map', '/chatbot']

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // 보호된 경로 체크
  if (protectedPaths.some(protectedPath => path.startsWith(protectedPath))) {
    const session = await auth()
    
    if (!session) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', path)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/board/:path*',
    '/map/:path*',
    '/chatbot/:path*'
  ]
}