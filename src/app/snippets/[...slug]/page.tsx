import { Metadata, ResolvingMetadata } from 'next';

import { generateCloudinaryImgURL } from '@/lib/helper';
import { og } from '@/lib/og';

import { getSnippetData } from '@/app/snippets/[...slug]/helper';
import SingleSnippetPage from '@/app/snippets/[...slug]/Snippet';
import { commonMetaKeywords } from '@/constants';

import { SnippetType } from '@/types/frontmatters';

type PropsType = {
  params: { slug: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: PropsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getSnippetData({ params });

  const { title, description, banner, tags } = frontmatter;
  const tagsList = tags?.split(',');
  const keywords = [...tagsList, ...commonMetaKeywords];

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
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
      site: '@jakeerchilakala',
      creator: '@jakeerchilakala',
      description,
      images: bannerURL,
    },
    openGraph: {
      tags: keywords,
      images: [
        ...previousImages,
        og({
          ogType: 'article',
          articleType: 'snippets',
          templateTitle: title,
          banner: bannerURL,
        }),
      ],
    },
    category: 'article',
  };
}

export default async function PostPage({ params }: PropsType) {
  const { frontmatter, code }: SnippetType = await getSnippetData({ params });
  return (
    <SingleSnippetPage
      code={code}
      frontmatter={frontmatter}
      key={frontmatter?.slug}
    />
  );
}
