import clsx from 'clsx';

import Tooltip from '@/components/Tooltip';

import { techList } from '@/constants';

import { TechListNameType } from '@/types/techList';

export type TechIconsProps = {
  techs: Array<TechListNameType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map(tech => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} tipChildren={<p>{current.name}</p>}>
            <li className="text-xl text-slate-700 dark:text-slate-200">
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}
