import '@/globals.css'
import type { ReactNode } from 'react'
import ThemeSelector from '@/ui/ThemeSelector'
import Footer from '@/ui/Footer'
import Header from '@/ui/Header'
import { IBM_Plex_Mono, Montserrat, Work_Sans, Roboto } from 'next/font/google'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${workSans.variable} ${roboto.variable} ${ibmPlexMono.variable} text-base`}
    >
      <body className='min-w-full mx-auto p-[1px] font-mono text-text-primary bg-bg'>
        <div className='h-[calc(100svh-calc(var(--frame)*2)-2px)] m-frame flex flex-col justify-between items-center overflow-hidden border-[1px] border-border'>
          <Header
            links={[
              { title: 'Projects', route: '/projects' },
              { title: 'Articles', route: '/articles' },
            ]}
          />
          <main className='max-h-screen overflow-y-scroll scrollbar'>{children}</main>
          <Footer />
          <ThemeSelector />
        </div>
      </body>
    </html>
  )
}
