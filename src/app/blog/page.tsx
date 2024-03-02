import Blog from '@/app/blog/Blog';
import { getAllBlogData } from '@/app/blog/getAllBlogData';

import { BlogFrontmatter } from '@/types/frontmatters';

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
