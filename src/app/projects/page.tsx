import { Metadata } from 'next';

import { getAllProjectsData } from '@/app/projects/getAllProjectsData';
import Projects from '@/app/projects/Projects';
import { domain } from '@/constants/urls';

import { ProjectFrontmatter } from '@/types/frontmatters';

export type ProjectsType = { projects: ProjectFrontmatter[] };

export const metadata: Metadata = {
  title: 'Jakeer | Projects',
  description: `Showcase of projects which i built and contributed to.`,
  metadataBase: new URL('/projects', domain),
};

export default async function ProjectsPage() {
  const { projects }: ProjectsType = await getAllProjectsData();
  return <Projects projects={projects} />;
}
