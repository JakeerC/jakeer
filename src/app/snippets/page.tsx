import * as React from 'react';

import { getAllSnippetsData } from '@/app/snippets/getAllSnippetsData';
import Snippets from '@/app/snippets/Snippets';

import { LibraryFrontmatter } from '@/types/frontmatters';

export type SnippetsType = {
  snippets: LibraryFrontmatter[];
  tags: string[];
};

export default async function ShortsPage() {
  const { snippets, tags }: SnippetsType = await getAllSnippetsData();

  return <Snippets snippets={snippets} tags={tags} />;
}
