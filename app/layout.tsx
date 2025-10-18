import '@/globals.css'
import { baseUrl } from '@/lib/config'
import { applyThemeScript } from '@/lib/utils/applyThemeScript'
import Footer from '@/ui/Footer'
import Header from '@/ui/Header'
import ThemeSelector from '@/ui/ThemeSelector'
import { ViewTransitions } from 'next-view-transitions'
import { IBM_Plex_Mono, Montserrat, Roboto, Work_Sans } from 'next/font/google'
import type { Metadata } from 'next/types'
import type { ReactNode } from 'react'

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['200', '300', '400'],
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
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Colum Kelly',
    template: '%s | Colum Kelly',
  },
  description: 'Web designer and developer',
  openGraph: {
    title: 'Colum Kelly',
    description: 'Web designer and developer',
    images: [{ url: `${baseUrl}/api/og?title=Colum Kelly` }],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html
        lang='en'
        className={`text-base ${montserrat.variable} ${workSans.variable} ${roboto.variable} ${ibmPlexMono.variable}`}
      >
        <head>
          <script
            // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted author
            dangerouslySetInnerHTML={{
              __html: applyThemeScript,
            }}
          />
        </head>
        <body
          className={
            'mx-auto min-w-full bg-bg p-[1px] font-mono text-text-primary transition-colors duration-[1500]'
          }
        >
          <div className='m-frame flex h-[calc(100svh-calc(var(--frame)*2)-2px)] flex-col items-center justify-between overflow-hidden border-[1px] border-border has-[.markdown]:border-0 has-[.markdown]:sm:border-[1px]'>
            <Header
              links={[
                { title: 'Services', route: '/services' },
                { title: 'Projects', route: '/projects' },
                { title: 'Blog', route: '/blog' },
              ]}
            />
            <main className='scrollbar h-full max-w-[100vw] overflow-y-scroll'>{children}</main>
            <Footer />
            <ThemeSelector initialValue={null} />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
