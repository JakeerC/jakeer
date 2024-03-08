import { Metadata } from 'next';

import Blog from '@/app/blog/Blog';
import { getAllBlogData } from '@/app/blog/getAllBlogData';
import { domain } from '@/constants/urls';

import { BlogFrontmatter } from '@/types/frontmatters';

export const metadata: Metadata = {
  title: 'Jakeer | Projects',
  description: `Showcase of blogs.`,
  metadataBase: new URL('/blog', domain),
};

export type BlogType = {
  posts: BlogFrontmatter[];
  tags: string[];
};
export default async function BlogWrapper() {
  const { posts, tags }: BlogType = await getAllBlogData();

  return (
    <main>
      <Blog posts={posts} tags={tags} />
    </main>
  );
}
