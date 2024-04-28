'use client';

import Accent from '@/components/Accent';
import ProjectCard from '@/components/cards/ProjectCard';

import { ProjectsType } from '@/app/projects/page';

export default function Projects({ projects }: ProjectsType) {
  return (
    <>
      <main>
        <section className="fade-in-start">
          <div className="layout py-12">
            <h1 className="text-3xl md:text-5xl" data-fade="0">
              <Accent>Projects</Accent>
            </h1>
            <p
              data-fade="1"
              className="mt-2 text-slate-600 dark:text-slate-300"
            >
              Showcase of my work.
            </p>

            <ul
              data-fade="2"
              className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
