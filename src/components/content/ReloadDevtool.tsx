'use client';
//! TODO change import of useRouter from legacy
import { usePathname } from 'next/navigation';
import { HiRefresh } from 'react-icons/hi';

import ButtonLink from '@/components/links/ButtonLink';

import { isProd } from '@/constants';

export default function ReloadDevtool() {
  const pathname = usePathname();

  return !isProd ? (
    <ButtonLink href={pathname} className="fixed bottom-4 left-4">
      <HiRefresh />
    </ButtonLink>
  ) : null;
}
