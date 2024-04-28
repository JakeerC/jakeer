import { Metadata } from 'next';

import { og } from '@/lib/og';

import { getAllProjectsData } from '@/app/projects/getAllProjectsData';
import Projects from '@/app/projects/Projects';
import { projectsDesc } from '@/constants';
import { domain } from '@/constants';

import { ProjectFrontmatter } from '@/types/frontmatters';

export type ProjectsType = { projects: ProjectFrontmatter[] };

export const metadata: Metadata = {
  title: 'Jakeer | Projects',
  description: projectsDesc,
  metadataBase: new URL('/projects', domain),
  openGraph: {
    type: 'website',
    url: `${domain}/projects`,
    title: 'Jakeer',
    description: projectsDesc,
    siteName: 'Jakeer Personal Site',
    images: [
      {
        url: og({
          siteName: 'Jakeer Projects',
          ogType: 'gradient',
          description: projectsDesc,
        }),
      },
    ],
  },
};

export default async function ProjectsPage() {
  const { projects }: ProjectsType = await getAllProjectsData();
  return <Projects projects={projects} />;
}
