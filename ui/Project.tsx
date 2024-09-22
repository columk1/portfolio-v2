import GithubIcon from '@/ui/icons/GithubIcon'
import LinkIcon from '@/ui/icons/LinkIcon'
import Image from 'next/image'
import type { Project as ProjectType } from '@/lib/data/projects'

const Project = ({
  project,
  preloadImage = false,
}: {
  project: ProjectType
  preloadImage: boolean
}) => {
  const { title, description, image, tags, liveUrl, githubUrl } = project

  const iconStyles = { color: 'var(--text-primary)', width: '27' }

  return (
    <div className='grid grid-cols-[1fr] items-center gap-8 px-10 py-8 lg:grid-cols-[2fr_3fr] lg:gap-12'>
      <div className='img-container w-full motion-safe:animate-from-left'>
        <a href={liveUrl} target='_blank' rel='noreferrer'>
          <Image
            src={image}
            width={800}
            height={600}
            alt={title}
            className='block outline outline-1 outline-transparent hover:shadow-[0_0_6px_1px_var(--hoverShadow)] hover:outline-accent hover:transition-all hover:duration-200 hover:ease-in'
            priority={preloadImage}
            loading={preloadImage ? 'eager' : 'lazy'}
          />
        </a>
      </div>
      <div className='flex flex-col justify-between gap-4 text-right'>
        <h3 className='project-title ml-16 border-text-primary border-b-8 text-3xl leading-10'>
          {title}
        </h3>
        <p className='project-description font-light text-sm'>{description}</p>
        <div className='tags'>
          <ul className='flex flex-wrap justify-end gap-4'>
            {tags.map((tag) => (
              <li key={tag} className='bg-accent px-2 py-0.5 font-bold text-[#eee] text-sm'>
                {tag}
              </li>
              // <Tag key={tag} name={tag}/>
            ))}
          </ul>
        </div>
        <div className='links flex items-center justify-end gap-2'>
          <a
            href={liveUrl}
            target='_blank'
            rel='noreferrer'
            aria-label='Live Website Link'
            className='hover:scale-105'
          >
            <LinkIcon styles={iconStyles} />
          </a>
          <a
            href={githubUrl}
            target='_blank'
            rel='noreferrer'
            aria-label='Github Repo'
            className='hover:scale-105'
          >
            <GithubIcon styles={iconStyles} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
