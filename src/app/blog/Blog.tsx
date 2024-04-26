'use client';
import clsx from 'clsx';
import React from 'react';
import { HiCalendar, HiEye } from 'react-icons/hi';

import { getFromSessionStorage } from '@/lib/helper.client';
import { getTags, sortDateFn } from '@/lib/mdx.client';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import Button from '@/components/buttons/Button';
import ButtonGroup, {
  ButtonGroupOption,
} from '@/components/buttons/ButtonGroup';
import BlogCard from '@/components/cards/BlogCard';
import SubscribeCard from '@/components/cards/SubscribeCard';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import Tag, { SkipNavTag } from '@/components/content/Tag';
import StyledInput from '@/components/form/StyledInput';

import { BlogType } from '@/app/blog/page';

import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatters';

const sortOptions: Array<ButtonGroupOption> = [
  {
    id: 'date',
    name: 'Recent',
    icon: HiCalendar,
  },
  {
    id: 'views',
    name: 'Popular',
    icon: HiEye,
  },
];

export default function Blog({ posts, tags }: BlogType) {
  const populatedPosts = useInjectContentMeta('blog', posts);

  /** Lazy init from session storage to preserve preference on revisit */
  const [sortOrder, setSortOrder] = React.useState<ButtonGroupOption>(
    () => sortOptions[Number(getFromSessionStorage('blog-sort')) || 0]
  );
  const [isEnglish, setIsEnglish] = React.useState<boolean>(true);

  //#region  //*=========== Search ===========
  const [search, setSearch] = React.useState<string>('');
  const [filteredPosts, setFilteredPosts] = React.useState<
    Array<BlogFrontmatter & InjectedMeta>
  >(() => [...posts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const clearSearch = () => setSearch('');

  React.useEffect(() => {
    const results = populatedPosts.filter(
      post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        // Check if splitted search contained in tag
        search
          .toLowerCase()
          .split(' ')
          .every(tag => post.tags.includes(tag))
    );

    if (sortOrder.id === 'date') {
      results.sort(sortDateFn);
      sessionStorage.setItem('blog-sort', '0');
    } else if (sortOrder.id === 'views') {
      results.sort((a, b) => (b?.views ?? 0) - (a?.views ?? 0));
      sessionStorage.setItem('blog-sort', '1');
    }

    setFilteredPosts(results);
  }, [search, sortOrder.id, populatedPosts]);
  //#endregion  //*======== Search ===========

  //#region  //*=========== Post Language Splitter ===========
  const englishPosts = filteredPosts.filter(p => !p.slug.startsWith('id-'));
  const otherLanguagePosts = filteredPosts.filter(p =>
    p.slug.startsWith('id-')
  );
  const currentPosts = isEnglish ? englishPosts : otherLanguagePosts;
  //#endregion  //*======== Post Language Splitter ===========

  //#region  //*=========== Tag ===========
  const toggleTag = (tag: string) => {
    // If tag is already there, then remove
    if (search.includes(tag)) {
      setSearch(s =>
        s
          .split(' ')
          .filter(t => t !== tag)
          ?.join(' ')
      );
    } else {
      // append tag
      setSearch(s => (s !== '' ? `${s.trim()} ${tag}` : tag));
    }
  };

  /** Currently available tags based on filtered posts */
  const filteredTags = getTags(currentPosts);

  /** Show accent if not disabled and selected  */
  const checkTagged = (tag: string) => {
    return (
      // filteredTags.includes(tag) &&
      search.toLowerCase().split(' ').includes(tag)
    );
  };
  //#endregion  //*======== Tag ===========

  return (
    <>
      <section className={clsx('fade-in-start')}>
        <div className="py-12 layout">
          <h1 className="text-3xl md:text-5xl" data-fade="0">
            <Accent>Blog {!isEnglish && 'Other Languages'}</Accent>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300" data-fade="1">
            Thoughts and tutorials about front-end development and design.
          </p>
          <StyledInput
            data-fade="2"
            className="mt-4"
            placeholder="Search..."
            onChange={handleSearch}
            value={search}
            type="text"
          />
          <div
            className="flex flex-wrap items-baseline justify-start gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300"
            data-fade="3"
          >
            <span className="font-medium">Choose topic:</span>
            <SkipNavTag>
              {tags.map(tag => (
                <Tag
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  disabled={!filteredTags.includes(tag)}
                >
                  {checkTagged(tag) ? <Accent>{tag}</Accent> : tag}
                </Tag>
              ))}
            </SkipNavTag>
          </div>
          <div
            className="relative z-10 flex flex-col items-end gap-4 mt-6 text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-end"
            data-fade="4"
          >
            <Button
              onClick={() => {
                setIsEnglish(b => !b);
                clearSearch();
              }}
              className="text-sm !font-medium hidden" // ! Hidden
            >
              Read in {isEnglish ? 'Other Languages' : 'English'}
            </Button>
            <ButtonGroup
              selected={sortOrder}
              setSelected={setSortOrder}
              options={sortOptions}
            />
          </div>
          <ul
            className="grid gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3"
            data-fade="5"
          >
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  checkTagged={checkTagged}
                />
              ))
            ) : (
              <ContentPlaceholder />
            )}
          </ul>
          <SubscribeCard className="mt-8" />
        </div>
      </section>
    </>
  );
}
