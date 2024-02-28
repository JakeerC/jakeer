import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx.server';
import { generateRss } from '@/lib/rss';

export async function getFeaturedData() {
  generateRss();

  const blogs = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('projects');
  const shorts = await getAllFilesFrontmatter('library');

  const featuredPosts = getFeatured(blogs, [
    '2023-retrospective',
    'fully-reusable-components',
    'react-core-concept-rendering-state',
    'nextjs-auth-hoc',
    'nextjs-boilerplate-2023',
    'nextjs-fetch-method',
  ]);
  const featuredProjects = getFeatured(projects, ['notiolink']);
  const featuredShorts = getFeatured(shorts, [
    'react/absolute-import',
    'mac/zsh',
    'styling/margin-usage',
    'uncategorized/search-removal',
  ]);

  const introPosts = getFeatured(blogs, [
    '2023-retrospective',
    'fully-reusable-components',
  ]);

  return {
    featuredPosts,
    featuredProjects,
    featuredShorts,
    introPosts,
  };
}
