import type { IconProps } from '@/app/lib/types'

const CirclesIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='circles_2'
      data-name='circles_2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 44 116'
      width={styles?.width || '40'}
    >
      <title>Circles Icon</title>
      <defs>
        <style>
          {`.circles-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
      }
      `}
        </style>
      </defs>
      <g id='Layer_1-2' data-name='Layer 1'>
        <g>
          <circle className='circles-1' cx='22' cy='34' r='21.5' />
          <circle className='circles-1' cx='22' cy='22' r='21.5' />
          <circle className='circles-1' cx='22' cy='46' r='21.5' />
          <circle className='circles-1' cx='22' cy='58' r='21.5' />
          <circle className='circles-1' cx='22' cy='70' r='21.5' />
          <circle className='circles-1' cx='22' cy='82' r='21.5' />
          <circle className='circles-1' cx='22' cy='94' r='21.5' />
        </g>
      </g>
    </svg>
  )
}

export default CirclesIcon
