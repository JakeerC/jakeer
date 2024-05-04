import clsx from 'clsx';

import { techList } from '@/constants';

export default function Tag({
  children,
  className,
  techName,
  isChecked,
  ...rest
}: React.ComponentPropsWithoutRef<'button'> & {
  techName: string;
  isChecked?: boolean;
}) {
  let TechIcon = null;
  if (techList[techName]) {
    TechIcon = techList[techName].icon;
  }

  return (
    <button
      className={clsx(
        className,
        'rounded-md px-1.5 py-0.5 font-medium transition-colors',
        'bg-slate-100 text-slate-700 hover:text-black disabled:bg-slate-200 disabled:text-slate-300',
        'dark:bg-slate-700 dark:text-slate-200 dark:hover:text-light dark:disabled:bg-slate-600 dark:disabled:text-slate-500',
        'focus-focus disabled:cursor-not-allowed',
        'flex flex-wrap items-center justify-start gap-2',
        {
          'bg-active': isChecked,
        }
      )}
      {...rest}
    >
      {TechIcon && <TechIcon />}
      {children ?? (TechIcon ? techList[techName].name : techName)}
    </button>
  );
}

export function SkipNavTag({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <>
      <a
        href="#skip-tags"
        className={clsx(
          'inline-block rounded-md px-1.5 py-0.5 font-medium transition',
          'bg-slate-100 text-slate-700 hover:text-black disabled:bg-slate-200 disabled:text-slate-300',
          'dark:bg-slate-700 dark:text-slate-200 dark:hover:text-light dark:disabled:bg-slate-600 dark:disabled:text-slate-500',
          'focus-focus disabled:cursor-not-allowed',
          'pointer-events-none absolute opacity-0 focus:inline-block focus:translate-y-[1.4rem] focus:opacity-100'
        )}
        {...rest}
      >
        Skip tag
      </a>
      {children}
      <div id="skip-tags" className="hidden" />
    </>
  );
}
