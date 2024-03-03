import { getPostData } from '@/app/blog/[slug]/helper';
import Post from '@/app/blog/[slug]/Post';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

export type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { frontmatter, code, recommendations } = await getPostData({ params });
  return (
    <Post
      code={code}
      frontmatter={frontmatter}
      recommendations={recommendations}
      key={frontmatter?.slug}
    />
  );
}
