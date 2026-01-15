import { ArrowRight } from 'lucide-react'
import { Fragment } from 'react'

interface ChangeItemProps {
  prev: string
  next: string
}

interface ChangesListProps {
  title: string
  changes: ChangeItemProps[]
}

export default function ChangesList({ title, changes }: ChangesListProps) {
  return (
    <div className='m-auto mb-6 w-fit rounded-lg border border-border bg-pre-bg p-6'>
      {title && <h3 className='mb-4 font-semibold text-xl'>{title}</h3>}
      <div className='grid grid-cols-[1fr,auto,1fr] items-center gap-x-4 gap-y-0 text-md'>
        {changes.map((change) => (
          <Fragment key={change.prev}>
            <div className='text-text-secondary'>{change.prev}</div>
            <ArrowRight className='h-6 w-20 text-accent-2' />
            <div className='text-text-secondary'>{change.next}</div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
