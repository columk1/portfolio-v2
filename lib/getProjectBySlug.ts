import projects, { type Project } from '@/lib/data/projects'

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (project) => project.title.toLowerCase().replace(/['\s]+/g, '-') === slug
  )
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.title.toLowerCase().replace(/['\s]+/g, '-'))
}
