import { baseUrl } from '@/lib/config'

export const metadata = {
  title: 'Contact',
  openGraph: {
    title: 'Contact | Colum Kelly',
    description: 'Get in touch with Colum Kelly',
    images: [{ url: `${baseUrl}/api/og?title=Contact | Colum Kelly` }],
  },
}

export default function Page() {
  return (
    <section id='contact' className='mt-11 px-[6vw] py-12'>
      <div className='min-w-[min(80vw,970px)] px-6'>
        <h2 className='mt-4 font-light font-sans text-4xl'>Contact</h2>
        <div className='mt-8 flex flex-wrap justify-between'>
          <div className='flex items-center gap-8'>
            <span className='font-medium'>EMAIL</span>
            <a
              href='mailto:hello@columkelly.com'
              className='text-text-secondary transition-colors hover:text-text-primary'
            >
              hello@columkelly.com
            </a>
          </div>
          <div className='flex items-center gap-8'>
            <span className='font-medium'>Bluesky</span>
            <a
              href='https://bsky.app/profile/columk.bsky.social'
              target='_blank'
              rel='noopener noreferrer'
              className='text-text-secondary transition-colors hover:text-text-primary'
            >
              @columk.bsky.social
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
