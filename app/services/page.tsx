import { baseUrl } from '@/lib/config'
import services from '@/lib/data/services'
import Services from '@/ui/Services/Services'

export const metadata = {
  title: 'Services',
  openGraph: {
    title: 'Services | Colum Kelly',
    description: 'Web designer and developer',
    images: [{ url: `${baseUrl}/api/og?title=Services | Colum Kelly` }],
  },
}

export default function Page() {
  return <Services services={services} />
}
