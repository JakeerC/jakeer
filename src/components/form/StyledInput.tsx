import clsx from 'clsx';
import * as React from 'react';

export default function StyledInput({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'input'>) {
  return (
    <input
      className={clsx(
        className,
        'w-full rounded-md dark:bg-dark',
        'border border-slate-300 dark:border-slate-600',
        'focus-focus'
      )}
      {...rest}
    />
  );
}
