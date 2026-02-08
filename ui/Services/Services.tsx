import type { Service } from '@/lib/data/services'

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section id='services' className='mt-11 py-12'>
      <div className='flex max-w-[970px] flex-col justify-between'>
        <h2 className='mx-6 mt-4 mb-6 font-light font-sans text-4xl'>Services</h2>
        <div className='mx-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className='flex border border-accent bg-bg transition-colors duration-200 hover:bg-bg-offset'
              >
                <div className='flex w-[20%] items-center justify-center border-accent border-r p-6'>
                  <Icon styles={{ width: '2.5rem', color: 'var(--text-primary)' }} />
                </div>
                <div className='flex-1 p-8'>
                  <h3 className='mb-4 border-text-primary border-b-4 font-light text-text-primary text-lg'>{service.title}</h3>
                  <p className='font-thin leading-relaxed text-sm'>{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center gap-4 mx-6 mt-12 p-8 text-center border border-accent bg-bg transition-colors duration-200 hover:bg-bg-offset'>
          <a
            href='mailto:hello@columkelly.com'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex border border-accent bg-accent px-8 py-3 font-light text-bg-light opacity-90 outline outline-accent outline-offset-2 hover:font-medium hover:opacity-100 active:opacity-90'
          >
            Get in Touch
          </a>
          <p className='font-normal'>
            Reach out to discuss your project or to request a quote.
          </p>
        </div>
        <div className='h-9 mx-6 border-b border-l border-r border-accent' />
        <div className='h-9' />
      </div>
    </section>
  )
}

export default Services
