'use client';
{
  /* 
  TODO:
  
* Like Button
* Count views, likes
*/
}
import clsx from 'clsx';
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';

import { hexToRgb } from '@/lib/color';
import { getReadableColor } from '@/lib/readableColor';

// import useContentMeta from '@/hooks/useContentMeta';
import ArticleMeta from '@/components/content/ArticleMeta';
// import LikeButton from '@/components/content/LikeButton';
import MDXComponents from '@/components/content/MDXComponents';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';

import { ARTICLE_MAX_WIDTH } from '@/constants';

import { SnippetType } from '@/types/frontmatters';

export default function SingleSnippetPage({ code, frontmatter }: SnippetType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const readableColor = getReadableColor(frontmatter.color, true); // TODO: default color to darker shade of primary color
  const shadowColor = hexToRgb(readableColor, 0.85);

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `l_${frontmatter.slug.replace('/', '|')}`;
  // const meta = useContentMeta(contentSlug, { runIncrement: true });
  //#endregion  //*======== Content Meta ===========

  //#region  //*=========== Scrollspy ===========
  // const activeSection = useScrollSpy();

  // const [toc, setToc] = React.useState<HeadingScrollSpy>();
  // const minLevel =
  //   toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  // React.useEffect(() => {
  //   const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');

  //   const headingArr: HeadingScrollSpy = [];
  //   headings.forEach(heading => {
  //     const id = heading.id;
  //     const level = +heading.tagName.replace('H', '');
  //     const text = heading.textContent + '';

  //     headingArr.push({ id, level, text });
  //   });

  //   setToc(headingArr);
  // }, [frontmatter.slug]);
  //#endregion  //*======== Scrollspy ===========

  return (
    <main>
      <article
        className={clsx('fade-in-start', `m-auto`)}
        style={{ maxWidth: ARTICLE_MAX_WIDTH }}
      >
        {frontmatter.banner && (
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
        )}
        <section className="" data-fade="0">
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
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {frontmatter.description}
          </p>
          <ArticleMeta articleFrontMatter={frontmatter} showTags />
          <hr className="dark:border-slate-600" />
        </section>
        <section data-fade="1">
          <article className="mdx prose mx-auto mt-4 w-full transition-colors dark:prose-invert">
            <Component
              components={
                {
                  ...MDXComponents,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any
              }
            />
          </article>
        </section>
        <figure className="mt-12">
          <Discussions
            category="Snippets"
            categoryId="DIC_kwDOLXQEVc4CdxQs"
            key={frontmatter.slug}
          />
        </figure>

        <div className="mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between">
          <CustomLink
            href={`https://github.com/jakeerc/jakeer/blob/main/src/contents/snippets/${frontmatter.slug}.mdx`}
          >
            Edit this on GitHub
          </CustomLink>
          <CustomLink href="/snippets">← Back to Snippets</CustomLink>
        </div>
      </article>
    </main>
  );
}
