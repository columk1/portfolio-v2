'use server'

import type { Dirent } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { getBlogPostMetadata } from './getBlogPostMetadata'
import type { BlogPostData } from './types'
import path from 'node:path'

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith('.mdx')
// const isDirectory = (dirent: Dirent) => dirent.isDirectory()

// const getSlugFromFile = (file: Dirent) => file.name.substring(0, file.name.lastIndexOf('.'))

export async function getBlogPostsData(): Promise<BlogPostData[]> {
  const includeDrafts = process.env.NODE_ENV === 'development'
  try {
    const contentDir = path.join(process.cwd(), 'content')
    const draftsDir = path.join(contentDir, 'drafts')

    const posts = await Promise.all([
      getPostsFromDirectory(contentDir),
      includeDrafts ? getPostsFromDirectory(draftsDir, true) : Promise.resolve([]),
    ])

    return posts
      .flat()
      .sort((a, b) => (new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1))
  } catch (err) {
    console.log(err)
    return []
  }
}

async function getPostsFromDirectory(dir: string, isDraft = false): Promise<BlogPostData[]> {
  const dirents = await readdir(dir, { withFileTypes: true })
  const slugs = dirents
    .filter(isMDXFile)
    .map((file) => file.name.substring(0, file.name.lastIndexOf('.')))

  return Promise.all(slugs.map((slug) => getBlogPostMetadata(slug, isDraft)))
}
