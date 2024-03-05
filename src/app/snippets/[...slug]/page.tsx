import { getSnippetData } from '@/app/snippets/[...slug]/helper';
import SingleSnippetPage from '@/app/snippets/[...slug]/Snippet';

import { SnippetType } from '@/types/frontmatters';

export default async function PostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { frontmatter, code }: SnippetType = await getSnippetData({ params });
  return (
    <SingleSnippetPage
      code={code}
      frontmatter={frontmatter}
      key={frontmatter?.slug}
    />
  );
}
