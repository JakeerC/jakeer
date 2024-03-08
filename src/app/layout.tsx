/* Bismillah ir rahman ir rahim */
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import './mdx.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { Providers } from '@/app/providers';
import { domain } from '@/constants/urls';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jakeer | Personal Website',
  description: 'Personal Website of Jakeer.',
  applicationName: 'Jakeer Personal Site',
  authors: [{ name: 'JakeerC', url: domain }],
  creator: 'Jakeer',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  metadataBase: new URL('/', domain),
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0e1111' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  robots: 'follow, index',
  openGraph: { images: ['/favicon/large-og.jpeg'] },
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
