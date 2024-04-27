'use client';
import Giscus, { Repo, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';

import { commentFlag } from '@/constants';

type blogDiscussions = {
  category: 'Blog';
  categoryId: 'DIC_kwDOLXQEVc4CdxQe';
};
type snippetsDiscussions = {
  category: 'Snippets';
  categoryId: 'DIC_kwDOLXQEVc4CdxQs';
};
type projectsDiscussions = {
  category: 'Projects';
  categoryId: 'DIC_kwDOLXQEVc4CdxQl';
};
type guestbookDiscussions = {
  category: 'Guestbook';
  categoryId: 'DIC_kwDOLXQEVc4CdxQR';
};

type DiscussionsPropsType =
  | blogDiscussions
  | snippetsDiscussions
  | projectsDiscussions
  | guestbookDiscussions;

export default function Discussions({
  category,
  categoryId,
}: DiscussionsPropsType) {
  const { theme } = useTheme();

  return commentFlag ? (
    <Giscus
      key={theme}
      repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ''}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
      category={category}
      categoryId={categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={theme as Theme}
    />
  ) : null;
}
