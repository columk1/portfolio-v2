import type { IconProps } from '@/lib/types'

const EyeIcon = ({ styles }: IconProps) => {
  return (
    <svg
      id='eye_icon'
      data-name='eye_icon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width={styles?.width || '40'}
    >
      <title>Eye Icon</title>
      <defs>
        <style>
          {`.eye-1 {
        fill: none;
        stroke: ${styles?.color || '#4d4d4d'};
        stroke-miterlimit: 10;
        stroke-width: 1px;
      }`}
        </style>
      </defs>
      <g id='eye_layer' data-name='eye_layer'>
        {/* Eye outline */}
        <path
          className='eye-1'
          d='M5,24c0,0,6.5-13,19-13s19,13,19,13s-6.5,13-19,13S5,24,5,24z'
        />
        {/* Iris */}
        <circle className='eye-1' cx='24' cy='24' r='6.5' />
        {/* Pupil */}
        <circle className='eye-1' cx='24' cy='24' r='3.2' />
        {/* Upper eyelashes */}
        <line className='eye-1' x1='13.5' y1='15.5' x2='11.5' y2='11' />
        <line className='eye-1' x1='18' y1='13' x2='17' y2='8' />
        <line className='eye-1' x1='24' y1='12' x2='24' y2='7' />
        <line className='eye-1' x1='30' y1='13' x2='31' y2='8' />
        <line className='eye-1' x1='34.5' y1='15.5' x2='36.5' y2='11' />
      </g>
    </svg>
  )
}

export default EyeIcon
