import cn from '@/lib/cn';

import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={cn(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'border-b border-dotted border-dark hover:border-black/0',
        className
      )}
    >
      <span className="dark:text-gradient-primary-300-to-400">{children}</span>
    </UnstyledLink>
  );
}
