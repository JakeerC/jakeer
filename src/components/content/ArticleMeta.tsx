import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { HiCalendar, HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { RiFileHistoryLine } from 'react-icons/ri';

import Tag from '@/components/content/Tag';
import UnstyledLink from '@/components/links/UnstyledLink';

import { BlogFrontmatter, SnippetFrontmatter } from '@/types/frontmatters';

export default function ArticleMeta({
  articleFrontMatter: article,
  showMetaData = false,
  showTags = false,
  views,
  commitHistoryLink,
  ...rest
}: React.ComponentProps<'div'> & {
  articleFrontMatter: BlogFrontmatter | SnippetFrontmatter;
  commitHistoryLink?: string;
  views?: number | string;
  showTags?: boolean;
  showMetaData?: boolean;
}) {
  const parentClasses = clsx(
    'flex-1 flex flex-wrap items-center justify-start gap-2',
    'text-sm text-slate-500 dark:text-slate-400'
  );
  return (
    <div {...rest} className="flex flex-col gap-2 my-2">
      {showTags && (
        <div className={parentClasses}>
          {article.tags.split(',').map(tag => (
            <Tag
              tabIndex={-1}
              className="bg-opacity-80 dark:!bg-opacity-60 cursor-text"
              key={tag}
              techName={tag}
            >
              {tag}
            </Tag>
          ))}
        </div>
      )}
      {showMetaData && (
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
      )}

      {showMetaData && article.lastUpdated && commitHistoryLink && (
        <div className={parentClasses}>
          Last updated on <HiCalendar />
          <time>{format(new Date(article.lastUpdated), 'MMMM dd, yyyy')}</time>
          <UnstyledLink
            href={commitHistoryLink}
            className={clsx(
              'inline-flex items-center gap-1 rounded-sm font-medium',
              'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-primary-500',
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
