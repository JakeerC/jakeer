import { Metadata } from 'next';
import * as React from 'react';

import { og } from '@/lib/og';

import Accent from '@/components/Accent';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';

import { applicationName, domain, homeDesc, sourceCodeRepo } from '@/constants';

export const metadata: Metadata = {
  title: 'Guestbook',
  openGraph: {
    type: 'website',
    url: `${domain}/guestbook`,
    title: 'Jakeer Guestbook',
    description: homeDesc,
    siteName: applicationName,
    images: [
      {
        url: og({
          siteName: 'Jakeer Guestbook',
          ogType: 'gradient',
          description: homeDesc,
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
          <p className="mt-2 text-slate-700 dark:text-slate-200">
            Leave whatever you like to say—message, appreciation, suggestions.
            If you got some questions, you can leave them on the
            <CustomLink href={`${sourceCodeRepo}/discussions/categories/ama`}>
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
