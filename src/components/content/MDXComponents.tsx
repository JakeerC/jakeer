import Image from 'next/image';

import GithubCard from '@/components/cards/GithubCard';
// import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Quiz from '@/components/cards/Quiz';
import TweetCard from '@/components/cards/TweetCard';
import { Pre } from '@/components/content/Pre';
import SplitImage, { Split } from '@/components/content/SplitImage';
import CustomLink from '@/components/links/CustomLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';
import TechIcons from '@/components/TechIcons';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  CloudinaryImg,
  // LiteYouTubeEmbed,
  SplitImage,
  Split,
  TechIcons,
  TweetCard,
  GithubCard,
  Quiz,
};

export default MDXComponents;
