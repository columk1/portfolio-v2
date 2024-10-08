export default function NotFoundPage() {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='flex items-center gap-6'>
        <h1 className='font-bold text-2xl'>404</h1>
        <div className='h-11 w-[0.5px] bg-text-secondary' />
        <p className='text-sm'>Page not found</p>
      </div>
    </div>
  )
}
