import GithubIcon from '@/ui/icons/GithubIcon'
import LinkIcon from '@/ui/icons/LinkIcon'

const styles = {
  project: 'project',
  projectContainer: 'project__container',
  imgContainer: 'project__img__container',
  projectDetails: 'project__details',
  projectTitle: 'project__title',
  projectDescription: 'project__description',
  tags: 'project__tags',
  tag: 'project__tag',
  links: 'project__links',
  link: 'project__link',
}

const Project = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl } = project

  const iconStyles = { color: 'var(--text-primary)', width: '27' }

  return (
    <div className='px-10 py-8 grid grid-cols-[1fr] lg:grid-cols-[2fr_3fr] items-center gap-8 lg:gap-12'>
      <div className='img-container w-full motion-safe:animate-from-left'>
        <a href={liveUrl} target='_blank' rel='noreferrer'>
          <img
            src={image}
            alt={title}
            className='block outline outline-1 outline-transparent hover:outline-accent hover:shadow-[0_0_6px_1px_var(--hoverShadow)]'
          />
        </a>
      </div>
      <div className='flex flex-col justify-between gap-4 text-right'>
        <h3 className='project-title ml-16 text-3xl leading-10 border-b-8 border-text-primary'>
          {title}
        </h3>
        <p className='project-description text-sm font-light'>{description}</p>
        <div className='tags'>
          <ul className='flex justify-end gap-4 flex-wrap'>
            {tags.map((tag) => (
              <li key={tag} className='px-2 py-0.5 text-sm font-bold text-[#eee] bg-accent'>
                {tag}
              </li>
              // <Tag key={tag} name={tag}/>
            ))}
          </ul>
        </div>
        <div className='links flex justify-end items-center gap-2'>
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
