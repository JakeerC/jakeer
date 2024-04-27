/* Bismillah ir rahman ir rahim */
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import Script from 'next/script';

import '@/styles/globals.css';
import '@/styles/mdx.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { Providers } from '@/app/providers';
import { commonMetaKeywords } from '@/constants';
import { domain } from '@/constants';

const rubik = Rubik({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0e1111' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export const metadata: Metadata = {
  title: 'Jakeer | Personal Website',
  description: 'Personal Website of Jakeer.',
  applicationName: 'Jakeer Personal Site',
  authors: [{ name: 'JakeerC', url: domain }],
  creator: 'Jakeer',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', ...commonMetaKeywords],
  metadataBase: new URL('/', domain),
  // themeColor: [ // * moved this part to viewport
  //   { media: '(prefers-color-scheme: dark)', color: '#0e1111' },
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  // ],
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
      <body className={clsx(rubik.className, 'bg-white dark:bg-dark')}>
        <Providers>
          <Header />
          <div id="skip-nav">{children}</div>
          <Footer />
        </Providers>
        <Script
          defer={true}
          src="https://analytics.us.umami.is/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''}
        />
      </body>
    </html>
  );
}
