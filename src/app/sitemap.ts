import { MetadataRoute } from 'next';

import { domain } from '@/constants/urls';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: `monthly`,
      priority: 1,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      changeFrequency: `monthly`,
      priority: 0.8,
    },
    {
      url: `${domain}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${domain}/snippets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${domain}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
