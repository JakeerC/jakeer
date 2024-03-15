import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

import Accent from '@/components/Accent';

type SocialLink = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
  show: boolean;
};
export const socialLinks: SocialLink[] = [
  {
    href: 'https://clarence.link/github',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className="font-medium">Github</Accent>
      </>
    ),
    show: true,
  },
  {
    href: 'https://clarence.link/linkedin',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className="font-medium">Linkedin</Accent>
      </>
    ),
    show: true,
  },
  {
    href: 'https://clarence.link/twt',
    icon: SiX,
    id: 'Twitter',
    text: (
      <>
        I post updates, tips, insight, and sometimes do some talk. Follow me on{' '}
        <Accent className="font-medium">Twitter</Accent>!
      </>
    ),
    show: true,
  },
];
