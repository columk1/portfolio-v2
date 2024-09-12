import type { Metadata } from 'next'

export type NavItem = { title: string; route: string }
export type IconProps = {
  styles?: {
    width?: string
    height?: string
    color?: string
    additionalStyles?: React.CSSProperties
  }
  className?: string
}

export type PostMetadata = Metadata & {
  title: string
  description: string
  date: string
  tags: string[]
  readingLength?: string
}

export type BlogPostData = {
  slug: string
  metadata: PostMetadata
}

export type BlogPostContent = {
  BlogMarkdown: () => JSX.Element
  metadata: PostMetadata
}
