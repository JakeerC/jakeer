/* Bismillah ir rahman ir rahim */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jakeer | Personal Website',
  description: 'Personal Website of Jakeer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
