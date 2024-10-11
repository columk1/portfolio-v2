'use client'

import type { BlogPostData } from '@/lib/types'
import { formatDateString } from '@/lib/utils/formatDateString'
import { Link } from 'next-view-transitions'
import { useState } from 'react'

const tags = ['JavaScript', 'CSS', 'React', 'Node.js', 'Next.js', 'Typescript', 'All']

const Posts = ({ posts }: { posts: BlogPostData[] }) => {
  const [filter, setFilter] = useState('All')
  return (
    <>
      <div className='sm:-left-1.5 -left-[1px] sm:-rotate-90 absolute top-full translate-y-1 font-mono text-xs sm:top-auto sm:bottom-9 sm:max-w-[60vh] sm:origin-bottom-left sm:translate-y-0'>
        <ul className='flex flex-wrap gap-x-3 gap-y-1'>
          {tags.map((tag) => (
            <button
              type='button'
              key={tag}
              onClick={() => setFilter(tag)}
              className='group flex items-center gap-1 hover:font-normal'
            >
              <li className='flex items-center gap-1'>
                {filter === tag ? (
                  <span className=''>■</span>
                ) : (
                  <span className='group-hover:text-stroke-1'>□</span>
                )}
                {tag}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <div className='px-6 py-4'>
        <h2 className='mb-4 font-light font-sans text-4xl'>Blog</h2>
        <ul className='flex flex-col gap-2'>
          {posts
            .filter(({ metadata }) => filter === 'All' || metadata.tags.includes(filter))
            .map((post) => (
              <Link
                className='hover:font-light'
                key={post.metadata.title}
                prefetch={true}
                href={`/blog/${post.slug}`}
              >
                <div className='flex w-full items-baseline justify-between gap-2'>
                  <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{`${post.metadata.title}`}</p>
                  <time dateTime={post.metadata.date} className='whitespace-nowrap text-xs'>
                    {formatDateString(post.metadata.date)}
                  </time>
                </div>
              </Link>
            ))}
        </ul>
      </div>
    </>
  )
}

export default Posts
