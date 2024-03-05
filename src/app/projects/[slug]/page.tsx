import { getProjectData } from '@/app/projects/[slug]/helper';
import Project from '@/app/projects/[slug]/Project';

import { ProjectType } from '@/types/frontmatters';

export default async function ProjectPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { frontmatter, code }: ProjectType = await getProjectData({
    params,
  });
  return (
    <Project code={code} frontmatter={frontmatter} key={frontmatter?.slug} />
  );
}
