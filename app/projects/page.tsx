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
  return <Projects projects={projects} />
}
