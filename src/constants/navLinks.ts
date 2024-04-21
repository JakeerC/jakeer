import { domain } from '@/constants/urls';

export const primaryNavLinks = [
  { href: '/', label: 'Home', show: true },
  { href: '/blog', label: 'Blog', show: true },
  { href: '/projects', label: 'Projects', show: true },
  { href: '/snippets', label: 'Snippets', show: true },
  { href: '/about', label: 'About', show: true },
];

export const secondaryNavLinks = [
  {
    href: 'https://github.com/jakeerc/jakeer',
    label: 'Source Code',
    show: true,
  },
  {
    href: '/design',
    label: 'Design',
    show: true,
  },
  {
    href: '#', //TODO
    label: 'Docs',
    show: false,
  },
  {
    href: '#', //TODO
    label: 'Analytics',
    show: false,
  },

  {
    href: '/guestbook',
    label: 'Guestbook',
    show: true,
  },
  {
    href: '/subscribe',
    label: 'Subscribe',
    show: false,
  },
  {
    href: `${domain}/rss.xml`,
    label: 'RSS',
    show: true,
  },
];
