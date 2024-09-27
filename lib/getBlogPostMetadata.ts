import type { BlogPostData } from './types'
import { notFound } from 'next/navigation'

export async function getBlogPostMetadata(slug: string, isDraft: boolean): Promise<BlogPostData> {
  try {
    const { metadata } = await import(`@/content/${isDraft ? 'drafts/' : ''}${slug}.mdx`)
    if (metadata) {
      if (!metadata.title || !metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`)
      }
      return {
        slug,
        metadata,
      }
    }
    throw new Error(`Unable to find metadata for ${slug}.mdx`)
  } catch (err) {
    console.log(err)
    return notFound()
  }
}
