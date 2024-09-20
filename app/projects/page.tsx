import Projects from '@/ui/Projects/Projects'
import projects from '@/lib/data/projects'

export const metadata = {
  title: 'Projects',
}

export default function Page() {
  return <Projects projects={projects} />
}
