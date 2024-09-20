import Project from '@/ui/Project'

import type { Project as ProjectType } from '@/lib/data/projects'

const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <section id='projects' className='mt-11 px-[6vw] py-12'>
      <div className='flex max-w-[970px] flex-col justify-between'>
        <h2 className='mx-6 mt-4 font-light font-sans text-4xl'>Projects</h2>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
        <div className='h-9' />
      </div>
    </section>
  )
}

export default Projects
