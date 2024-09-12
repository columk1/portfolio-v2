// import dynamic from 'next/dynamic'
import { getAllBlogPostsData } from '@/lib/getAllBlogPostsData'
import SquaresIcon from '@/ui/icons/SquaresIcon'
import { getBlogPostContent } from '@/lib/getBlogPostContent'

type BlogPageProps = { params: { slug: string } }

export default async function BlogPage({ params }: BlogPageProps) {
  const { metadata, BlogMarkdown } = await getBlogPostContent(params.slug)
  // const BlogMarkdown = dynamic(() => import(`@/content/${params.slug}.mdx`))

  return (
    <>
      <h2 className={'mx-0 my-4 text-4xl'}>{metadata.title}</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <p className={'font-detail text-xs'}>
            {new Date(metadata.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
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
      <div className={'markdown'}>
        <BlogMarkdown />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPostsData()
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post.slug,
  }))
  return blogStaticParams
}
