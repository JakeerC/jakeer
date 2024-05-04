import clsx from 'clsx';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-primary-500/40 via-primary-500/40 to-primary-300/40',
        'dark:from-primary-500 dark:to-primary-300 dark:bg-clip-text dark:text-transparent'
      )}
    >
      {children}
    </span>
  );
}
