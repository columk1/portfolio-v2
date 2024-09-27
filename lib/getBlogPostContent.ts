import type { BlogPostContent } from './types'
import { notFound } from 'next/navigation'

export async function getBlogPostContent(slug: string): Promise<BlogPostContent> {
  try {
    const mdxModule = await import(`@/content/${slug}.mdx`)
    const { metadata } = mdxModule
    if (metadata) {
      if (!metadata.title || !metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${slug}`)
      }
      return {
        metadata,
        BlogMarkdown: mdxModule.default,
      }
    }
    throw new Error(`Unable to find metadata for ${slug}.mdx`)
  } catch (err) {
    console.log(err)
    return notFound()
  }
}
