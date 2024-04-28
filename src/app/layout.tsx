/* Bismillah ir rahman ir rahim */
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Rubik } from 'next/font/google';
import Script from 'next/script';

import '@/styles/globals.css';
import '@/styles/mdx.css';

import { og } from '@/lib/og';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { Providers } from '@/app/providers';
import {
  applicationName,
  commonMetaKeywords,
  defaultTitle,
  homeDesc,
  THEME_COLOR_DARK,
  THEME_COLOR_LIGHT,
  twitterUserId,
} from '@/constants';
import { domain } from '@/constants';

const rubik = Rubik({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: THEME_COLOR_DARK },
    { media: '(prefers-color-scheme: light)', color: THEME_COLOR_LIGHT },
  ],
};

export const metadata: Metadata = {
  title: defaultTitle,
  description: 'Personal Website of Jakeer.',
  applicationName: applicationName,
  authors: [{ name: 'JakeerC', url: domain }],
  creator: 'Jakeer',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', ...commonMetaKeywords],
  metadataBase: new URL('/', domain),
  robots: 'follow, index',
  twitter: {
    title: defaultTitle,
    card: 'summary_large_image',
    site: twitterUserId,
    creator: twitterUserId,
    description: homeDesc,
    images: og({
      siteName: applicationName,
      ogType: 'gradient',
      description: homeDesc,
    }),
  },
  openGraph: {
    siteName: applicationName,
    images: ['/favicon/large-og.jpeg'],
  },
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
