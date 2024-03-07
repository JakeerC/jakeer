/* Bismillah ir rahman ir rahim */
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import './mdx.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
      <body className={clsx(inter.className, 'bg-white dark:bg-dark')}>
        <Providers>
          <Header />
          <div id="skip-nav">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
