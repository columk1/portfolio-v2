import type { ReactNode } from 'react'

export const metadata = {
  title: 'Blog',
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section className='mt-11 px-[12vw] py-12'>{children}</section>
}
