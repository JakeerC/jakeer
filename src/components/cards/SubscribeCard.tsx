import clsx from 'clsx';

import Accent from '@/components/Accent';
import ButtonLink from '@/components/links/ButtonLink';

import { subStackURL } from '@/constants';

type SubscribeCardProps = {
  className?: string;
  title?: string;
  description?: string;
};
export default function SubscribeCard({
  className,
  title,
  description,
}: SubscribeCardProps) {
  return (
    <div className={clsx('rounded border p-4 dark:border-gray-600', className)}>
      <h2>
        <Accent>{title ?? 'Join to the newsletter list'}</Accent>
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {description ??
          "Don't miss out. Get an email whenever I post, no spam."}
      </p>
      <ButtonLink className="mt-2" href={subStackURL}>
        Subscribe Now
      </ButtonLink>
    </div>
  );
}
