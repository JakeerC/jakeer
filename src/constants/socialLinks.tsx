import { IconType } from 'react-icons';
import { SiGithub, SiGmail, SiLinkedin, SiRss, SiX } from 'react-icons/si';

import { domain, githubURL, linkedInURL, twitterURL } from '@/constants/urls';

type SocialLink = {
  href: string;
  icon: IconType;
  id: string;
  show: boolean;
};
export const socialLinks: SocialLink[] = [
  {
    href: githubURL,
    icon: SiGithub,
    id: 'Github',
    show: true,
  },
  {
    href: linkedInURL,
    icon: SiLinkedin,
    id: 'Linkedin',

    show: true,
  },
  {
    href: twitterURL,
    icon: SiX,
    id: 'Twitter',
    show: true,
  },
  {
    href: `mailto:jakeerchilakala@gmail.com`,
    icon: SiGmail,
    id: 'Mail',
    show: true,
  },
  {
    href: `${domain}/rss.xml`,
    id: 'RSS',
    icon: SiRss,
    show: false,
  },
];
