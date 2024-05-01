import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { HiCalendar, HiOutlineClock, HiOutlineEye } from 'react-icons/hi';

import { BlogFrontmatter } from '@/types/frontmatters';
import { GoDotFill } from 'react-icons/go';
import { LuDot } from 'react-icons/lu';
import UnstyledLink from '@/components/links/UnstyledLink';
import { RiFileHistoryLine } from 'react-icons/ri';

export default function ArticleMeta({
  articleFrontMatter: article,
  views,
  commitHistoryLink,
  ...rest
}: React.ComponentProps<'div'> & {
  articleFrontMatter: BlogFrontmatter;
  commitHistoryLink?: string;
  views?: number | string;
}) {
  const parentClasses = clsx(
    'flex-1 flex flex-wrap items-center justify-start gap-2',
    'text-sm text-slate-500 dark:text-slate-400 my-2'
  );
  return (
    <div {...rest}>
      <div className={parentClasses}>
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
      {article.lastUpdated && commitHistoryLink && (
        <div className={parentClasses}>
          Last updated on <HiCalendar />
          <time>{format(new Date(article.lastUpdated), 'MMMM dd, yyyy')}</time>
          <UnstyledLink
            href={commitHistoryLink}
            className={clsx(
              'inline-flex items-center gap-1 rounded-sm font-medium',
              'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-primary-300',
              'focus-focus'
            )}
          >
            <RiFileHistoryLine />
            <span>See changes</span>
          </UnstyledLink>
        </div>
      )}
    </div>
  );
}
