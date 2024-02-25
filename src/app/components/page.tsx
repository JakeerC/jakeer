'use client';
import Button from '@/components/buttons/Button';
import ThemeButton from '@/components/buttons/ThemeButton';
import StyledInput from '@/components/form/StyledInput';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import ShareTweetButton from '@/components/links/ShareTweetButton';
import TOCLink from '@/components/links/TOCLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/media/NextImage';

export default function Components() {
  return (
    <div className="flex flex-col mt-8 mb-8 gap-4 justify-center items-center m-auto align-middle md:w-[40rem]">
      <ThemeButton />

      <Button> Button label</Button>

      <StyledInput />

      {/* Links */}

      <UnstyledLink href={'https://github.com/JakeerC'}>
        github account
      </UnstyledLink>

      <UnstyledLink href={'/components#unstyledlink'}>
        UnstyledLink link
      </UnstyledLink>

      <ButtonLink href={'/components#ButtonLink'}> Button Link </ButtonLink>

      <CustomLink href={'/components#customlink'}>Custom Link</CustomLink>

      <ShareTweetButton
        url="https://twitter.com/jakeerchilakala"
        title="Jakeer twitter profile"
      />

      <TOCLink
        text="toc link l1"
        activeSection={'customlink'}
        id="customlink"
        level={1}
        key={'customlink'}
        minLevel={1}
      />
      <TOCLink
        text="toc link l2"
        activeSection={''}
        id="unstyledlink"
        level={2}
        key={'unstyledlink'}
        minLevel={1}
      />

      <NextImage
        alt="corner-arrow"
        height={16}
        width={16}
        src={'/images/new-tab.png'}
      />
      <NextImage
        alt="corner-arrow"
        height={400}
        width={400}
        className="bg-green"
        src={'/images/blossoms.avif'}
        useSkeleton
      />
    </div>
  );
}
