import clsx from 'clsx';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import CloudinaryImg from '@/components/media/CloudinaryImg';
import TechIcons from '@/components/TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';
import { TechListNameType } from '@/types/techList';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600  bg-white dark:bg-dark',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col items-start rounded-md p-4 focus-focus"
      >
        <h2>{project.title}</h2>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-2">
          <TechIcons
            techs={project.techs.split(',') as Array<TechListNameType>}
          />
        </div>

        <CloudinaryImg
          className="pointer-events-none mt-3 w-full"
          publicId={`banner/${project.banner}`}
          alt={project.title}
          width={1440}
          height={792}
        />

        <p className="animated-underline mt-2 inline-block font-medium">
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
