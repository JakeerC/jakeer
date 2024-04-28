import { Metadata } from 'next';
import * as React from 'react';

import { og } from '@/lib/og';

import { getAllSnippetsData } from '@/app/snippets/getAllSnippetsData';
import Snippets from '@/app/snippets/Snippets';
import { snippetsDesc } from '@/constants';
import { domain } from '@/constants';

import { SnippetFrontmatter } from '@/types/frontmatters';

export const metadata: Metadata = {
  title: 'Snippets',
  description: snippetsDesc,
  metadataBase: new URL('/snippets/**', domain),
  openGraph: {
    type: 'website',
    url: `${domain}/projects`,
    title: 'Jakeer',
    description: snippetsDesc,
    siteName: 'Jakeer Personal Site',
    images: [
      {
        url: og({
          siteName: 'Short Code Snippets and Configurations',
          ogType: 'gradient',
          description: snippetsDesc,
        }),
      },
    ],
  },
};

export type SnippetsType = {
  snippets: SnippetFrontmatter[];
  tags: string[];
};

export default async function ShortsPage() {
  const { snippets, tags }: SnippetsType = await getAllSnippetsData();

  return <Snippets snippets={snippets} tags={tags} />;
}
