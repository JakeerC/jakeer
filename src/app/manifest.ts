import { MetadataRoute } from 'next';

import { homeDesc } from '@/constants';
import { THEME_COLOR_DARK, THEME_COLOR_LIGHT } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jakeer | Personal Website | Jakeer is a passionate software developer who likes to learn, share, teach and develop',
    short_name: "Jakeer's Personal website",
    description: homeDesc,
    start_url: '/',
    display: 'standalone',
    background_color: THEME_COLOR_LIGHT,
    theme_color: THEME_COLOR_DARK,
    dir: 'ltr',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
