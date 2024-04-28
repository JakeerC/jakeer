import { Metadata } from 'next';

import { og } from '@/lib/og';

import Blog from '@/app/blog/Blog';
import { getAllBlogData } from '@/app/blog/getAllBlogData';
import { blogDesc } from '@/constants';
import { domain } from '@/constants';

import { BlogFrontmatter } from '@/types/frontmatters';

export const metadata: Metadata = {
  title: 'Blog',
  description: blogDesc,
  openGraph: {
    type: 'article',
    url: `${domain}/blog`,
    title: "Jakeer's blog",
    description: blogDesc,
    siteName: 'Jakeer Personal Site',
    images: [
      {
        url: og({
          siteName: 'Jakeer Personal Site',
          ogType: 'gradient',
          description:
            ' Thoughts and tutorials about front-end development and design.',
        }),
      },
    ],
  },
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
