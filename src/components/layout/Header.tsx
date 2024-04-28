'use client';

//! TODO split this file to make use of server components
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import ThemeButton from '@/components/buttons/ThemeButton';
import { Jakeer } from '@/components/CJ';
import UnstyledLink from '@/components/links/UnstyledLink';

import { primaryNavLinks } from '@/constants';

type HeaderProps = {
  large?: boolean;
};

export default function Header({ large = false }: HeaderProps) {
  //#region  //*=========== Route Functionality ===========
  const pathname = usePathname();

  /** Ex: /projects/petrolida-2021 -> ['', 'projects', 'petrolida-2021'] */
  const arrOfRoute = pathname.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  //#endregion  //*======== Route Functionality ===========

  //#region  //*=========== Scroll Shadow ===========
  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //#endregion  //*======== Scroll Shadow ===========

  return (
    <header
      className={clsx(
        ` fixed top-0 h-full
          w-screen z-3
          left-0 right-0
          bg-gradient-to-b from-white to-white/10
          dark:from-dark dark:to-dark/10
          bg-blend-hard-white
          backdrop-blur
          transform-gpu
          transition-[max-height]
          duration-300
          max-h-20 tablet-sm:max-h-21`,
        'sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-sm'
      )}
    >
      {/* Skip Navigation */}
      <a
        href="#skip-nav"
        className={clsx(
          'rounded-sm p-2 transition',
          'font-medium text-black dark:text-white',
          'bg-white dark:bg-dark',
          'group dark:hover:text-primary-300',
          'absolute left-4 top-4',
          '-translate-y-16 focus-focus focus:translate-y-0'
        )}
      >
        Skip to main content
      </a>

      <nav
        className={clsx(
          'layout flex items-center justify-between py-4',
          large && 'lg:max-w-[68rem]'
        )}
      >
        <div>
          <Jakeer />
        </div>
        <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
          {primaryNavLinks.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className={clsx(
                  'rounded-sm py-2 transition-colors',
                  'font-medium text-black dark:text-white',
                  'group dark:hover:text-primary-300',
                  'focus-focus'
                )}
              >
                <span
                  className={clsx(
                    'transition-colors',
                    'bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0',
                    href === baseRoute &&
                      '!bg-primary-300/50 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
                  )}
                >
                  {label}
                </span>
              </UnstyledLink>
            </li>
          ))}
        </ul>
        <ThemeButton />
      </nav>
    </header>
  );
}
