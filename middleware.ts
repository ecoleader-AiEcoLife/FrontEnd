// middleware.ts
import { auth } from "@/app/auth"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth()
  
  // 보호된 경로에 접근하려고 할 때
  if (!session) {
    const loginUrl = new URL('/login', request.url)
    // 현재 접근하려던 URL을 callbackUrl로 추가
    loginUrl.searchParams.set('callbackUrl', request.url)
    return NextResponse.redirect(loginUrl)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/map/:path*',
    '/board/:path*',
    '/chatbot/:path*',
  ]
}