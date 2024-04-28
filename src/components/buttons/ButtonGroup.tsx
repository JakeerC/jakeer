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
    <div className="inline-flex -space-x-px overflow-hidden bg-white border rounded-md shadow-sm  focus-focus">
      {options.map(opt => (
        <button
          className={clsx(
            'inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-primary-300/5 focus:relative dark:bg-dark focus-focus', //TODO: focus-focus not visible properly
            selected.name === opt.name
              ? 'bg-active'
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
