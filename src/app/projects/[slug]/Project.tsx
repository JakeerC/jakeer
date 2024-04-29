'use client';
{
  /* 
  TODO:

* Like Button
* Count views, likes
* Analytics

*/
}
import clsx from 'clsx';
import { getMDXComponent } from 'mdx-bundler/client';
import * as React from 'react';
import { HiLink, HiPlay, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

// import useContentMeta from '@/hooks/useContentMeta';
import useScrollSpy from '@/hooks/useScrollspy';

// import LikeButton from '@/components/content/LikeButton';
import MDXComponents from '@/components/content/MDXComponents';
import TableOfContents, {
  HeadingScrollSpy,
} from '@/components/content/TableOfContents';
import Discussions from '@/components/Discussions';
import CustomLink from '@/components/links/CustomLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';

import { ProjectType } from '@/types/frontmatters';

export default function Project({ code, frontmatter }: ProjectType) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  //#region  //*=========== Content Meta ===========
  // const contentSlug = `p_${frontmatter.slug.replace('|', '-')}`;
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
    <main>
      <div className="layout fade-in-start">
        <section className="" data-fade="0">
          <CloudinaryImg
            publicId={`banner/${frontmatter.banner}`}
            alt={frontmatter.title}
            width={1440}
            height={792}
          />
          <h1 className="mt-4">{frontmatter.title}</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {frontmatter.description}
          </p>
          {/* //#region //*=========== article meta =========== //#endregion */}
          <div
            className={clsx(
              'flex-1 flex flex-wrap items-center justify-start gap-2',
              'text-sm text-slate-500 dark:text-slate-200 my-2'
            )}
          >
            {/* <div className="flex items-center gap-1">
                <HiOutlineEye className="inline-block text-base" />
                {meta?.views?.toLocaleString() ?? '–––'} views
              </div> <span aria-hidden="true" className="font-bold">
        ·
      </span> */}
            {/* {meta?.views?.toLocaleString()  && frontmatter.github &&  <span aria-hidden="true" className="font-bold">
                  ·
                </span>
              } */}

            {frontmatter.github && (
              <>
                <SiGithub />
                <CustomLink
                  // onClick={() =>
                  //   trackEvent(`Project Github: ${frontmatter.title}`, {
                  //     type: 'link',
                  //   })
                  // }
                  href={frontmatter.github}
                  className="mt-1"
                >
                  Source Code
                </CustomLink>
                <span aria-hidden="true" className="font-bold">
                  ·
                </span>
              </>
            )}

            {frontmatter.youtube && (
              <>
                <HiPlay />
                <CustomLink
                  href={frontmatter.youtube}
                  className="mt-1"
                  // onClick={() =>
                  //   trackEvent(`Project Video: ${frontmatter.title}`, {
                  //     type: 'link',
                  //   })
                  // }
                >
                  Demo Video
                </CustomLink>
                <span aria-hidden="true" className="font-bold">
                  ·
                </span>
              </>
            )}
            {frontmatter.link && (
              <>
                <HiLink />
                <CustomLink
                  href={frontmatter.link}
                  className="mt-1"
                  // onClick={() =>
                  //   trackEvent(`Project Live: ${frontmatter.title}`, {
                  //     type: 'link',
                  //   })
                  // }
                >
                  Open Live Site
                </CustomLink>
              </>
            )}
          </div>
          {frontmatter.category && (
            <p className="mt-2 flex items-center justify-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <HiUser />
              {frontmatter.category}
            </p>
          )}
          {/* //*======== article meta =========== */}
          <hr className="mt-4 dark:border-slate-600" />
        </section>
        <section
          className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8 "
          data-fade="0"
        >
          <article className="mdx projects prose mx-auto w-full transition-colors dark:prose-invert">
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
            category="Projects"
            categoryId="DIC_kwDOLXQEVc4CdxQl"
            key={frontmatter.slug}
          />
        </figure>
        <div className="mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between">
          <CustomLink
            href={`https://github.com/jakeerc/jakeer/blob/main/src/contents/projects/${frontmatter.slug}.mdx`}
          >
            Edit this on GitHub
          </CustomLink>
          <CustomLink href="/projects">← Back to projects</CustomLink>
        </div>
      </div>
    </main>
  );
}
