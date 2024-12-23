import { getBlogPostsData } from '@/lib/getBlogPostsData'
import Posts from '@/ui/Posts/Posts'

// export const dynamic = 'force-static'

export default async function BlogPosts() {
  const posts = await getBlogPostsData()

  return (
    <div
      id='blog-posts-container'
      className='relative flex min-h-[65vh] min-w-[min(80vw,970px)] flex-col justify-between border border-accent font-mono font-thin text-sm leading-8'
    >
      <Posts posts={posts} />
      <div className='h-9 border-t border-t-accent' />
    </div>
  )
}
