import { Metadata, ResolvingMetadata } from 'next';

import { generateCloudinaryImgURL } from '@/lib/helper';

import { getProjectData } from '@/app/projects/[slug]/helper';
import Project from '@/app/projects/[slug]/Project';

import { ProjectType } from '@/types/frontmatters';

type PropsType = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: PropsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getProjectData({ params });

  const { title, description, banner, tags } = frontmatter;
  const keywords = tags?.split(',');
  const imgURL = generateCloudinaryImgURL({
    publicId: `banner/${banner}`,
    aspect: { height: 2, width: 5 },
  });
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      tags: keywords,
      images: [...previousImages, imgURL],
    },
    category: 'blog',
  };
}

export default async function ProjectPage({ params }: PropsType) {
  const { frontmatter, code }: ProjectType = await getProjectData({
    params,
  });
  return (
    <Project code={code} frontmatter={frontmatter} key={frontmatter?.slug} />
  );
}
