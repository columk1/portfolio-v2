import clsx from 'clsx'

import { AlertCircle, AlertTriangle, CheckCircle, HelpCircle, Info } from 'lucide-react'

type AsideVariant = 'info' | 'warning' | 'error' | 'success' | 'tip'

interface AsideProps {
  variant: AsideVariant
  title: string
  children: React.ReactNode
}

const variantStyles: Record<AsideVariant, string> = {
  info: 'bg-info-bg border-accent text-info-icon',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-500',
  error: 'bg-red-50 border-red-200 text-red-800',
  success: 'bg-green-50 border-green-200 text-green-800',
  tip: 'bg-purple-50 border-purple-200 text-purple-800',
}

const variantIcons: Record<AsideVariant, React.ReactNode> = {
  info: <Info className='h-6 w-6' />,
  warning: <AlertTriangle className='h-6 w-6' />,
  error: <AlertCircle className='h-6 w-6' />,
  success: <CheckCircle className='h-6 w-6' />,
  tip: <HelpCircle className='h-6 w-6' />,
}

export default function Aside({ variant, title, children }: AsideProps) {
  const baseStyles =
    'border-[1px] border-l-4 p-4 shadow-sm text-sm [&_p]:text-info-text [&_p]:mb-1 [&_p]:font-normal'
  const styles = `${baseStyles} ${variantStyles[variant]}`

  return (
    <aside className={styles} aria-label={`${variant} note`}>
      {title ? (
        <>
          <div className='flex items-center space-x-2'>
            {variantIcons[variant]}
            <h3 className='font-semibold text-lg'>{title}</h3>
          </div>
          <div className='mt-1'>{children}</div>
        </>
      ) : (
        <div className='mt-1 flex gap-2'>
          <span className='mt-px'>{variantIcons[variant]}</span>
          {children}
        </div>
      )}
    </aside>
  )
}
