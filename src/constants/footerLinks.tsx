import { domain } from '@/constants/urls';

type FooterLinks = {
  href: string;
  text: string;
  tooltip: React.ReactNode;
  show: boolean;
};

export const footerLinks: FooterLinks[] = [
  {
    href: 'https://github.com/jakeerc/jakeer',
    text: 'Source Code',
    tooltip: (
      <>
        This website is <strong>open source</strong>!
      </>
    ),
    show: true,
  },
  {
    href: '/design',
    text: 'Design',
    tooltip: ' https://jakeer.vercel.app/color-pallet color palette',
    show: true,
  },
  {
    href: '#', //TODO
    text: 'Docs',
    tooltip: 'Personal documentation about my best practices on development',
    show: false,
  },
  {
    href: '#', //TODO
    text: 'Book Notes',
    tooltip: 'Note collection of books that I read',
    show: false,
  },
  {
    href: '#', //TODO
    text: 'Starter Templates',
    tooltip: 'Starter that I build and use throughout my projects',
    show: false,
  },
  {
    href: '#', //TODO
    text: 'Analytics',
    tooltip: `${domain} views and visitors analytics`,
    show: false,
  },
  {
    href: '#', //TODO
    text: 'Statistics',
    tooltip: 'Blog, Projects, and Snippet Statistics',
    show: false,
  },
  {
    href: '/guestbook',
    text: 'Guestbook',
    tooltip:
      'Leave whatever you like to say—message, appreciation, suggestions',
    show: true,
  },
  {
    href: '/subscribe',
    text: 'Subscribe',
    tooltip: 'Get an email whenever I post, no spam',
    show: false,
  },
  {
    href: `${domain}/rss.xml`,
    text: 'RSS',
    tooltip: `Add ${domain} blog to your feeds`,
    show: true,
  },
];
