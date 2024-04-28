import clsx from 'clsx';
import { Metadata } from 'next';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiX } from 'react-icons/si';

import { og } from '@/lib/og';

import Accent from '@/components/Accent';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import FeaturedPosts from '@/app/(home)/featured-posts/FeaturedPosts';
import { getFeaturedData } from '@/app/(home)/featured-posts/getFeaturedData';
import {
  applicationName,
  defaultTitle,
  domain,
  githubURL,
  githubUserId,
  homeDesc,
  twitterURL,
  twitterUserId,
} from '@/constants';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: `${domain}`,
    title: defaultTitle,
    description: homeDesc,
    siteName: applicationName,
    images: [
      {
        url: og({
          siteName: applicationName,
          ogType: 'gradient',
          description:
            'Jakeer is a passionate software developer who likes to learn, share, teach and develop',
        }),
      },
    ],
  },
};

export default async function IndexPage() {
  const { featuredPosts, featuredProjects, featuredSnippets, introPosts } =
    await getFeaturedData();

  return (
    <>
      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            'fade-in-start'
          )}
        >
          <article className="layout">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl" data-fade="1">
              Hi!
            </h2>
            <h1
              className="mt-1 text-3xl md:text-5xl 2xl:text-6xl"
              data-fade="2"
            >
              You can call me <Accent>Jakeer</Accent>
            </h1>
            <p
              className="max-w-4xl mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:mt-3 md:text-base 2xl:text-lg"
              data-fade="2"
            >
              Front-end Engineer
            </p>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-slate-700 dark:text-slate-200 md:mt-6',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade="3"
            >
              I work primarily on React Ecosystem.
            </p>

            <div
              data-fade="5"
              className="mt-8 flex flex-wrap gap-4 md:!text-lg"
            >
              <ButtonLink href="/blog">Blog</ButtonLink>
              <ButtonLink href="/about">More about me</ButtonLink>
            </div>
            <div
              data-fade="6"
              className="flex flex-wrap gap-4 mt-4 gap-y-2 md:mt-8"
            >
              <UnstyledLink
                href={`${domain}/files/resume.pdf`}
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white',
                  'focus-focus',
                  'transition-colors'
                )}
              >
                <IoNewspaperSharp className="shrink-0" />
                <span>Resume</span>
              </UnstyledLink>
              <UnstyledLink
                href={twitterURL}
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white',
                  'focus-focus',
                  'transition-colors'
                )}
              >
                <SiX className="transition-colors shrink-0" />
                <span>{twitterUserId}</span>
              </UnstyledLink>
              <UnstyledLink
                href={githubURL}
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white',
                  'focus-focus',
                  'transition-colors'
                )}
              >
                <SiGithub className="shrink-0" />
                <span>{githubUserId}</span>
              </UnstyledLink>
            </div>
          </article>
          <UnstyledLink
            href="#intro"
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className="w-8 h-8 animate-bounce md:h-10 md:w-10" />
          </UnstyledLink>
        </section>
        <FeaturedPosts
          featuredPosts={featuredPosts}
          featuredProjects={featuredProjects}
          featuredSnippets={featuredSnippets}
          introPosts={introPosts}
        />
      </main>
    </>
  );
}
