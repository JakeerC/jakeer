import clsx from 'clsx';
import { Metadata } from 'next';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiX } from 'react-icons/si';

import { og } from '@/lib/og';

import Accent from '@/components/Accent';
import CJ from '@/components/CJ';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import FeaturedPosts from '@/app/(home)/featured-posts/FeaturedPosts';
import { getFeaturedData } from '@/app/(home)/featured-posts/getFeaturedData';
import { homeDesc } from '@/constants/consts';
import { domain } from '@/constants/urls';

export const metadata: Metadata = {
  title: 'Jakeer',
  description: homeDesc,
  openGraph: {
    type: 'website',
    url: `${domain}`,
    title: 'Jakeer',
    description: homeDesc,
    siteName: 'Jakeer Personal Site',
    images: [
      {
        url: og({
          siteName: 'Jakeer',
          ogType: 'gradient',
          description: '',
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
              className="mt-2 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-3 text-sm md:text-base 2xl:text-lg"
              data-fade="2"
            >
              Front-end Engineer at{' '}
              <CustomLink
                href="https://#" // TODO
              >
                Company Name
              </CustomLink>
            </p>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6',
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
              <div className="group relative">
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href="/blog">Read the blog</ButtonLink>
              </div>
              <ButtonLink href="/about">Learn more about me</ButtonLink>
            </div>
            <div
              data-fade="6"
              className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8"
            >
              <UnstyledLink
                href={`${domain}/files/resume.pdf`}
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
              >
                <IoNewspaperSharp className="shrink-0" />
                <span>Resume</span>
              </UnstyledLink>
              <UnstyledLink
                href="https://#" // TODO
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
              >
                <SiX className="shrink-0 transition-colors" />
                <span>@jakeerchilakala</span>
              </UnstyledLink>
              <UnstyledLink
                href="https://github.com/jakeerc"
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
              >
                <SiGithub className="shrink-0" />
                <span>jakeerc</span>
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
            <IoArrowDownOutline className="h-8 w-8 animate-bounce md:h-10 md:w-10" />
          </UnstyledLink>
          <CJ
            className={clsx(
              'absolute top-8 right-6',
              'translate-y-[37%] transform-gpu',
              'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
              'z-[-1] opacity-70 dark:opacity-30'
            )}
          />
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
