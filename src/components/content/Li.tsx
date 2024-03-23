import * as React from 'react';

import cn from '@/lib/cn';

function Li({ className, children, ...rest }: React.ComponentProps<'li'>) {
  return (
    <li
      {...rest}
      className={cn(['flex items-start', 'last-of-type:mb-0', className])}
    >
      <span
        // style={{ transform: 'translateY(5px)' }}
        className={cn([
          'flex items-center',
          'pr-4 pt-0',
          'text-primary-300 dark:text-primary-300/80',
          'translate-y-1',
        ])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
      <div>{children}</div>
    </li>
  );
}

export default Li;
