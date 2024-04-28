'use client';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import clsx from 'clsx';

type TooltipProps = {
  tipChildren?: React.ReactNode;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
} & TippyProps;

// ! send `children`  prop as single element or string

// TODO: z-index comming below buttonlink
export default function Tooltip({
  tipChildren,
  children,
  className,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipProps) {
  return (
    <Tippy
      placement="auto"
      trigger="mouseenter"
      interactive
      inertia
      followCursor
      render={() => (
        <div
          className={clsx(
            className,
            'inline-block rounded-md bg-white p-2 text-slate-600 shadow-md dark:bg-dark dark:text-slate-200',
            'border dark:border-slate-600 '
          )}
        >
          {tipChildren}
        </div>
      )}
      zIndex={999}
      {...rest}
    >
      {withUnderline ? (
        <span
          className={clsx(spanClassName, 'underline')}
          style={{ textDecorationStyle: 'dotted' }}
        >
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )}
    </Tippy>
  );
}
