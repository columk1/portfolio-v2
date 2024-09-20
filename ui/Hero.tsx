import GlobeIcon from '@/ui/icons/GlobeIcon'
import SquaresIcon from '@/ui/icons/SquaresIcon'
import AsteriskIcon from '@/ui/icons/AsteriskIcon'
import CirclesIcon from '@/ui/icons/CirclesIcon'
import ArrowIcon from '@/ui/icons/ArrowIcon'
import PointerIcon from '@/ui/icons/PointerIcon'

const iconStyles = { width: '2.25rem', color: 'var(--text-primary)' }
const svgContainerClasses =
  'w-full aspect-[1] grid place-content-center border-t border-l border-r last:border-b border-accent'
const svgContainerXLClasses =
  'w-full aspect-[1/2] grid place-content-center border-t border-l border-r border-accent'

const Hero = () => {
  return (
    <section className='min-h[calc(100svh-8rem-2px)] mt-0 flex justify-center bg-bg align-center font-light font-sans xl:mt-20'>
      <div className='grid max-w-[970px] flex-1 grid-cols-[4rem_1fr] grid-rows-[repeat(6,4rem)] p-8 text-text-primary'>
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
          <p>Hi, I&apos;m a full stack developer based in Squamish, British Columbia.</p>
        </div>
        <div className='height-full relative col-start-2 row-start-6 border-accent border-t border-r border-b'>
          <PointerIcon
            styles={{
              width: '2.75rem',
              color: 'var(--text-primary)',
              additionalStyles: { position: 'absolute', bottom: '35%', right: '15%' },
            }}
          />
        </div>
        <div className='col-span-2 mt-1 flex justify-end gap-3 font-light font-mono'>
          <a
            href='https://github.com/columk1'
            target='_blank'
            rel='noreferrer'
            className='hover:font-normal'
          >
            Github
          </a>
          <a
            href='mailto:"columk1+website@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='hover:font-normal'
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
