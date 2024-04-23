import clsx from 'clsx';
import * as React from 'react';
import { IconType } from 'react-icons/lib';

export type ButtonGroupOption = {
  id: string;
  name: string;
  icon: IconType;
};

type ButtonGroupProps = {
  selected: ButtonGroupOption;
  setSelected: React.Dispatch<React.SetStateAction<ButtonGroupOption>>;
  options: ButtonGroupOption[];
};

export default function ButtonGroup({
  selected,
  setSelected,
  options,
}: ButtonGroupProps) {
  return (
    <div className="inline-flex -space-x-px overflow-hidden bg-white border rounded-md shadow-sm">
      {options.map(opt => (
        <button
          className={clsx(
            'inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-300/5 focus:relative dark:bg-dark',
            selected.name === opt.name
              ? // ? 'bg-primary-300/20 dark:bg-primary-300 hover:bg-primary-300/20 hover:dark:bg-primary-300 dark:text-white'
                'bg-gradient-to-tr from-primary-300/40 via-primary-300/40 to-primary-400/40 dark:from-primary-300 dark:to-primary-400 '
              : 'text-gray-700 dark:text-gray-300'
          )}
          key={opt.name}
          onClick={() => setSelected(opt)}
        >
          <span className="block truncate">
            <span className="inline-flex items-center gap-2">
              <opt.icon />
              {opt.name}
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
