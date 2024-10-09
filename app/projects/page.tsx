import projects from '@/lib/data/projects'
import Projects from '@/ui/Projects/Projects'

export const metadata = {
  title: 'Projects',
}

export default function Page() {
  return <Projects projects={projects} />
}
