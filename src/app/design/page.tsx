'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SiTailwindcss } from 'react-icons/si';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import ThemeButton from '@/components/buttons/ThemeButton';
import ColorSwatch from '@/components/ColorSwatch';
import StyledInput from '@/components/form/StyledInput';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import ShareTweetButton from '@/components/links/ShareTweetButton';
import TOCLink from '@/components/links/TOCLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/media/NextImage';
import TechIcons from '@/components/TechIcons';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

import { TechListNameType } from '@/constants';

export default function Components() {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  return (
    <div className="flex flex-col mt-8 mb-8 gap-4 justify-center items-center m-auto align-middle md:w-[40rem]">
      <section className={clsx(isLoaded && 'fade-in-start')}>
        <div className="layout py-12">
          <h1 data-fade="0">
            <Accent>Website's Design</Accent>
          </h1>

          <p data-fade="1" className="mt-2 text-gray-600 dark:text-gray-300">
            color palette
          </p>

          <div
            data-fade="2"
            className={clsx(
              'mt-8 rounded p-4',
              'border-2 border-dashed border-gray-300 dark:border-gray-600 '
            )}
          >
            <div className="flex items-end justify-between">
              <h2 className="capitalize">{theme} Mode</h2>
              <ThemeButton />
            </div>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Font Family: Inter
            </p>

            <div className="grid sm:grid-cols-2">
              {THEME_COLORS.map(color => (
                <ColorSwatch key={color.title} {...color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Button> Button label</Button>

      <StyledInput />

      {/* Links */}

      <UnstyledLink href="https://github.com/JakeerC">
        github account
      </UnstyledLink>

      <UnstyledLink href="/components#unstyledlink">
        UnstyledLink link
      </UnstyledLink>

      <ButtonLink href="/components#ButtonLink"> Button Link </ButtonLink>

      <CustomLink href="/components#customlink">Custom Link</CustomLink>

      <ShareTweetButton
        url="https://twitter.com/jakeerchilakala"
        title="Jakeer twitter profile"
      />

      <TOCLink
        text="toc link l1"
        activeSection="customlink"
        id="customlink"
        level={1}
        key="customlink"
        minLevel={1}
      />
      <TOCLink
        text="toc link l2"
        activeSection=""
        id="unstyledlink"
        level={2}
        key="unstyledlink"
        minLevel={1}
      />

      {/* Typography */}
      <Accent> accent text </Accent>
      {/* Misc */}
      <ColorSwatch
        colorClassName="#dbff00"
        className="bg-green-100/5"
        title="color swatch"
        subTitle="color swatch subtitle"
      />
      {/* Media */}

      <NextImage
        alt="corner-arrow"
        height={16}
        width={16}
        src="/images/new-tab.png"
        className="bg-green-600"
      />

      <TechStack />
      <TechIcons techs={['react', 'nextjs'] as Array<TechListNameType>} />
      <Tooltip key="keyId" tipChildren={<p> test tooltip</p>}>
        <>
          <SiTailwindcss />
          Test
        </>
      </Tooltip>

      <hr />
    </div>
  );
}

const THEME_COLORS = [
  {
    title: 'White Background',
    subTitle: '#ffffff',
    colorClassName: 'bg-white',
  },
  {
    title: 'Dark Background',
    subTitle: '#0e1111',
    colorClassName: 'bg-dark',
  },
  {
    title: 'Primary 200',
    subTitle: '#dbff00',
    colorClassName: 'bg-primary-200',
  },
  {
    title: 'Primary 300',
    subTitle: '#097bff',
    colorClassName: 'bg-primary-300',
  },
  {
    title: 'Primary 400',
    subTitle: '#00e0f3',
    colorClassName: 'bg-primary-400',
  },
  {
    title: 'Primary 500',
    subTitle: '#00bfff',
    colorClassName: 'bg-primary-500',
  },
  {
    title: 'Gradient',
    subTitle: '#00e0f3 to #00bfff',
    colorClassName: 'bg-gradient-to-tr from-primary-300 to-primary-500',
  },
];
