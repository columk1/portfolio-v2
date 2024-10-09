'use server'

import type { Dirent } from 'node:fs'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { getBlogPostMetadata } from './getBlogPostMetadata'
import type { BlogPostData } from './types'

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith('.mdx')

const includeDrafts = process.env.NODE_ENV === 'development'

export async function getBlogPostsData(): Promise<BlogPostData[]> {
  try {
    const contentDir = path.join(process.cwd(), 'content')
    const draftsDir = path.join(contentDir, 'drafts')

    const posts = await Promise.all([
      getPostsFromDirectory(contentDir),
      includeDrafts ? getPostsFromDirectory(draftsDir) : Promise.resolve([]),
    ])

    return posts
      .flat()
      .sort((a, b) => (new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1))
  } catch (err) {
    console.log(err)
    return []
  }
}

async function getPostsFromDirectory(dir: string): Promise<BlogPostData[]> {
  const dirents = await readdir(dir, { withFileTypes: true })
  const slugs = dirents
    .filter(isMDXFile)
    .map((file) => file.name.substring(0, file.name.lastIndexOf('.')))
  return Promise.all(slugs.map((slug) => getBlogPostMetadata(slug)))
}
