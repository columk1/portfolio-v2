import Projects from '@/ui/Projects/Projects'
import projects from '@/lib/data/projects'

export const metadata = {
  title: 'Projects',
}

export const dynamic = 'force-static'

export default function Page() {
  return <Projects projects={projects} />
}
