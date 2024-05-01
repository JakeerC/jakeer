import * as React from 'react';
import { TbMenuOrder } from 'react-icons/tb';

import TOCLink from '@/components/links/TOCLink';
import clsx from 'clsx';

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
      <summary className="m-2 p-2 cursor-pointer flex gap-2 items-center focus-focus relative">
        <TbMenuOrder className="text-xl" />
        <h3 className="text-slate-900 dark:text-slate-100 md:text-xl">
          Table of Contents
        </h3>
      </summary>
      <hr className="dark:border-slate-500" />
      <div className="mx-8 px-4 my-4 flex flex-col space-y-2 text-sm">
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
