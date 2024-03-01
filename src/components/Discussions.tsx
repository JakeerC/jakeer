import Giscus, { Repo, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';

import { giscusCategoryId } from '@/constants/consts';
import { commentFlag } from '@/constants/env';
import { giscusCategory } from '@/constants/urls';

export default function Comment() {
  const { theme } = useTheme();

  return commentFlag ? (
    <Giscus
      key={theme}
      repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ''}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
      category={giscusCategory}
      categoryId={giscusCategoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme={theme as Theme}
    />
  ) : null;
}
