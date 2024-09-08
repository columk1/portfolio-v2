import GlobeIcon from '@/app/ui/icons/GlobeIcon'
import SquaresIcon from '@/app/ui/icons/SquaresIcon'
import AsteriskIcon from '@/app/ui/icons/AsteriskIcon'
import CirclesIcon from '@/app/ui/icons/CirclesIcon'
import ArrowIcon from '@/app/ui/icons/ArrowIcon'
import PointerIcon from '@/app/ui/icons/PointerIcon'

const iconStyles = { width: '2.25rem', color: 'var(--text-primary)' }
const svgContainerClasses =
  'w-full aspect-[1] grid place-content-center border-t border-l border-r last:border-b border-purple-400'
const svgContainerXLClasses =
  'w-full aspect-[1/2] grid place-content-center border-t border-l border-r border-purple-400'

const Hero = () => {
  return (
    <section className='min-h[calc(100svh-8rem-2px)] mt-0 xl:mt-20 flex justify-center align-center font-sans font-light bg-bg'>
      <div className='max-w-[970px] p-8 grid grid-cols-[4rem_1fr] grid-rows-[repeat(6,4rem)] flex-1 text-text-primary'>
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

        <div className='col-start-2 row-start-1 row-end-6 height-full p-[min(6rem,6vw)] grid place-content-center text-3xl border-t border-r border-purple-400'>
          <p>Hi, I&apos;m a full stack developer based in Squamish, British Columbia.</p>
        </div>
        <div className='relative col-start-2 row-start-6 height-full border-t border-r border-b border-purple-400'>
          <PointerIcon
            styles={{
              width: '2.75rem',
              color: 'var(--text-primary)',
              additionalStyles: { position: 'absolute', bottom: '35%', right: '15%' },
            }}
          />
        </div>
        <div className='col-span-2 flex justify-end gap-3 mt-1 font-mono font-light'>
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
