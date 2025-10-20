'use client'

import type { Category, Project } from '@/lib/data/projects'
import { CATEGORIES } from '@/lib/data/projects'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

const categories = [...CATEGORIES, 'All'] as const

const Projects = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<Category | 'All'>('All')

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.categories.includes(filter as Category)
  )

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const experimentProjects = filteredProjects.filter((project) => !project.featured)

  const renderProjectList = (projectList: Project[]) => (
    <ul className='flex flex-col gap-2'>
      {projectList.map((project) => (
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
  )

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

        {featuredProjects.length > 0 && (
          <div className='mb-8'>
            <h3 className='mb-3 border-b border-b-text-primary font-mono text-sm text-text-primary uppercase tracking-wide'>Work</h3>
            {renderProjectList(featuredProjects)}
          </div>
        )}

        {experimentProjects.length > 0 && (
          <div>
            <h3 className='mb-3 border-b border-b-text-primary font-mono text-sm text-text-primary uppercase tracking-wide'>Play</h3>
            {renderProjectList(experimentProjects)}
          </div>
        )}
      </div>
    </>
  )
}

export default Projects
