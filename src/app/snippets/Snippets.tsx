'use client';
import clsx from 'clsx';
import * as React from 'react';
import { GiTechnoHeart } from 'react-icons/gi';
import { HiSortAscending } from 'react-icons/hi';

import { getTags, sortTitleFn } from '@/lib/mdx.client';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import SnippetsCard from '@/components/cards/SnippetsCard';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import Tag, { SkipNavTag } from '@/components/content/Tag';
import StyledInput from '@/components/form/StyledInput';
import SortListbox, { SortOption } from '@/components/SortListbox';

import { SnippetsType } from '@/app/snippets/page';

import { SnippetFrontmatter } from '@/types/frontmatters';

const sortOptions: Array<SortOption> = [
  {
    id: 'name',
    name: 'A-Z',
    icon: HiSortAscending,
  },
  { id: 'popular', name: 'Popular', icon: GiTechnoHeart },
];

export default function Snippets({ snippets, tags }: SnippetsType) {
  const [sortOrder, setSortOrder] = React.useState<SortOption>(sortOptions[0]);

  const populatedPosts = useInjectContentMeta('snippets', snippets);

  //#region  //*=========== Search ===========
  const [search, setSearch] = React.useState<string>('');
  const [filtered, setFiltered] = React.useState<Array<SnippetFrontmatter>>(
    () => [...snippets]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    const results = populatedPosts.filter(
      snippet =>
        snippet.title.toLowerCase().includes(search.toLowerCase()) ||
        snippet.description.toLowerCase().includes(search.toLowerCase()) ||
        // Check if splitted search contained in tag
        search
          .toLowerCase()
          .split(' ')
          .every(tag => snippet.tags.includes(tag))
    );

    if (sortOrder.id === 'date') {
      results.sort(sortTitleFn);
    } else if (sortOrder.id === 'popular') {
      results.sort((a, b) => (b?.likes ?? 0) - (a?.likes ?? 0));
    }

    setFiltered(results);
  }, [populatedPosts, search, sortOrder.id]);
  //#endregion  //*======== Search ===========

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

  /** Currently available tags based on filtered snippets */
  const filteredTags = getTags(filtered);

  /** Show accent if not disabled and selected  */
  const checkTagged = (tag: string) => {
    return (
      filteredTags.includes(tag) &&
      search.toLowerCase().split(' ').includes(tag)
    );
  };
  //#endregion  //*======== Tag ===========

  return (
    <main>
      <section className={clsx('fade-in-start')}>
        <div className="layout py-12">
          <h1 className="text-3xl md:text-5xl" data-fade="0">
            <Accent>Shorts</Accent>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300" data-fade="1">
            Short article that's not long enough to be a blog post, usually
            comes from my personal notes.
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
            className="mt-2 flex flex-wrap items-baseline justify-start gap-2 text-sm text-gray-600 dark:text-gray-300"
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
            className="relative z-10 mt-4 flex flex-col items-end gap-4 text-gray-600 dark:text-gray-300 md:mt-8"
            data-fade="4"
          >
            <SortListbox
              selected={sortOrder}
              setSelected={setSortOrder}
              options={sortOptions}
            />
          </div>

          <ul
            className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            data-fade="5"
          >
            {filtered.length > 0 ? (
              filtered.map(snippet => (
                <SnippetsCard
                  key={snippet.slug}
                  snippet={snippet}
                  checkTagged={checkTagged}
                />
              ))
            ) : (
              <ContentPlaceholder />
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
