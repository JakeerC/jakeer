'use client';
import clsx from 'clsx';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import BlogCard from '@/components/cards/BlogCard';
import ProjectCard from '@/components/cards/ProjectCard';
import ShortsCard from '@/components/cards/ShortsCard';
import ButtonLink from '@/components/links/ButtonLink';
import Tooltip from '@/components/Tooltip';

import {
  BlogFrontmatter,
  LibraryFrontmatter,
  ProjectFrontmatter,
} from '@/types/frontmatters';

export default function FeaturedPosts({
  featuredPosts,
  featuredProjects,
  featuredShorts,
  introPosts,
}: {
  featuredPosts: BlogFrontmatter[];
  featuredProjects: ProjectFrontmatter[];
  featuredShorts: LibraryFrontmatter[];
  introPosts: BlogFrontmatter[];
}) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  const populatedIntro = useInjectContentMeta('blog', introPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);
  const populatedShorts = useInjectContentMeta('library', featuredShorts);

  return (
    <>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            id="intro"
            className={clsx('py-20', inView && 'fade-in-start')}
          >
            <article
              className={clsx(
                'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                'md:gap-4'
              )}
              data-fade="0"
            >
              <div className="mt-8 h-full w-full md:mt-0">
                <h2 className="text-4xl md:text-6xl">
                  <Accent className="inline decoration-clone leading-snug dark:leading-none">
                    Rebuild your mental model
                  </Accent>
                </h2>
                <div className="mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg">
                  <Tooltip
                    withUnderline
                    tipChildren={
                      <>
                        A mental model is an explanation of someone's{' '}
                        <strong>thought process</strong> about how something
                        works. You can use it as your own guide that you can
                        test through some cases.
                      </>
                    }
                  >
                    <span>Mental model</span>
                  </Tooltip>{' '}
                  will make front-end development more{' '}
                  <strong className="text-gray-700 dark:text-gray-200">
                    predictable
                  </strong>{' '}
                  by seeing how they work{' '}
                  <strong className="text-gray-700 dark:text-gray-200">
                    fundamentally
                  </strong>
                  . In my blog, I'm sharing how I approach something and how my
                  mental model affect my learning about a certain topic.
                </div>
              </div>
              <div className="h-full w-full">
                <ul className="relative h-full">
                  <BlogCard
                    className={clsx(
                      'absolute max-w-[350px] transform-gpu',
                      'top-1/2 translate-y-[-55%] md:translate-y-[-50%] lg:translate-y-[-60%]',
                      'left-1/2 -translate-x-1/2 md:translate-x-[-50%] lg:translate-x-[-30%]',
                      'rotate-3 md:rotate-6 lg:rotate-12',
                      'pointer-events-none md:pointer-events-auto'
                    )}
                    post={populatedIntro[1]}
                  />
                  <BlogCard
                    className="mx-auto max-w-[350px]"
                    post={populatedIntro[0]}
                  />
                </ul>
              </div>
            </article>
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20', inView && 'fade-in-start')}
          >
            <article className="layout" data-fade="0">
              <h2 className="text-2xl md:text-4xl" id="blog">
                <Accent>Featured Posts</Accent>
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {populatedPosts.map((post, i) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    className={clsx(i > 2 && 'hidden sm:block')}
                  />
                ))}
              </ul>
              <ButtonLink
                className="mt-4"
                href="/blog"
                onClick={() =>
                  trackEvent('Home: See more post', { type: 'navigate' })
                }
              >
                See more post
              </ButtonLink>
            </article>
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20', inView && 'fade-in-start')}
          >
            <article className="layout" data-fade="0">
              <h2 className="text-2xl md:text-4xl" id="projects">
                <Accent>Featured Projects</Accent>
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Some projects that I'm proud of
              </p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {populatedProjects.map((project, i) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    className={clsx(i > 2 && 'hidden sm:block')}
                  />
                ))}
              </ul>
              <ButtonLink
                className="mt-4"
                href="/projects"
                onClick={() =>
                  trackEvent('Home: See more project', { type: 'navigate' })
                }
              >
                See more project
              </ButtonLink>
            </article>
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20', inView && 'fade-in-start')}
          >
            <article className="layout" data-fade="0">
              <h2 className="text-2xl md:text-4xl" id="library">
                <Accent>Shorts</Accent>
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Short article that's not long enough to be a blog post, usually
                comes from my personal notes.
              </p>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {populatedShorts.map((short, i) => (
                  <ShortsCard
                    key={short.slug}
                    short={short}
                    className={clsx(i > 2 && 'hidden sm:block')}
                  />
                ))}
              </ul>
              <ButtonLink
                className="mt-4"
                href="/shorts"
                onClick={() =>
                  trackEvent('Home: See more shorts', { type: 'navigate' })
                }
              >
                See more shorts
              </ButtonLink>
            </article>
          </section>
        )}
      </InView>
    </>
  );
}
