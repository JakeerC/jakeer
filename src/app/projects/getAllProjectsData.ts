import { sortByDate } from '@/lib/mdx.client';
import { getAllFilesFrontmatter } from '@/lib/mdx.server';

export async function getAllProjectsData() {
  const files = await getAllFilesFrontmatter('projects');
  const projects = sortByDate(files);

  return { projects };
}
