import type { IconProps } from '@/lib/types'

const LightbulbIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='lightbulb_icon'
      data-name='lightbulb_icon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width={styles?.width || '40'}
    >
      <title>Lightbulb Icon</title>
      <defs>
        <style>
          {`.lightbulb-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
        stroke-width: 1px;
      }`}
        </style>
      </defs>
      <g id='lightbulb_layer' data-name='lightbulb_layer'>
        {/* Bulb */}
        <path
          className='lightbulb-1'
          d='M24,8c-5.5,0-10,4.5-10,10c0,3.3,1.6,6.2,4,8v6h12v-6c2.4-1.8,4-4.7,4-8C34,12.5,29.5,8,24,8z'
        />
        {/* Base */}
        <line className='lightbulb-1' x1='18' y1='32' x2='30' y2='32' />
        <line className='lightbulb-1' x1='18' y1='35' x2='30' y2='35' />
        {/* Bottom cap */}
        <path className='lightbulb-1' d='M20,38h8v2h-8V38z' />
        {/* Light rays - 5 rays at -90, -45, 0, 45, 90 degrees from top, all 5 units long */}
        <line className='lightbulb-1' x1='24' y1='1' x2='24' y2='6' />
        <line className='lightbulb-1' x1='37.5' y1='5.5' x2='34' y2='9' />
        <line className='lightbulb-1' x1='42' y1='18' x2='37' y2='18' />
        <line className='lightbulb-1' x1='10.5' y1='5.5' x2='14' y2='9' />
        <line className='lightbulb-1' x1='6' y1='18' x2='11' y2='18' />
      </g>
    </svg>
  )
}

export default LightbulbIcon
