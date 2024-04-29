import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { HiCalendar, HiOutlineClock, HiOutlineEye } from 'react-icons/hi';

import { BlogFrontmatter } from '@/types/frontmatters';

export default function ArticleMeta({
  articleFrontMatter: article,
  views,
  ...rest
}: React.ComponentProps<'div'> & {
  articleFrontMatter: BlogFrontmatter;
  views?: number | string;
}) {
  return (
    <div
      className={clsx(
        'flex-1 flex flex-wrap items-center justify-start gap-2',
        'text-sm text-slate-500 dark:text-slate-400 my-2'
      )}
      {...rest}
    >
      <HiCalendar />
      <time>
        {format(
          new Date(article.lastUpdated ?? article.publishedAt),
          'MMMM dd, yyyy'
        )}
      </time>

      <span aria-hidden="true" className="font-bold">
        ·
      </span>
      <HiOutlineClock className="inline-block text-base" />
      <span>{article.readingTime.text}</span>
      {views?.toLocaleString() && (
        <>
          <span aria-hidden="true" className="font-bold">
            ·
          </span>
          <div className="flex items-center gap-1">
            <HiOutlineEye className="inline-block text-base" />
            <span>{views?.toLocaleString()} views</span>
          </div>
        </>
      )}
    </div>
  );
}
