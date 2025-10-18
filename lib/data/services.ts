import CodeIcon from '@/ui/icons/CodeIcon'
import EyeIcon from '@/ui/icons/EyeIcon'
import GearsIcon from '@/ui/icons/GearsIcon'
import LightbulbIcon from '@/ui/icons/LightbulbIcon'

export type Service = {
  title: string
  description: string
  icon: React.ComponentType<{ styles?: { width?: string; color?: string } }>
}

const services: Service[] = [
  {
    title: 'Web & App Development',
    description:
      'Fast, reliable websites and apps built with care — from static sites to ecommerce and data-driven dashboards.',
    icon: CodeIcon,
  },
  {
    title: 'Branding & Visual Design',
    description:
      'Logos, visual identities, marketing assets — design that reflects your voice and message.',
    icon: EyeIcon,
  },
  {
    title: 'Tech Automation & Tools',
    description:
      'Save time with automations, API integrations, and internal tools tailored to your workflow.',
    icon: GearsIcon,
  },
  {
    title: 'Marketing & Content Support',
    description: 'Landing pages, SEO setup, content strategy, writing, and visual media.',
    icon: LightbulbIcon,
  },
]

export default services
