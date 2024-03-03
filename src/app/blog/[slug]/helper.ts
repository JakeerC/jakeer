import { ParsedUrlQuery } from 'querystring';

import {
  getFileBySlug,
  getFileSlugArray,
  getRecommendations,
} from '@/lib/mdx.server';

export const generateStaticParams = async () => {
  const posts = await getFileSlugArray('blog');

  return {
    paths: posts.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

interface ParamsType extends ParsedUrlQuery {
  slug: string;
}
export const getPostData = async ({ params }: { params: ParamsType }) => {
  const { slug } = params;

  const post = await getFileBySlug('blog', slug);
  const recommendations = await getRecommendations(slug);

  return { ...post, recommendations };
};
