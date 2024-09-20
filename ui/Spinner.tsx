import AsteriskIcon from '@/ui/icons/AsteriskIcon'

const Spinner = () => {
  return (
    <div role='status' className='mx-auto text-center text-accent'>
      <AsteriskIcon
        styles={{
          width: '3rem',
        }}
        className='animate-spin'
      />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Spinner
