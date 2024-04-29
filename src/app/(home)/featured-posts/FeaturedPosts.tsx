'use client';
import clsx from 'clsx';

import { trackEvent } from '@/lib/analytics';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import BlogCard from '@/components/cards/BlogCard';
import ProjectCard from '@/components/cards/ProjectCard';
import SnippetsCard from '@/components/cards/SnippetsCard';
import ButtonLink from '@/components/links/ButtonLink';

import {
  BlogFrontmatter,
  ProjectFrontmatter,
  SnippetFrontmatter,
} from '@/types/frontmatters';

export default function FeaturedPosts({
  featuredPosts,
  featuredProjects,
  featuredSnippets,
}: {
  featuredPosts: BlogFrontmatter[];
  featuredProjects: ProjectFrontmatter[];
  featuredSnippets: SnippetFrontmatter[];
  introPosts: BlogFrontmatter[];
}) {
  const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  const populatedProjects = useInjectContentMeta('projects', featuredProjects);
  const populatedSnippets = useInjectContentMeta('snippets', featuredSnippets);

  return (
    <article id="intro">
      <section className={clsx('py-20')}>
        <article className="layout">
          <h2 className="text-2xl md:text-4xl" id="blog">
            <Accent>Featured Posts</Accent>
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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

      <section className={clsx('py-20')}>
        <article className="layout">
          <h2 className="text-2xl md:text-4xl" id="projects">
            <Accent>Featured Projects</Accent>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
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

      <section className={clsx('py-20')}>
        <article className="layout">
          <h2 className="text-2xl md:text-4xl" id="snippets">
            <Accent>Snippets</Accent>
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Snippet article that's not long enough to be a blog post, usually
            comes from my personal notes.
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {populatedSnippets.map((snippet, i) => (
              <SnippetsCard
                key={snippet.slug}
                snippet={snippet}
                className={clsx(i > 2 && 'hidden sm:block')}
              />
            ))}
          </ul>
          <ButtonLink
            className="mt-4"
            href="/snippets"
            onClick={() =>
              trackEvent('Home: See more snippets', { type: 'navigate' })
            }
          >
            See more snippets
          </ButtonLink>
        </article>
      </section>
    </article>
  );
}
