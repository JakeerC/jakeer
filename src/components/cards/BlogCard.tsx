import clsx from 'clsx';
import { format } from 'date-fns';
import * as React from 'react';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi';
import { MdCalendarToday } from 'react-icons/md';

import Accent from '@/components/Accent';
import Tag from '@/components/content/Tag';
import UnstyledLink from '@/components/links/UnstyledLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';

import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';

type BlogCardProps = {
  post: BlogFrontmatter & InjectedMeta;
  checkTagged?: (tag: string) => boolean;
  hideBanner?: boolean;
  imgAlt?: string;
} & React.ComponentPropsWithoutRef<'li'>;

export default function BlogCard({
  post,
  className,
  checkTagged,
  onClick,
  imgAlt,
  hideBanner = false,
}: BlogCardProps) {
  return (
    <li
      className={clsx(
        'w-full rounded-md border border-slate-300 bg-white dark:border-slate-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        'relative overflow-hidden rounded-lg shadow transition hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className="block h-full rounded-md focus:outline-none focus-visible:ring ring-blue-400 focus-visible:ring-primary-300 group"
        href={`/blog/${post.slug}`}
      >
        {hideBanner ? (
          <div className="absolute inset-0 h-full w-full dark:bg-dark/90" />
        ) : (
          <CloudinaryImg
            noStyle
            className="pointer-events-none overflow-hidden rounded-t-md"
            publicId={`banner/${post.banner}`}
            alt={imgAlt || 'Photo taken from unsplash'}
            width={1200}
            height={(1200 * 2) / 5}
            aspect={{ height: 2, width: 5 }}
            imgClassName="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div
          className={clsx(
            'relative',
            ' bg-gradient-to-b from-primary-300/50 via:to-slate-100/80 to-slate-100/90',
            'dark:bg-gradient-to-t dark:from-primary-300/50  dark:to-slate-900/75',
            'p-4 pt-12 h-full',
            'flex flex-col gap-2'
          )}
        >
          <div
            className={clsx(
              'w-full px-4 py-2',
              'flex flex-wrap justify-start gap-x-2 gap-y-1 text-sm text-slate-600 dark:text-slate-100'
            )}
          >
            {post.tags.split(',').map(tag => (
              <Tag
                tabIndex={-1}
                className="bg-opacity-80 dark:!bg-opacity-60"
                key={tag}
              >
                {checkTagged?.(tag) ? <Accent>{tag}</Accent> : tag}
              </Tag>
            ))}
          </div>
          <h3 className="text-slate-800 dark:text-slate-100 text-md group-hover:underline group-focus:underline flex-1">
            {post.title}
          </h3>
          <div className="flex items-center justify-start gap-2 text-sm font-medium text-slate-500 dark:text-slate-300 flex-1">
            <MdCalendarToday className="text-md" />{' '}
            {format(
              new Date(post.lastUpdated ?? post.publishedAt),
              'MMMM dd, yyyy'
            )}{' '}
            <span aria-hidden="true" className="font-bold">
              ·
            </span>{' '}
            <HiOutlineClock className="inline-block text-base" />
            <span>{post.readingTime.text}</span>
            {post?.views?.toLocaleString() && (
              <>
                {' '}
                <span aria-hidden="true" className="font-bold">
                  ·
                </span>{' '}
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <span>{post?.views?.toLocaleString()} views</span>
                </div>
              </>
            )}
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 flex-1">
            {post.description}
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
}
