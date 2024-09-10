'use client'

import { useState, useEffect } from 'react'
const ThemeSelector = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    if (mq.matches) {
      setIsDark(true)
    }

    mq.addEventListener('change', (e) => setIsDark(e.matches))
  }, [])

  return (
    <div className='absolute bottom-[--frame] left-10 text-xs origin-bottom-left -rotate-90'>
      <ul className='flex gap-3'>
        <button type='button' onClick={() => setIsDark(false)}>
          <li className='flex items-center gap-1 font-sans font-light hover:[-webkit-text-stroke:0.5px]'>
            {!isDark ? (
              <span className='pb-1 text-lg'>■</span>
            ) : (
              <span className='pb-1 text-lg'>□</span>
            )}
            LIGHT
          </li>
        </button>
        <button type='button' onClick={() => setIsDark(true)}>
          <li className='flex items-center gap-1 font-sans font-light hover:[-webkit-text-stroke:0.5px]'>
            {isDark ? (
              <span className='pb-1 text-lg'>■</span>
            ) : (
              <span className='pb-1 text-lg'>□</span>
            )}
            DARK
          </li>
        </button>
      </ul>
    </div>
  )
}

export default ThemeSelector
