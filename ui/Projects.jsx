import Project from '@/ui/Project'
import projects from '@/lib/data/projects'

const Projects = () => {
  return (
    <section id='projects' className='mt-0 xl:mt-11 py-12 px-[6vw]'>
      <div className='flex flex-col justify-between max-w-[970px]'>
        <h2 className='mt-4 mx-6 font-sans text-4xl font-light'>Projects</h2>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
        <div className='h-9' />
      </div>
    </section>
  )
}

export default Projects
