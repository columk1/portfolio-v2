import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blog',
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section className='mt-11 px-5 py-12 sm:px-[10vw]'>{children}</section>
}
