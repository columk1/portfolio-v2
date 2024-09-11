import Link from 'next/link'
import { getAllBlogPostsData } from '@/lib/getAllBlogPostsData'

export default async function BlogPosts() {
  const posts = await getAllBlogPostsData()
  console.log({ posts })

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <p>
              <Link prefetch={false} href={`/blog/${post.slug}`}>
                {`${post.metadata.title}`}
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
