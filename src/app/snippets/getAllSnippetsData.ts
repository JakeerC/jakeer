import { getTags, sortByTitle } from '@/lib/mdx.client';
import { getAllFilesFrontmatter } from '@/lib/mdx.server';

export async function getAllSnippetsData() {
  const files = await getAllFilesFrontmatter('library');
  const snippets = sortByTitle(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(snippets);

  return { snippets, tags };
}
