import type { Service } from '@/lib/data/services'

const Services = ({ services }: { services: Service[] }) => {
  return (
    <section id='services' className='mt-11 px-[6vw] py-12'>
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
                  <h3 className='mb-4 font-light text-text-primary text-xl'>{service.title}</h3>
                  <p className='text-text-secondary leading-relaxed'>{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mx-6 mt-16 text-center'>
          <h2 className='pb-3 font-light font-sans text-2xl text-text-primary'>Ready to start?</h2>
          <p className='font-light text-md text-text-secondary'>
            Reach out to discuss your project or to request a quote.
          </p>
          <a
            href='mailto:hello@columkelly.com'
            className='mt-6 inline-block border border-accent px-8 py-3 font-light transition-colors duration-200 hover:bg-bg-offset'
          >
            Get in Touch
          </a>
        </div>
        <div className='h-9' />
      </div>
    </section>
  )
}

export default Services
