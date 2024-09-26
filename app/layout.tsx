import '@/globals.css'
import type { ReactNode } from 'react'
import ThemeSelector from '@/ui/ThemeSelector'
import Footer from '@/ui/Footer'
import Header from '@/ui/Header'
import { IBM_Plex_Mono, Montserrat, Work_Sans, Roboto } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import type { Metadata } from 'next/types'
import { baseUrl } from '@/lib/config'

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
}

const applyThemeScript = `
  try {
    const themeCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('theme='))
    if (themeCookie) {
      const theme = themeCookie.split('=')[1]
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  } catch (_) {}
`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html
        lang='en'
        // biome-ignore lint/nursery/useSortedClasses: Bug in Biome
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
          <div className='m-frame flex h-[calc(100svh-calc(var(--frame)*2)-2px)] flex-col items-center justify-between overflow-hidden border-[1px] border-border'>
            <Header
              links={[
                { title: 'Projects', route: '/projects' },
                { title: 'Blog', route: '/blog' },
              ]}
            />
            <main className='scrollbar max-w-[100vw] overflow-y-scroll'>{children}</main>
            <Footer />
            <ThemeSelector initialValue={null} />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
