// ? not important for mainstream screens

import clsx from 'clsx';

type ColorSwatchProps = {
  title: string;
  subTitle: string;
  colorClassName: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function ColorSwatch({
  className,
  colorClassName,
  title,
  subTitle,
  ...rest
}: ColorSwatchProps) {
  return (
    <div className={clsx('mt-4 flex items-center gap-2', className)} {...rest}>
      <div
        className={clsx(
          'h-10 w-10 rounded',
          'shadow-sm dark:shadow-none',
          'border border-slate-300 dark:border-slate-600',
          'shrink-0',
          colorClassName
        )}
      />
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{subTitle}</p>
      </div>
    </div>
  );
}
