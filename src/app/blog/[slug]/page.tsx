import { generateCloudinaryImgURL } from '@/lib/helper';

import { getPostData } from '@/app/blog/[slug]/helper';
import Post from '@/app/blog/[slug]/Post';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

export type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

import { Metadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getPostData({ params });

  const { title, description, banner, tags } = frontmatter;
  const keywords = tags?.split(',');
  const imgURL = generateCloudinaryImgURL({
    publicId: `banner/${banner}`,
    aspect: { height: 2, width: 5 },
  });
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      tags: keywords,
      images: [imgURL],
    },
    category: 'blog',
  };
}

export default async function PostPage({ params }: Props) {
  const { frontmatter, code, recommendations } = await getPostData({ params });
  return (
    <Post
      code={code}
      frontmatter={frontmatter}
      recommendations={recommendations}
      key={frontmatter?.slug}
    />
  );
}
