import { Metadata } from 'next';
import * as React from 'react';

import { getAllSnippetsData } from '@/app/snippets/getAllSnippetsData';
import Snippets from '@/app/snippets/Snippets';
import { domain } from '@/constants/urls';

import { SnippetFrontmatter } from '@/types/frontmatters';

export const metadata: Metadata = {
  title: 'Jakeer | Snippets',
  description: `Short article on code snippets and configurations.`,
  metadataBase: new URL('/snippets/**', domain),
};

export type SnippetsType = {
  snippets: SnippetFrontmatter[];
  tags: string[];
};

export default async function ShortsPage() {
  const { snippets, tags }: SnippetsType = await getAllSnippetsData();

  return <Snippets snippets={snippets} tags={tags} />;
}
