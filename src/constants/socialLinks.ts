import { IconType } from 'react-icons';
import { SiGithub, SiGmail, SiLinkedin, SiRss, SiX } from 'react-icons/si';

import { domain, githubURL, linkedInURL, twitterURL } from './urls';

type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: IconType;
  id: string;
  show: boolean;
};
export const socialLinks: SocialLink[] = [
  {
    href: githubURL,
    icon: SiGithub,
    id: 'Github',
    ariaLabel: 'Link to Github',
    show: true,
  },
  {
    href: linkedInURL,
    icon: SiLinkedin,
    id: 'Linkedin',
    ariaLabel: 'Link to Linkedin',
    show: true,
  },
  {
    href: twitterURL,
    icon: SiX,
    id: 'Twitter',
    ariaLabel: 'Link to Twitter',
    show: true,
  },
  {
    href: `mailto:jakeerchilakala@gmail.com`,
    icon: SiGmail,
    id: 'Mail',
    ariaLabel: 'Open new mail',
    show: true,
  },
  {
    href: `${domain}/rss.xml`,
    id: 'RSS',
    ariaLabel: 'Link to RSS',
    icon: SiRss,
    show: false,
  },
];
