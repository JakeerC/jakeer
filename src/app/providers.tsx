'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
const queryClient = new QueryClient();
import NextTopLoader from 'nextjs-toploader';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextTopLoader
        color="linear-gradient(90deg, rgba(219,255,0,1) 0%, rgba(0,232,135,1) 35%, rgba(0,224,243,1) 100%)"
        height={4}
        showSpinner={false}
      />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  );
}
