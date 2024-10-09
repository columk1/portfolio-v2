import { notFound } from 'next/navigation'
import type { BlogPostContent } from './types'

export async function getBlogPostContent(slug: string): Promise<BlogPostContent> {
  try {
    const mdxModule = await import(`@/content/${slug}.mdx`).catch(async (err) => {
      try {
        return await import(`@/content/drafts/${slug}.mdx`)
      } catch (draftErr) {
        throw new Error(`Unable to find ${slug} in content or drafts.`)
      }
    })
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
