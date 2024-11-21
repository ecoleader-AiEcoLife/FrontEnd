// middleware.ts
import { auth } from '@/app/auth'
 
export const middleware = auth
 
export const config = {
  matcher: [
    '/map/:path*',
    '/board/:path*',
    '/chatbot/:path*',
  ]
}