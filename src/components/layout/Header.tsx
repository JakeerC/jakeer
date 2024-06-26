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
        'sticky top-0 z-50 transition-shadow',
        'max-h-20 w-[100%] overflow-x-hidden',
        'bg-gradient-to-b from-light to-light/10',
        'dark:from-dark dark:to-dark/10',
        'backdrop-blur',
        'duration-300',
        !onTop && 'shadow-sm'
      )}
    >
      {/* Skip Navigation */}
      <a
        href="#skip-nav"
        className={clsx(
          'rounded-sm p-2 transition',
          'font-medium text-black dark:text-light',
          'bg-light dark:bg-dark',
          'group dark:hover:text-primary-500',
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
                  'font-medium text-black dark:text-light',
                  'group dark:hover:text-primary-500',
                  'focus-focus'
                )}
              >
                <span
                  className={clsx(
                    'transition-colors',
                    'bg-primary-500/0 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-500/0',
                    href === baseRoute && 'text-accent'
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
