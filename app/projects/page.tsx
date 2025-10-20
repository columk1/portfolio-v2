import { baseUrl } from '@/lib/config'
import projects from '@/lib/data/projects'
import Projects from '@/ui/Projects/Projects'

export const metadata = {
  title: 'Projects',
  openGraph: {
    title: 'Projects | Colum Kelly',
    description: 'Web designer and developer',
    images: [{ url: `${baseUrl}/api/og?title=Projects | Colum Kelly`, }],
  },
}

export default function Page() {
  return (
    <section className='mt-11 px-5 py-12 sm:px-[10vw]'>
      <h2 className='mx-3 mt-4 mb-6 font-light font-sans text-4xl'>Projects</h2>
      <div
        id='projects-container'
        className='relative mx-3 flex min-h-[65vh] min-w-[min(80vw,956px)] flex-col justify-between border border-accent pt-2 font-mono font-thin text-sm leading-8'
      >
        <Projects projects={projects} />
        <div className='h-9 border-t border-t-accent' />
      </div>
    </section>
  )
}
