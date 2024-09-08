import type { IconProps } from '@/app/lib/types'

const PointerIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='pointer_2'
      data-name='pointer_2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 60.01 102.03'
      width={styles?.width || '50'}
      style={styles?.additionalStyles}
    >
      <title>Pointer Icon</title>
      <defs>
        <style>{`
      .pointer {
        fill: var(--bg);
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
      }
    `}</style>
      </defs>
      <g id='pointer_1' data-name='pointer_1'>
        <polygon
          className='pointer'
          points='58.8 59.51 .5 1.21 .5 80.84 18.69 63.25 34.53 101.37 47.64 95.87 32.54 59.51 58.8 59.51'
        />
      </g>
    </svg>
  )
}

export default PointerIcon
