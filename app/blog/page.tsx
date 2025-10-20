import { baseUrl } from '@/lib/config'
import { getBlogPostsData } from '@/lib/getBlogPostsData'
import Posts from '@/ui/Posts/Posts'

// export const dynamic = 'force-static'

export const metadata = {
  title: 'Blog',
  openGraph: {
    title: 'Blog | Colum Kelly',
    description: 'Web designer and developer',
    images: [
      { url: `${baseUrl}/api/og?title=Blog | Colum Kelly`, },
    ],
  },
}

export default async function BlogPosts() {
  const posts = await getBlogPostsData()

  return (
    <>
      <h2 className='mx-3 mt-4 mb-6 font-light font-sans text-4xl'>Blog</h2>
      <div
        id='blog-posts-container'
        className='relative mx-3 flex min-h-[65vh] min-w-[min(80vw,956px)] flex-col justify-between border border-accent pt-2 font-mono font-thin text-sm leading-8'
      >
        <Posts posts={posts} />
        <div className='h-9 border-t border-t-accent' />
      </div>
    </>
  )
}
