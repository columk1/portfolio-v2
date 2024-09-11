import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'next-view-transitions'
import type { MDXComponents } from 'mdx/types'
import { highlight } from 'sugar-high'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className='mb-0 pt-12 text-4xl font-sans font-light fade-in' {...props} />
  ),
  h2: (props: HeadingProps) => <h2 className='mt-8 mb-3 text-2xl font-medium' {...props} />,
  h3: (props: HeadingProps) => <h3 className='mt-8 mb-3 text-xl font-medium' {...props} />,
  h4: (props: HeadingProps) => <h4 className='font-normal' {...props} />,
  p: (props: ParagraphProps) => <p className='mb-6' {...props} />,
  ol: (props: ListProps) => <ol className='pl-5 space-y-1 list-decimal' {...props} />,
  ul: (props: ListProps) => <ul className='pl-5 space-y-0 list-disc' {...props} />,
  li: (props: ListItemProps) => <li className='pl-1' {...props} />,
  // Use this as the image caption until an image component is created
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className='block text-center font-medium' {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className='font-medium' {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700'
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={className} {...props}>
        {children}
      </a>
    )
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string)
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Single trusted author
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Always same order
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Always same order
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: Always same order
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className='ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700' {...props} />
  ),
}

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  }
}
