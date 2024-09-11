import dynamic from 'next/dynamic'
import { getAllBlogPostsData } from '@/lib/getAllBlogPostsData'

type BlogPageProps = { params: { slug: string } }

export default function BlogPage({ params }: BlogPageProps) {
  const BlogMarkdown = dynamic(() => import(`@/content/${params.slug}.mdx`))
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-xl'>{params.slug}</h2>
      <BlogMarkdown />
    </div>
  )
}

export async function generateStaticParams() {
  const blogPosts = await getAllBlogPostsData()
  const blogStaticParams = blogPosts.map((post) => ({
    slug: post.slug,
  }))
  return blogStaticParams
}
