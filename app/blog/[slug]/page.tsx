import SquaresIcon from '@/ui/icons/SquaresIcon'
import { getBlogPostContent } from '@/lib/getBlogPostContent'
import { formatDateString } from '@/lib/utils/formatDateString'
import type { Metadata } from 'next/types'

type BlogPageProps = { params: { slug: string } }

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { metadata } = await getBlogPostContent(params.slug)
  return {
    openGraph: {
      title: `${metadata.title} | Colum Kelly`,
      description: metadata.description,
      type: 'article',
      publishedTime: metadata.date,
      authors: ['Colum'],
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { metadata, BlogMarkdown } = await getBlogPostContent(params.slug)
  // const BlogMarkdown = dynamic(() => import(`@/content/${params.slug}.mdx`))

  return (
    <>
      <h2 className={'mx-0 my-4 text-4xl'}>{metadata.title}</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
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
        <div className='h-5 w-full bg-text-primary' />
        <div className='my-2'>
          <SquaresIcon styles={{ width: '40px', color: 'var(--accent)' }} />
        </div>
      </div>
      <div className={'markdown max-w-prose font-light font-sans text-base leading-6'}>
        <BlogMarkdown />
      </div>
    </>
  )
}
