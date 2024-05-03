import CustomLink from '@/components/links/CustomLink';

export default function NotFoundPage() {
  return (
    <section className="layout flex min-h-[55vh] flex-col items-center justify-center text-center">
      <p className="text-base font-semibold text-primary-300">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl text-slate-900 dark:text-slate-300">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <CustomLink className="mt-4" href="/">
        Back to Home
      </CustomLink>
    </section>
  );
}
