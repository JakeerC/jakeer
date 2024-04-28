'use client';
import clsx from 'clsx';
import * as React from 'react';
import { HiCalendar, HiEye } from 'react-icons/hi';

import { getTags, sortTitleFn } from '@/lib/mdx.client';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';

import Accent from '@/components/Accent';
import ButtonGroup, {
  ButtonGroupOption,
} from '@/components/buttons/ButtonGroup';
import SnippetsCard from '@/components/cards/SnippetsCard';
import ContentPlaceholder from '@/components/content/ContentPlaceholder';
import Tag, { SkipNavTag } from '@/components/content/Tag';
import StyledInput from '@/components/form/StyledInput';

import { SnippetsType } from '@/app/snippets/page';

import { SnippetFrontmatter } from '@/types/frontmatters';

const sortOptions: Array<ButtonGroupOption> = [
  {
    id: 'recent',
    name: 'Recent',
    icon: HiCalendar,
  },
  { id: 'popular', name: 'Popular', icon: HiEye },
];

export default function Snippets({ snippets, tags }: SnippetsType) {
  const [sortOrder, setSortOrder] = React.useState<ButtonGroupOption>(
    sortOptions[0]
  );

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
        <div className="py-12 layout">
          <h1 className="text-3xl md:text-5xl" data-fade="0">
            <Accent>Snippets</Accent>
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300" data-fade="1">
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
            className="flex flex-wrap justify-start gap-2 mt-2 text-sm text-slate-600 dark:text-slate-300"
            data-fade="3"
          >
            <span className="font-medium self-end">Choose topic:</span>
            <SkipNavTag>
              {tags.map(tag => (
                <Tag
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  disabled={!filteredTags.includes(tag)}
                  techName={tag}
                  isChecked={checkTagged(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </SkipNavTag>
          </div>
          <div
            className="relative z-10 flex flex-col items-end gap-4 mt-4 text-slate-600 dark:text-slate-300 md:mt-8"
            data-fade="4"
          >
            <ButtonGroup
              selected={sortOrder}
              setSelected={setSortOrder}
              options={sortOptions}
            />
          </div>

          <ul
            className="grid gap-4 mt-4 sm:grid-cols-2 xl:grid-cols-3"
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
