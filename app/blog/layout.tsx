import type { ReactNode } from 'react'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className='mt-0 xl:mt-11 py-12 px-[12vw]'>
      <div className='flex flex-col justify-between max-w-prose text-md font-sans font-light leading-8'>
        {children}
      </div>
    </section>
  )
}
