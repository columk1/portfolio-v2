'use client'

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const ThemeSelector = ({ initialValue }: { initialValue: Theme | undefined }) => {
  const [theme, setTheme] = useState(initialValue)

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`
      document.body.classList.toggle('dark', theme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [theme])

  return (
    <div className='-rotate-90 absolute bottom-[--frame] left-[2.65rem] origin-bottom-left text-xs'>
      <ul className='flex gap-3'>
        <button type='button' onClick={() => setTheme('light')}>
          <li className='flex items-center gap-1 font-light font-sans hover:[-webkit-text-stroke:0.5px]'>
            {theme === 'light' ? (
              <span className='pb-1 text-base leading-7'>■</span>
            ) : (
              <span className='pb-1 text-base leading-7'>□</span>
            )}
            LIGHT
          </li>
        </button>
        <button type='button' onClick={() => setTheme('dark')}>
          <li className='flex items-center gap-1 font-light font-sans hover:[-webkit-text-stroke:0.5px]'>
            {theme === 'dark' ? (
              <span className='pb-1 text-base leading-7'>■</span>
            ) : (
              <span className='pb-1 text-base leading-7'>□</span>
            )}
            DARK
          </li>
        </button>
      </ul>
    </div>
  )
}

export default ThemeSelector
