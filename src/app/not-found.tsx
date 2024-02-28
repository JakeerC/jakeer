import { RiAlarmWarningFill } from 'react-icons/ri';

import CustomLink from '@/components/links/CustomLink';

export default function NotFoundPage() {
  return (
    <section className="bg-dark">
      <div className="layout flex min-h-screen flex-col items-center justify-center text-center text-white">
        <RiAlarmWarningFill
          size={60}
          className="drop-shadow-glow animate-flicker text-yellow-300"
        />
        <h1 className="mt-8">Page Not Found</h1>
        <CustomLink className="mt-4" href="/">
          Back to Home
        </CustomLink>
      </div>
    </section>
  );
}
