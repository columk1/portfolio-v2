import type { IconProps } from '@/lib/types'

const CodeIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='code_icon'
      data-name='code_icon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width={styles?.width || '40'}
    >
      <title>Code Icon</title>
      <defs>
        <style>
          {`.code-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
        stroke-width: 1px;
      }`}
        </style>
      </defs>
      <g id='code_layer' data-name='code_layer'>
        <rect className='code-1' x='4' y='10' width='40' height='28' />
        <polyline className='code-1' points='15 22 11 26 15 30' />
        <polyline className='code-1' points='33 22 37 26 33 30' />
        <line className='code-1' x1='27' y1='20' x2='21' y2='32' />
        <line className='code-1' x1='4' y1='16' x2='44' y2='16' />
      </g>
    </svg>
  )
}

export default CodeIcon
