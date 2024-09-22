import { baseUrl } from '@/lib/config'
import { getBlogPostsData } from '@/lib/getBlogPostsData'

export default async function sitemap() {
  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const postsData = await getBlogPostsData()

  const postRoutes = postsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.date,
  }))

  return [...routes, ...postRoutes]
}
