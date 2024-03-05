import { ParsedUrlQuery } from 'querystring';

import { getFileBySlug, getFileSlugArray } from '@/lib/mdx.server';

export const generateStaticParams = async () => {
  const snippets = await getFileSlugArray('snippets');

  return {
    paths: snippets.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export interface ParamsType extends ParsedUrlQuery {
  slug: string[];
}
export const getSnippetData = async ({ params }: { params: ParamsType }) => {
  const { slug } = params as ParamsType;
  const snippet = await getFileBySlug(`snippets`, slug.join('/'));

  return { ...snippet };
};
