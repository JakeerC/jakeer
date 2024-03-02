import { getAllProjectsData } from '@/app/projects/getAllProjectsData';
import Projects from '@/app/projects/Projects';

import { ProjectFrontmatter } from '@/types/frontmatters';

export type ProjectsType = { projects: ProjectFrontmatter[] };

export default async function ProjectsPage() {
  const { projects }: ProjectsType = await getAllProjectsData();
  return <Projects projects={projects} />;
}
