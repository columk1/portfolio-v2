import type { IconProps } from '@/app/lib/types'

const SquaresIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='squares_2'
      data-name='squares_2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 51.35 51.35'
      width={styles?.width || '40'}
    >
      <title>Squares Icon</title>
      <defs>
        <style>
          {`.squares-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
      }`}
        </style>
      </defs>
      <g id='squares_1' data-name='squares_1'>
        <g>
          <rect className='squares-1' x='.85' y='.5' width='36' height='36' />
          <rect className='squares-1' x='7.85' y='7.5' width='36' height='36' />
          <rect className='squares-1' x='14.85' y='14.5' width='36' height='36' />
          <line className='squares-1' x1='.35' y1='1' x2='50.35' y2='51' />
        </g>
      </g>
    </svg>
  )
}

export default SquaresIcon
