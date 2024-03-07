'use client';
import clsx from 'clsx';
import * as React from 'react';
import { BiCheck, BiCopy } from 'react-icons/bi';
import { BsTextWrap } from 'react-icons/bs';

import cn from '@/lib/cn';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

export function Pre({
  className,
  children,
  'data-language': language,
  ...rest
}: React.ComponentPropsWithRef<'pre'> & { 'data-language': string }) {
  const preRef = React.useRef<HTMLPreElement>(null);

  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [shouldWrap, setShouldWrap] = React.useState(false);

  const [copy] = useCopyToClipboard();
  console.log({ rest });

  return (
    // word-break: break-word;
    // @apply nx-whitespace-pre-wrap md:nx-whitespace-pre;
    <pre
      {...rest}
      ref={preRef}
      className={cn([
        'group relative',
        'pt-12',
        'rounded-sm',
        // 'whitespace-pre-wrap break-words',
        className,
      ])}
      data-word-wrap={shouldWrap}
    >
      {children}
      {language && (
        <div className="absolute top-0 left-6 rounded-b-md border border-t-0 border-gray-600 px-3 py-1">
          <span className="select-none bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text font-medium text-transparent">
            {language}
          </span>
        </div>
      )}
      <div
        className={clsx(
          'opacity-0 transition focus-within:opacity-100 group-hover:opacity-100',
          'absolute right-0 top-0 z-10 m-[11px] flex gap-1'
        )}
      >
        <button
          onClick={() => setShouldWrap(prev => !prev)}
          title="Wrap code"
          className={clsx([
            'md:hidden',
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700',
          ])}
        >
          <BsTextWrap />
        </button>
        <button
          onClick={() => {
            copy(preRef?.current?.textContent ?? '').then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1500);
            });
          }}
          title="Copy code"
          className={clsx([
            'rounded p-1 text-lg transition-colors md:block',
            'border border-gray-300 dark:border-gray-600',
            'text-gray-700 dark:text-gray-300',
            'bg-[#f2f7fc] hover:bg-gray-100 dark:bg-[#22272e] dark:hover:bg-gray-700',
          ])}
        >
          {isCopied ? <BiCheck /> : <BiCopy />}
        </button>
      </div>
    </pre>
  );
}
