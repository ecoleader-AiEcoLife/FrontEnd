// middleware.ts
import { auth } from '@/app/auth'

export const runtime = 'nodejs' // Edge Runtime 대신 Node.js 런타임 사용
 
export const middleware = auth
 
export const config = {
  matcher: [
    '/map/:path*',
    '/board/:path*',
    '/chatbot/:path*',
  ]
}