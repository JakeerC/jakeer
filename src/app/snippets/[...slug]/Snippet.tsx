'use client';
{
  /* 
  TODO:

* Like Button
* Count views, likes
* Analytics

*/
}
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';

// import useContentMeta from '@/hooks/useContentMeta';
import useScrollSpy from '@/hooks/useScrollspy';

// import LikeButton from '@/components/content/LikeButton';
import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Tag from '@/components/content/Tag';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';

import { SnippetType } from '@/types/frontmatters';

export default function SingleSnippetPage({ code, frontmatter }: SnippetType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `l_${frontmatter.slug.replace('/', '|')}`;
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
      {/* <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
      /> */}

      <main>
        <section className="">
          <div className="layout">
            <div className="border-b-thin pb-4 dark:border-gray-600">
              <h1 className="mt-4">{frontmatter.title}</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {frontmatter.description}
              </p>
              {/* <div className="mt-2 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <Accent>
                    {meta?.views?.toLocaleString() ?? '–––'} views
                  </Accent>
                </div>
              </div> */}
              <div className="mt-2 flex flex-wrap gap-x-1 gap-y-1 text-sm text-black dark:text-gray-100">
                {frontmatter.tags.split(',').map(tag => (
                  <Tag
                    tabIndex={-1}
                    className="bg-opacity-80 dark:!bg-opacity-60"
                    key={tag}
                    techName={tag}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <hr className="dark:border-gray-600" />

            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
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
          </div>
        </section>
      </main>
    </>
  );
}
