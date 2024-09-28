'use client' // Error boundaries must be Client Components

export default function ServerError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error)
  // }, [error])

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='flex items-center gap-6'>
        <h1 className='font-bold text-2xl'>500</h1>
        <div className='h-11 w-[0.5px] bg-text-secondary' />
        <p className='text-sm'>Oops, something went wrong</p>
      </div>
      {/* <button
        type='button'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}
    </div>
  )
}
