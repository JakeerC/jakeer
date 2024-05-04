import clsx from 'clsx';
import { Metadata } from 'next';

import { og } from '@/lib/og';

import Accent from '@/components/Accent';
import ButtonLink from '@/components/links/ButtonLink';
import TechStack from '@/components/TechStack';

import { aboutDesc, applicationName, defaultTitle, domain } from '@/constants';

export const metadata: Metadata = {
  description: aboutDesc,
  applicationName: applicationName,
  openGraph: {
    type: 'website',
    url: `${domain}/about`,
    title: defaultTitle,
    description: aboutDesc,
    siteName: applicationName,
    images: [
      {
        url: og({
          siteName: 'Jakeer',
          ogType: 'gradient',
          description:
            'Jakeer is a passionate software developer who likes to learn, share, teach and develop',
        }),
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="fade-in-start">
        <div className="pt-20 layout">
          <h2 data-fade="0">About</h2>
          <h1 className="mt-1" data-fade="1">
            <Accent>Jakeer</Accent>
          </h1>
          <div className="mt-4" data-fade="2">
            <article className="prose dark:prose-invert">
              <p data-fade="3">
                Hello! I'm Jakeer, working as a Software Engineer professional
                in Bangalore . I love traveling and learn new thing irrespective
                of the domain.
              </p>
              <p data-fade="4">
                There are a lot of useful things and technologies to learn . I
                am motivated to learn as much as possible. I enjoy learning
                something new and getting feedback to make myself better and
                improve.
              </p>
              <p data-fade="5">
                In this website I will be writing some blogs, showcase my
                projects and add reusable snippets of code. I believe that
                writing and sharing what I have learned is the best way to
                remember things .So, this is a small step in that cause and to
                document what I learned for my future self. So do contact me and
                I will be very happy to help!
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="fade-in-start">
        <div className="pt-8 layout">
          <h3 className="mt-4" data-fade="8">
            Tech Stack
          </h3>
          <figure className="mt-2" data-fade="9">
            <TechStack />
          </figure>
          <div
            className="flex content-center justify-center mt-12 gap-x-4 md:justify-start"
            data-fade="6"
          >
            <div className="relative w-22 group" data-fade="6">
              <div
                className={clsx(
                  'absolute -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-primary-500 to-primary-300',
                  'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink href="mailto:jakeerchilakala@gmail.com">
                Hire me
              </ButtonLink>
            </div>
            <div className="relative w-24 group" data-fade="7">
              <ButtonLink
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </ButtonLink>
            </div>
            <div className="relative w-24 group" data-fade="8">
              <ButtonLink href="#contact">Contact</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-16 layout">
          <h2>Contact</h2>
          <article className="mt-4 prose dark:prose-invert">
            <p>
              Do contact me if you need my opinion about web development,
              especially frontend works. I’ll be happy to help!
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
