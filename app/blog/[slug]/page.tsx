import { baseUrl } from '@/lib/config'
import { getBlogPostContent } from '@/lib/getBlogPostContent'
import { getBlogPostsData } from '@/lib/getBlogPostsData'
import type { BlogPostContent, PostMetadata } from '@/lib/types'
import { formatDateString } from '@/lib/utils/formatDateString'
import SquaresIcon from '@/ui/icons/SquaresIcon'
import type { Metadata } from 'next/types'
import { cache } from 'react'

type BlogPageProps = { params: Promise<{ slug: string }> }

const getCachedBlogPostContent = cache(async function getCachedBlogPostContent(
  slug: string
): Promise<BlogPostContent> {
  return await getBlogPostContent(slug)
})

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const { metadata } = await getCachedBlogPostContent(slug)
  const { title, description, date } = metadata
  const ogUrl = `${baseUrl}/api/og?title=${encodeURIComponent(title)}`

  return {
    title: `${title} | Colum Kelly`,
    description: `${description}`,
    openGraph: {
      title: `${title} | Colum Kelly`,
      description,
      type: 'article',
      publishedTime: date,
      authors: ['Colum'],
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogUrl],
    },
  }
}

function generateJsonLd(metadata: PostMetadata, slug: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: metadata.title,
    datePublished: metadata.date,
    dateModified: metadata.date,
    description: metadata.description,
    image: `/og?title=${encodeURIComponent(metadata.title)}`,
    url: `${baseUrl}/blog/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Colum Kelly',
    },
  })
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  // const BlogMarkdown = dynamic(() => import(`@/content/${slug}.mdx`))
  const { metadata, BlogMarkdown } = await getCachedBlogPostContent(slug)
  const jsonLd = generateJsonLd(metadata, slug)

  return (
    <>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted Author
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <h1 className={'mx-0 my-4 text-4xl leading-snug'}>{metadata.title}</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1 text-text-secondary'>
          <p className={'font-detail text-xs'}>{formatDateString(metadata.date)}</p>
          <div className='flex gap-2 font-detail text-xs'>
            {metadata.tags && <p>{metadata.tags?.map((tag) => tag.toUpperCase()).join(', ')}</p>}
            {metadata.readingLength && (
              <>
                <p>|</p>
                <p>{`${metadata.readingLength} MIN READ`}</p>
              </>
            )}
          </div>
        </div>
        <div className='h-2 w-full bg-text-primary' />
        <div className='my-2'>
          <SquaresIcon styles={{ width: '40px', color: 'var(--accent)' }} />
        </div>
      </div>
      <div
        className={
          'markdown m-auto max-w-prose font-normal font-sans text-lg text-text-secondary leading-7'
        }
      >
        <BlogMarkdown />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const postsData = await getBlogPostsData()
  return postsData.map((post) => ({ slug: post.slug }))
}
