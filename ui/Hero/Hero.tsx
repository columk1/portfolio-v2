'use client'

import { useEffect, useRef, useState } from 'react'
import ArrowIcon from '@/ui/icons/ArrowIcon'
import AsteriskIcon from '@/ui/icons/AsteriskIcon'
import CirclesIcon from '@/ui/icons/CirclesIcon'
import GlobeIcon from '@/ui/icons/GlobeIcon'
import PointerIcon from '@/ui/icons/PointerIcon'
import SquaresIcon from '@/ui/icons/SquaresIcon'
import Link from 'next/link'
import TextType from './TextType/TextType'
import './Hero.css'

const iconStyles = { width: '2.25rem', color: 'var(--text-primary)' }
const svgContainerClasses =
  'w-full aspect-[1] grid place-content-center border-t border-l border-r last:border-b border-accent'
const svgContainerXLClasses =
  'w-full aspect-[1/2] grid place-content-center border-t border-l border-r border-accent'

const Hero = () => {
  const pointerRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [animationReady, setAnimationReady] = useState(false)

  useEffect(() => {
    const updateAnimation = () => {
      if (pointerRef.current && linkRef.current) {
        const pointerRect = pointerRef.current.getBoundingClientRect()
        const linkRect = linkRef.current.getBoundingClientRect()

        // Calculate the center of the link
        const linkCenterX = linkRect.left + linkRect.width / 2
        const linkCenterY = linkRect.top + linkRect.height / 2

        // The pointer's tip is at its top-left corner, not its center
        const pointerTipX = pointerRect.left
        const pointerTipY = pointerRect.top

        // Calculate the distance to move (from pointer tip to link center)
        const deltaX = linkCenterX - pointerTipX
        const deltaY = linkCenterY - pointerTipY

        // Set CSS custom properties
        pointerRef.current.style.setProperty('--move-x', `${deltaX}px`)
        pointerRef.current.style.setProperty('--move-y', `${deltaY}px`)

        setTimeout(() => {
          setAnimationReady(true)
        }, 3000)
      }
    }

    // Initial calculation
    updateAnimation()

    // Recalculate on resize
    window.addEventListener('resize', updateAnimation)
    return () => window.removeEventListener('resize', updateAnimation)
  }, [])

  return (
    <section className='flex min-h-full items-center justify-center bg-bg font-light font-sans'>
      <div className='grid max-w-[970px] grid-cols-[4rem_1fr] grid-rows-[repeat(6,4rem)] p-10 text-text-primary'>
        <div className='col-start-1 row-span-full'>
          <div className={svgContainerClasses}>
            <GlobeIcon styles={iconStyles} />
          </div>

          <div className={svgContainerClasses}>
            <SquaresIcon styles={iconStyles} />
          </div>

          {/* asterisk */}
          <div className={svgContainerClasses}>
            <AsteriskIcon styles={iconStyles} />
          </div>

          {/* circles */}
          <div className={svgContainerXLClasses}>
            <CirclesIcon styles={iconStyles} />
          </div>

          {/* arrow */}
          <div className={svgContainerClasses}>
            <ArrowIcon styles={iconStyles} />
          </div>
        </div>

        <div className='height-full col-start-2 row-start-1 row-end-6 grid place-content-center border-accent border-t border-r p-[min(6rem,6vw)] text-3xl'>
          {/* <span>Hi, I'm a full stack developer based in Squamish, British Columbia.</span> */}
          <TextType leadingText="Hi, I'm a " trailingText=" based in Squamish, British Columbia." text='developer' pauseDuration={2500} skipInitialTyping replacementText={['designer']} reserveSpace={true} variableSpeed={{ min: 15, max: 40 }} deletingSpeed={80} />
        </div>
        <div className='height-full relative col-start-2 row-start-6 flex items-center border-accent border-t border-r border-b'>
          <div
            ref={pointerRef}
            className={animationReady ? 'animate-pointer-path' : ''}
            style={{ position: 'absolute', bottom: '35%', right: '15%' }}
          >
            <div className={animationReady ? 'animate-pointer-curve' : ''}>
              <div className={animationReady ? 'animate-pointer-click' : ''}>
                <PointerIcon
                  styles={{
                    width: '2.75rem',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 flex justify-between gap-3 py-1 font-mono font-thin'>
          <Link
            ref={linkRef}
            href='/projects'
            className={`text-text-primary ${animationReady ? 'animate-link-hover' : ''} hover:!font-light`}
          >
            [see my work]
          </Link>
          <div className='flex gap-3'>
            <a
              href='https://github.com/columk1'
              target='_blank'
              rel='noreferrer'
              className='hover:font-light'
            >
              Github
            </a>
            <a
              href='mailto:"hello@columkelly.com"'
              target='_blank'
              rel='noreferrer'
              className='hover:font-light'
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
