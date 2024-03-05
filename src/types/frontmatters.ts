import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
  englishOnly?: boolean;
  title: string;
  description: string;
  banner: string;
  publishedAt: string;
  lastUpdated?: string;
  tags: string;
  repost?: string;
};

export type ContentType = 'blog' | 'snippets' | 'projects';

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'snippets'
    ? SnippetFrontmatter
    : ProjectFrontmatter;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type SnippetFrontmatter = {
  slug: string;
  title: string;
  readingTime: ReadTimeResults;
  description: string;
  tags: string;
};

export type SnippetType = {
  code: string;
  frontmatter: SnippetFrontmatter;
};

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  publishedAt: string;
  lastUpdated?: string;
  description: string;
  category?: string;
  techs: string;
  banner: string;
  link?: string;
  github?: string;
  youtube?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type FrontmatterWithTags = BlogFrontmatter | SnippetFrontmatter;
export type FrontmatterWithDate = BlogFrontmatter | ProjectFrontmatter;
export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | SnippetFrontmatter;
