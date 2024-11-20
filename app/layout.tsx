import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import { AuthProvider } from './Providers';
import { SessionProvider } from 'next-auth/react';

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
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
