import type { IconProps } from '@/lib/types'

const ChevronDownIcon = ({ styles, className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke={styles?.color || 'currentColor'}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={styles?.width || '24'}
      height={styles?.height || '24'}
      style={styles?.additionalStyles}
      className={className}
    >
      <title>Chevron Down</title>
      <polyline points='6 9 12 15 18 9' />
    </svg>
  )
}

export default ChevronDownIcon
