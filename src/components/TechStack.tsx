// ! dependencies => Tooltip, CustomLink
import clsx from 'clsx';
import {
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className="flex space-x-2 md:space-x-4">
      {stacks.map(
        tech =>
          tech.show && (
            <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
              <tech.icon
                key={tech.id}
                className={clsx(
                  'h-8 w-8 md:h-10 md:w-10',
                  'text-slate-600 hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-500',
                  'transition-colors'
                )}
              />
            </Tooltip>
          )
      )}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    show: true,
    icon: SiNextdotjs,
    tooltip: (
      <>
        <CustomLink href="https://nextjs.org">Next.js</CustomLink>
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    show: true,
    tooltip: (
      <>
        <CustomLink href="https://reactjs.org/">React</CustomLink>, underlying
        library of Next.js. I love the declarative approach and the ecosystem.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    show: true,
    tooltip: (
      <>
        <CustomLink href="https://www.typescriptlang.org/">
          TypeScript
        </CustomLink>
        is a strongly typed{' '}
        <span className="text-yellow-500 font-bold">JS</span> .
      </>
    ),
  },
  {
    id: 'tailwindCSS',
    show: true,
    icon: SiTailwindcss,
    tooltip: (
      <>
        <CustomLink href="https://tailwindcss.com/">Tailwind CSS</CustomLink> is
        awesome, I have never achieved this much reusability. Make sure you get
        the{' '}
        <CustomLink href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
          extension
        </CustomLink>
        .
      </>
    ),
  },
  {
    id: 'react-query',
    show: false,
    icon: SiReactquery,
    tooltip: (
      <>
        <CustomLink href="https://tanstack.com/">TanStack Query</CustomLink>,
        great react hooks for data fetching and caching. I maintain most of my
        API fetch (get, post, put, delete) in this library.
      </>
    ),
  },
  {
    id: 'prisma',
    show: false,
    icon: SiPrisma,
    tooltip: (
      <>
        <CustomLink href="https://www.prisma.io/">Prisma</CustomLink>, great and
        simple ORM. A little bit of documentation and you're good to go.
      </>
    ),
  },
];
