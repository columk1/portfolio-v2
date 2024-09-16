import '@/globals.css'
import type { ReactNode } from 'react'
import ThemeSelector from '@/ui/ThemeSelector'
import Footer from '@/ui/Footer'
import Header from '@/ui/Header'
import { IBM_Plex_Mono, Montserrat, Work_Sans, Roboto } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import type { Metadata } from 'next/types'
import { cookies } from 'next/headers'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
})
const workSans = Work_Sans({ subsets: ['latin'], variable: '--font-sans' })
const montserrat = Montserrat({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-detail',
})
const roboto = Roboto({ weight: '500', subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('http:localhost:3000'),
  title: {
    default: 'Colum Kelly',
    template: '%s | Colum Kelly',
  },
  description: 'Web designer and developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <ViewTransitions>
      <html
        lang='en'
        // biome-ignore lint/nursery/useSortedClasses: Bug in Biome
        className={`text-base ${montserrat.variable} ${workSans.variable} ${roboto.variable} ${ibmPlexMono.variable}`}
      >
        <body
          className={`${
            theme?.value === 'dark' && 'dark'
          } mx-auto min-w-full bg-bg p-[1px] font-mono text-text-primary transition-colors duration-[1500]`}
        >
          <div className='m-frame flex h-[calc(100svh-calc(var(--frame)*2)-2px)] flex-col items-center justify-between overflow-hidden border-[1px] border-border'>
            <Header
              links={[
                { title: 'Projects', route: '/projects' },
                { title: 'Blog', route: '/blog' },
              ]}
            />
            <main className='scrollbar max-h-screen max-w-[100vw] overflow-y-scroll'>
              {children}
            </main>
            <Footer />
            <ThemeSelector initialValue={theme?.value as 'light' | 'dark'} />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
