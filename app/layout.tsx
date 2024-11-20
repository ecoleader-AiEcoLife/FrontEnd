import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/auth/AuthProvider';
import Nav from '@/components/navbar/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '에디 재활용 지키미',
  description: 'Eco recycle AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
