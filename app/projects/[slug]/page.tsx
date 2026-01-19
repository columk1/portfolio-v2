import { baseUrl } from '@/lib/config'
import GithubIcon from '@/ui/icons/GithubIcon'
import LinkIcon from '@/ui/icons/LinkIcon'
import type { Metadata } from 'next/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import projects from '@/lib/data/projects'

type ProjectPageProps = { params: Promise<{ slug: string }> }

const getCachedProject = cache(function getCachedProject(slug: string) {
  return projects.find((project) => project.slug === slug)
})

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getCachedProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const { title, description } = project
  const ogUrl = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`

  return {
    title: `${title} | Colum Kelly`,
    description: `${description}`,
    openGraph: {
      title: `${title} | Colum Kelly`,
      description,
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getCachedProject(slug)

  if (!project) {
    notFound()
  }

  const { title, description, image, categories, year, tags, liveUrl, githubUrl, imageVariant } = project
  const iconStyles = { color: 'var(--text-primary)', width: '27' }

  return (
    <section className='mt-11 px-[6vw] py-12'>
      <div className='flex max-w-[970px] flex-col justify-between'>
        {/* Title */}
        <h1 className='mx-6 mt-4 font-light font-sans text-4xl'>{title}</h1>

        {/* Info Grid */}
        <div className='mx-6 mt-8 mb-12 grid grid-cols-1 gap-8 font-mono text-sm sm:grid-cols-2 lg:grid-cols-3'>
          {/* Categories */}
          <div>
            <h2 className='mb-2 font-detail text-text-secondary text-xs uppercase tracking-wider'>
              Category
            </h2>
            <ul className='flex flex-col gap-1'>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          {/* Year */}
          <div>
            <h2 className='mb-2 font-detail text-text-secondary text-xs uppercase tracking-wider'>
              Year
            </h2>
            <p>{year}</p>
          </div>

          {/* Tags */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <h2 className='mb-2 font-detail text-text-secondary text-xs uppercase tracking-wider'>
              Tags
            </h2>
            <ul className='flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <li key={tag} className='bg-accent px-2 py-0.5 font-bold text-[#eee] text-xs'>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className='mx-6 mb-12'>
          <p className='max-w-3xl font-light text-base leading-relaxed sm:text-lg'>{description}</p>
        </div>

        {/* Links */}
        <div className='mx-6 mb-12 flex items-center gap-4'>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Live Website Link'
              className='flex items-center gap-2 hover:scale-105'
            >
              <LinkIcon styles={iconStyles} />
              <span className='text-sm'>Visit Site</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noreferrer'
              aria-label='Github Repo'
              className='flex items-center gap-2 hover:scale-105'
            >
              <GithubIcon styles={iconStyles} />
              <span className='text-sm'>View Code</span>
            </a>
          )}
        </div>

        {/* Image */}
        <div className='mx-6 mb-12'>
          <Image
            // style={{
            //   width: imageVariant === 'vertical' ? 'auto' : '700px',
            //   height: 'auto',
            // }}
            src={image}
            alt={title}
            width={600}
            height={400}
            className={`${imageVariant === 'vertical' ? 'w-auto' : 'w-[700px]'} object-contain outline outline-1 outline-border`}
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}
