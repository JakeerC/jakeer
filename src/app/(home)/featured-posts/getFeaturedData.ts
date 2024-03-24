import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx.server';
import { generateRss } from '@/lib/rss';

export async function getFeaturedData() {
  generateRss();

  const blogs = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('projects');
  const snippets = await getAllFilesFrontmatter('snippets');

  const featuredPosts = getFeatured(blogs, [
    'fully-reusable-components',
    'nextjs-boilerplate-2023',
    'react-core-concept-rendering-state',
    'nextjs-auth-hoc',
    'nextjs-fetch-method',
  ]);
  const featuredProjects = getFeatured(projects, ['notiolink']);
  const featuredSnippets = getFeatured(snippets, [
    'react/absolute-import',
    'mac/zsh',
    'styling/margin-usage',
    'uncategorized/search-removal',
  ]);

  const introPosts = getFeatured(blogs, [
    'nextjs-auth-hoc',
    'fully-reusable-components',
  ]);

  return {
    featuredPosts,
    featuredProjects,
    featuredSnippets,
    introPosts,
  };
}
