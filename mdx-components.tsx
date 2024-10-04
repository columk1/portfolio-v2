import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'next-view-transitions'
import type { MDXComponents } from 'mdx/types'
import { stripCodeTags } from './lib/utils/stripCodeTags'
import { addCopyButton } from './lib/utils/addCopyButton'
import highlighter from './lib/highlighter/highlighter'
import NextImage from 'next/image'

type HeadingProps = ComponentPropsWithoutRef<'h1'>
type ParagraphProps = ComponentPropsWithoutRef<'p'>
type ListProps = ComponentPropsWithoutRef<'ul'>
type ListItemProps = ComponentPropsWithoutRef<'li'>
type AnchorProps = ComponentPropsWithoutRef<'a'>
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>
type ImageProps = ComponentPropsWithoutRef<'img'> & { caption?: string }

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className='fade-in mb-0 pt-12 font-light font-sans text-4xl' {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className='mt-8 mb-3 font-light text-3xl text-link' {...props} />
  ),
  h3: (props: HeadingProps) => <h3 className='mt-8 mb-3 font-medium text-xl' {...props} />,
  h4: (props: HeadingProps) => <h4 className='font-normal' {...props} />,
  p: (props: ParagraphProps) => <p className='mb-4' {...props} />,
  ol: (props: ListProps) => <ol className='list-decimal space-y-1 pl-5' {...props} />,
  ul: (props: ListProps) => <ul className='list-disc space-y-0 pl-5' {...props} />,
  li: (props: ListItemProps) => <li className='pl-1' {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => <em className='italic' {...props} />,
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className='font-medium' {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-link hover:text-link-hover visited:text-link-visited'
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
  code: async ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const lang = props.className ? props.className.split('-')[1] : 'text'
    const codeHTML = await highlighter.codeToHtml(children as string, {
      lang,
      themes: { light: 'tokyo-night-light', dark: 'tokyo-night' },
      transformers: [addCopyButton({ toggle: 2000 })],
    })
    // highlighter adds tags which we remove - next/mdx has already inserted pre/code tags
    // biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted author
    return <code dangerouslySetInnerHTML={{ __html: stripCodeTags(codeHTML) }} {...props} />
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
    <blockquote className='ml-2 border-l-4 bg-neutral-800 pl-5 font-normal italic' {...props} />
  ),
  img: (props: ImageProps) => Image(props),
}

export function useMDXComponents(otherComponents: MDXComponents): MDXComponents {
  return {
    Image,
    ...otherComponents,
    ...components,
  }
}

function Image(props: ImageProps) {
  const { caption, src, alt, ...rest } = props
  const parsedWidth = Number(props.width)
  const width = !Number.isNaN(parsedWidth) ? parsedWidth : 800

  return (
    <figure className='my-6 flex flex-col gap-4'>
      <NextImage
        className='mx-auto block h-auto max-w-full rounded-md bg-bg-light xl:max-w-100%'
        src={src as string}
        alt={alt || ''}
        {...rest}
        width={width} // Use incoming width or default to 800
        height={800}
      />
      {caption && (
        <figcaption className='block text-center font-detail text-text-primary text-xs'>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
