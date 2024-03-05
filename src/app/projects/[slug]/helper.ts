import { ParsedUrlQuery } from 'querystring';

import { getFileBySlug, getFileSlugArray } from '@/lib/mdx.server';

export const generateStaticParams = async () => {
  const posts = await getFileSlugArray('projects');

  return {
    paths: posts.map(slug => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

interface ParamsType extends ParsedUrlQuery {
  slug: string;
}
export const getProjectData = async ({ params }: { params: ParamsType }) => {
  const { slug } = params as ParamsType;
  const post = await getFileBySlug('projects', slug);

  return { ...post };
};
