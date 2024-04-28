'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { RxMoon, RxSun } from 'react-icons/rx';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx(
        'rounded-md p-2 md:p-2.5',
        'hover:text-primary-300 dark:hover:text-primary-300',
        'focus-focus',
        'text-lg md:text-xl',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme}
    >
      {mounted ? <>{theme === 'dark' ? <RxMoon /> : <RxSun />}</> : <RxSun />}
    </button>
  );
}
