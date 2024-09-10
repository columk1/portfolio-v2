import type { IconProps } from '@/lib/types'

const LinkIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='external-link'
      data-name='external-link'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 27 27'
      width={styles?.width || '27'}
    >
      <title>Link Icon</title>
      <defs>
        <style>
          {`.cls-1 {
        fill: ${styles?.color || '#4d4d4d'};
        stroke-width: 0px;
      }`}
        </style>
      </defs>
      <g id='external-link'>
        <g>
          <polygon
            className='cls-1'
            points='22.94 27 0 27 0 4.07 10.53 4.07 10.53 6.99 2.92 6.99 2.92 24.08 20.01 24.08 20.01 16.78 22.94 16.78 22.94 27'
          />
          <g>
            <rect
              className='cls-1'
              x='11.23'
              y='6.02'
              width='16.58'
              height='2.92'
              transform='translate(.43 15.99) rotate(-45)'
            />
            <rect
              className='cls-1'
              x='6.85'
              y='10.4'
              width='16.58'
              height='2.92'
              transform='translate(-3.95 14.18) rotate(-45)'
            />
            <rect className='cls-1' x='14.91' y='0' width='11.57' height='2.92' />
            <rect className='cls-1' x='24.08' width='2.92' height='12.09' />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default LinkIcon
