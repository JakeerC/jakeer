import clsx from 'clsx';
import * as React from 'react';
import { TbMenuOrder } from 'react-icons/tb';

import TOCLink from '@/components/links/TOCLink';

export type HeadingScrollSpy = Array<{
  id: string;
  level: number;
  text: string;
}>;

type TableOfContentsProps = {
  toc?: HeadingScrollSpy;
  activeSection: string | null;
  minLevel: number;
};

export default function TableOfContents({
  toc,
  activeSection,
  minLevel,
}: TableOfContentsProps) {
  return (
    <details
      id="toc-container"
      className={clsx(
        'border border-slate-300 dark:border-slate-500 rounded-md',
        'overflow-auto'
      )}
      title="click to see content overview"
    >
      <summary
        className={clsx(
          'relative',
          'm-2 p-2',
          'cursor-pointer focus-focus',
          'flex gap-2 items-center'
        )}
      >
        <TbMenuOrder className="text-xl" />
        <h3 className="text-slate-900 dark:text-slate-100 md:text-xl">
          Table of Contents
        </h3>
      </summary>
      <hr className="border-slate-300 dark:border-slate-500" />
      <div
        className={clsx('mx-8 my-4 px-4', 'flex flex-col', 'space-y-2 text-sm')}
      >
        {toc
          ? toc.map(({ id, level, text }) => (
              <TOCLink
                id={id}
                key={id}
                activeSection={activeSection}
                level={level}
                minLevel={minLevel}
                text={text}
              />
            ))
          : null}
      </div>
    </details>
  );
}
