import clsx from 'clsx';

import UnstyledLink from '@/components/links/UnstyledLink';

type TOCLinkProps = {
  id: string;
  level: number;
  minLevel: number;
  text: string;
  activeSection: string | null;
};

export default function TOCLink({
  id,
  level,
  minLevel,
  text,
  activeSection,
}: TOCLinkProps) {
  return (
    <UnstyledLink
      href={`#${id}`}
      id={`link-${id}`}
      className={clsx(
        'font-medium hover:text-slate-700 focus:outline-none dark:hover:text-slate-200',
        'focus-visible:text-slate-700 dark:focus-visible:text-slate-200 focus-focus', // TODO: focus not properly styled
        activeSection === id
          ? 'text-slate-900 dark:text-slate-100'
          : 'text-slate-400 dark:text-slate-500'
      )}
      style={{ marginLeft: (level - minLevel) * 16 }}
    >
      {text}
    </UnstyledLink>
  );
}
