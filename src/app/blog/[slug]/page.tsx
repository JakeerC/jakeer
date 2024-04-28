import { generateCloudinaryImgURL } from '@/lib/helper';

import { getPostData } from '@/app/blog/[slug]/helper';
import Post from '@/app/blog/[slug]/Post';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

export type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

import { Metadata } from 'next';

import { og } from '@/lib/og';

import { commonMetaKeywords, twitterUserId } from '@/constants';

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = await getPostData({ params });

  const { title, description, banner, tags } = frontmatter;
  const tagsList = tags?.split(',');
  const keywords = [...tagsList, ...commonMetaKeywords];
  const bannerURL = generateCloudinaryImgURL({
    publicId: `banner/${banner}`,
    aspect: { height: 2, width: 5 },
    quality: 10,
  });

  return {
    title,
    description,
    keywords,
    twitter: {
      title,
      card: 'summary_large_image',
      site: twitterUserId,
      creator: twitterUserId,
      description,
      images: bannerURL,
    },
    openGraph: {
      tags: keywords,
      images: [
        og({
          ogType: 'article',
          articleType: 'blog',
          templateTitle: title,
          banner: bannerURL,
        }),
      ],
    },
    category: 'article',
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
