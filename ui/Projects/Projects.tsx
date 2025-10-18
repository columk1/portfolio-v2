'use client'

import type { Project } from '@/lib/data/projects'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

const categories = ['E-commerce', 'App Development', 'Web Design', 'Branding', 'Marketing', 'All']

const Projects = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState('All')
  return (
    <>
      <div className='sm:-left-1.5 -left-[1px] sm:-rotate-90 absolute top-full translate-y-1 font-mono text-xs sm:top-auto sm:bottom-9 sm:max-w-[60vh] sm:origin-bottom-left sm:translate-y-0'>
        <ul className='flex flex-wrap gap-x-3 gap-y-1'>
          {categories.map((category) => (
            <button
              type='button'
              key={category}
              onClick={() => setFilter(category)}
              className='group flex items-center gap-1 hover:font-normal'
            >
              <li className='flex items-center gap-1'>
                {filter === category ? (
                  <span className=''>■</span>
                ) : (
                  <span className='group-hover:text-stroke-1'>□</span>
                )}
                {category}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <div className='px-6 py-4'>
        <h2 className='mb-4 font-light font-sans text-4xl'>Projects</h2>
        <ul className='flex flex-col gap-2'>
          {projects
            .filter((project) => filter === 'All' || project.categories.includes(filter))
            .map((project) => (
              <Link
                className='hover:font-light'
                key={project.title}
                prefetch={true}
                href={`/projects/${project.title.toLowerCase().replace(/['\s]+/g, '-')}`}
              >
                <div className='flex w-full items-baseline justify-between gap-2'>
                  <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{`${project.title}`}</p>
                  <span className='whitespace-nowrap text-xs'>
                    {project.categories[0]}
                  </span>
                </div>
              </Link>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Projects
