'use client';
{
  /* 
  TODO:

* Like Button
* Count views, likes
*/
}
import clsx from 'clsx';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';
import { HiCalendar, HiOutlineClock } from 'react-icons/hi';

import { hexToRgb } from '@/lib/color';
import { getReadableColor } from '@/lib/readableColor';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useScrollSpy from '@/hooks/useScrollspy';

import Accent from '@/components/Accent';
import BlogCard from '@/components/cards/BlogCard';
import SubscribeCard from '@/components/cards/SubscribeCard';
import ArticleMeta from '@/components/content/ArticleMeta';
import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';
import ShareTweetButton from '@/components/links/ShareTweetButton';
import UnstyledLink from '@/components/links/UnstyledLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';

import { domain, sourceCodeRepo } from '@/constants';

import { BlogFrontmatter, BlogType } from '@/types/frontmatters';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function Post({
  code,
  frontmatter,
  recommendations,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const populatedRecommendations = useInjectContentMeta(
    'blog',
    recommendations
  );

  const readableColor = getReadableColor(frontmatter.color, true);
  const shadowColor = hexToRgb(readableColor, 0.85);

  //#region  //*=========== Link Constants ===========
  const COMMIT_HISTORY_LINK = `${sourceCodeRepo}/commits/main/src/contents/blog/${frontmatter.slug}.mdx`;
  const GITHUB_EDIT_LINK = `${sourceCodeRepo}/blob/main/src/contents/blog/${frontmatter.slug}.mdx`;
  //#endregion  //*======== Link Constants ===========

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `b_${cleanSlug}`;
  // const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

    const headingArr: HeadingScrollSpy = [];
    headings.forEach(heading => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========

  return (
    <>
      <article>
        <div className="layout">
          <CloudinaryImg
            publicId={`banner/${frontmatter.banner}`}
            alt={`Photo from unsplash: ${frontmatter.banner}`}
            width={1200}
            height={(1200 * 2) / 5}
            aspect={{ height: 2, width: 5 }}
            imgClassName="object-cover w-full h-full"
            className={clsx(
              'overflow-hidden -z-1',
              'max-w-[calc(100vw_+_calc(100vw_-_100%))]',
              'absolute top-0 -left-[calc(100vw_-_100%)] -right-[calc(100vw_-_100%)]',
              'pointer-events-none blur transition',
              'saturate-125 opacity-40 dark:opacity-65',
              '[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]'
            )}
            style={{ height: '85vh', maxHeight: 384, width: '100vw' }}
          />

          <h1
            className={clsx(
              'mt-12',
              'text-shadow dark:text-[var(--title-color)] dark:saturate-150',
              'dark:!shadow-background'
            )}
            style={
              {
                '--tw-shadow-color': shadowColor,
                '--title-color': readableColor,
              } as React.CSSProperties
            }
          >
            {frontmatter.title}
          </h1>

          <ArticleMeta articleFrontMatter={frontmatter} />
          {frontmatter.lastUpdated && (
            <div className="flex flex-wrap gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
              <p className="flex flex-wrap gap-2">
                Updated on <HiCalendar />{' '}
                {format(new Date(frontmatter.lastUpdated), 'MMMM dd, yyyy')}.
              </p>
              <UnstyledLink
                href={COMMIT_HISTORY_LINK}
                className={clsx(
                  'inline-flex items-center gap-1 rounded-sm font-medium',
                  'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-primary-300',
                  'focus-focus'
                )}
              >
                <HiOutlineClock />
                <span>See changes</span>
              </UnstyledLink>
            </div>
          )}
          <div className="flex items-center justify-start gap-2 mt-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {/* {meta?.devtoViews ? (
                  <Tooltip
                    tipChildren={
                      <>
                        {meta.devtoViews.toLocaleString()} views on{' '}
                        <CustomLink href="https://dev.to/jakeerchilakala">
                          dev.to
                        </CustomLink>
                      </>
                    }
                    // position="bottom"
                  >
                    <div className="flex items-center gap-1">
                      <HiOutlineEye className="inline-block text-base" />
                      <Accent>
                        {meta?.views?.toLocaleString() ?? '–––'} views
                      </Accent>
                    </div>
                  </Tooltip>
                ) : (
                  <div className="flex items-center gap-1">
                    <HiOutlineEye className="inline-block text-base" />
                    <Accent>
                      {meta?.views?.toLocaleString() ?? '–––'} views
                    </Accent>
                  </div>
                )} */}
            {/* <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <Accent>
                    {meta?.views?.toLocaleString() ?? '–––'} views
                  </Accent>
                </div> */}
          </div>

          <hr className="dark:border-slate-600" />

          <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
            <article className="w-full mx-auto mt-4 prose transition-colors mdx dark:prose-invert">
              <Component
                components={
                  {
                    ...MDXComponents,
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
              />
            </article>

            <aside className="py-4">
              <div className="sticky top-36">
                <TableOfContents
                  toc={toc}
                  minLevel={minLevel}
                  activeSection={activeSection}
                />
                {/* <div className="flex items-center justify-center py-8">
                    <LikeButton slug={contentSlug} />
                  </div> */}
              </div>
            </aside>
          </section>

          <ShareTweetButton
            className="mt-12"
            url={`${domain}/blog/${frontmatter.slug}`}
            title={frontmatter.title}
          />

          <figure className="mt-12">
            <Discussions
              category="Blog"
              categoryId="DIC_kwDOLXQEVc4CdxQe"
              key={frontmatter.slug}
            />
          </figure>

          {populatedRecommendations.length > 0 && (
            <div className="mt-20">
              <h2>
                <Accent>Other posts that you might like</Accent>
              </h2>
              <ul className="grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3">
                {populatedRecommendations.map((post, i) => (
                  <BlogCard
                    // onClick={() => {
                    //   trackEvent(post.slug, { type: 'recommend' });
                    // }}
                    className={clsx({ 'hidden xl:block': i === 2 })}
                    key={post.slug}
                    post={post}
                  />
                ))}
              </ul>
            </div>
          )}

          <SubscribeCard className="mt-12" title="Enjoying this post?" />

          <div className="flex flex-col items-start gap-4 mt-8 md:flex-row-reverse md:justify-between">
            <CustomLink href={GITHUB_EDIT_LINK}>Edit this on GitHub</CustomLink>
            <CustomLink href="/blog">← Back to blog</CustomLink>
          </div>
        </div>
      </article>
    </>
  );
}
