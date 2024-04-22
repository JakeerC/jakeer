import { format } from 'date-fns';
import { MetadataRoute } from 'next';

import { getAllFilesFrontmatter } from '@/lib/mdx.server';

import { primaryNavLinks, secondaryNavLinks } from '@/constants/navLinks';
import { domain } from '@/constants/urls';

const today = ((): Date => {
  const d = new Date();
  // Colombia TimeZone (UTC-5)
  d.setUTCHours(-5);
  return d;
})();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogFiles = await getAllFilesFrontmatter('blog');
  const blogs = blogFiles.map(post => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: format(
      new Date(post?.lastUpdated ?? post.publishedAt),
      'yyyy-mm-dd'
    ),
    priority: 0.6,
  }));
  const projectFiles = await getAllFilesFrontmatter('projects');
  const projects = projectFiles.map(post => ({
    url: `${domain}/projects/${post.slug}`,
    lastModified: format(
      new Date(post?.lastUpdated ?? post.publishedAt),
      'yyyy-mm-dd'
    ),
    priority: 0.6,
  }));
  const snippetFiles = await getAllFilesFrontmatter('snippets');
  const snippets = snippetFiles.map(post => ({
    url: `${domain}/snippets/${post.slug}`,
    lastModified: today.toISOString().split('T')[0],
    priority: 0.6,
  }));

  const routes = [...primaryNavLinks, ...secondaryNavLinks]
    .filter(link => link.show)
    .map(link => link.href)
    .map(route => ({
      url: `${domain}${route}`,
      lastModified: today.toISOString().split('T')[0],
      priority: route ? 0.8 : 1,
    }));

  return [...routes, ...blogs, ...projects, ...snippets].sort(
    (a, b) => (b.priority || 0) - (a.priority || 0)
  );
}
