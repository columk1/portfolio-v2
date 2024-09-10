import type { IconProps } from '@/lib/types'

const ArrowIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='arrow_2'
      data-name='arrow_2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.85 33.85'
      width={styles?.width || '40'}
    >
      <title>Arrow Icon</title>
      <defs>
        <style>{`
      .arrow-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
      }
      `}</style>
      </defs>
      <g id='arrow_1' data-name='arrow_1'>
        <g>
          <polyline className='arrow-1' points='33.35 33.5 33.35 .5 .35 .5' />
          <line className='arrow-1' x1='.35' y1='33.5' x2='33.35' y2='.5' />
        </g>
      </g>
    </svg>
  )
}

export default ArrowIcon
