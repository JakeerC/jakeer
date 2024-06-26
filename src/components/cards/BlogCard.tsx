import clsx from 'clsx';
import * as React from 'react';

import ArticleMeta from '@/components/content/ArticleMeta';
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
        'w-full rounded-md border bg-light border-slate-300  dark:border-slate-600 dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className="block h-full rounded-md focus-focus"
        href={`/blog/${post.slug}`}
      >
        {!hideBanner && (
          <div className="relative">
            <CloudinaryImg
              noStyle
              className="pointer-events-none overflow-hidden p-2"
              publicId={`banner/${post.banner}`}
              alt={imgAlt || 'Photo taken from unsplash'}
              width={1200}
              height={(1200 * 2) / 5}
              aspect={{ height: 2, width: 5 }}
              imgClassName="rounded-md"
            />
            <div
              className={clsx(
                'absolute bottom-2 w-full px-4 py-2',
                'mt-2 flex flex-wrap justify-end gap-1',
                'text-sm text-black dark:text-slate-100'
              )}
            >
              {post.tags.split(',').map(tag => (
                <Tag
                  tabIndex={-1}
                  className="bg-opacity-80 dark:!bg-opacity-70 cursor-text"
                  key={tag}
                  techName={tag}
                  isChecked={checkTagged?.(tag)}
                />
              ))}
            </div>
          </div>
        )}
        <div className="p-4">
          <h2 className="text-slate-800 dark:text-slate-100 h3 leading-7">
            {post.title}
          </h2>

          <ArticleMeta articleFrontMatter={post} showMetaData />
          <p className="text-sm text-slate-700 dark:text-slate-300">
            {post.description}
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
}
