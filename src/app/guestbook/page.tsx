import { Metadata } from 'next';
import * as React from 'react';

import { og } from '@/lib/og';

import Accent from '@/components/Accent';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';

import { domain } from '@/constants/urls';

export const metadata: Metadata = {
  title: 'Guestbook',
  description:
    'Leave whatever you like to say—message, appreciation, suggestions.',
  openGraph: {
    type: 'website',
    url: `${domain}/guestbook`,
    title: 'Jakeer Guestbook',
    description:
      'Leave whatever you like to say—message, appreciation, suggestions.',
    siteName: 'Jakeer Personal Site',
    images: [
      {
        url: og({
          siteName: 'Jakeer Guestbook',
          ogType: 'gradient',
          description:
            'Leave whatever you like to say—message, appreciation, suggestions.',
        }),
      },
    ],
  },
};
export default function GuestbookPage() {
  return (
    <main>
      <section className="">
        <div className="layout py-20">
          <h1>
            <Accent>Guestbook</Accent>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            Leave whatever you like to say—message, appreciation, suggestions.
            If you got some questions, you can leave them on the{' '}
            <CustomLink href="https://github.com/jakeerc/jakeer/discussions/categories/ama">
              AMA discussion
            </CustomLink>
          </p>
          <figure className="mt-12">
            <Discussions
              category="Guestbook"
              categoryId="DIC_kwDOLXQEVc4CdxQR"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
