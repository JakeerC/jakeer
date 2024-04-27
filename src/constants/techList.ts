// import { IoLogoVercel } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { AiOutlineMacCommand } from 'react-icons/ai';
import {
  SiCss3,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { VscSymbolMisc } from 'react-icons/vsc';

export const techList: Record<string, { name: string; icon: IconType }> = {
  uncharacterized: {
    icon: VscSymbolMisc,
    name: 'Miscellaneous',
  },
  misc: {
    icon: VscSymbolMisc,
    name: 'Miscellaneous',
  },
  mac: {
    icon: AiOutlineMacCommand,
    name: 'Mac',
  },
  css: {
    icon: SiCss3,
    name: 'CSS',
  },
  styling: {
    icon: SiCss3,
    name: 'CSS',
  },
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: SiVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  swift: {
    icon: SiSwift,
    name: 'Swift',
  },
};
export const techNamesList = Object.keys(techList);
export type TechListType = keyof typeof techList;
