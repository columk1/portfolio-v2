import { baseUrl } from '@/lib/config'
import type { ReactNode } from 'react'

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

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section className='mt-11 px-5 py-12 sm:px-[10vw]'>{children}</section>
}
