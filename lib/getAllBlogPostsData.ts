'use server'

import type { Dirent } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { getBlogPostMetadata } from './getBlogPostMetadata'
import type { BlogPostData } from './types'

const isMDXFile = (dirent: Dirent) => !dirent.isDirectory() && dirent.name.endsWith('.mdx')
const isDirectory = (dirent: Dirent) => dirent.isDirectory()

// const getSlugFromFile = (file: Dirent) => file.name.substring(0, file.name.lastIndexOf('.'))

export async function getAllBlogPostsData(): Promise<BlogPostData[]> {
  try {
    const dirents = await readdir('content', { withFileTypes: true })

    const slugs = dirents
      .filter(isMDXFile)
      .map((file) => file.name.substring(0, file.name.lastIndexOf('.')))

    const result = await Promise.all(slugs.map((slug) => getBlogPostMetadata(slug)))
    return result
  } catch (err) {
    console.log(err)
    return []
  }
}
