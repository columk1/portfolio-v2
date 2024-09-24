'use client'

import { useState, useEffect, useCallback } from 'react'
import { setThemeCookie } from '@/app/actions'

type Theme = 'light' | 'dark'

const ThemeSelector = ({ initialValue }: { initialValue: Theme | null }) => {
  const [theme, setTheme] = useState<Theme | null>(initialValue)

  const handleThemeChange = useCallback((theme: Theme) => {
    setTheme(theme)
    setThemeCookie(theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  useEffect(() => {
    if (!theme) {
      if (document.cookie.includes('theme=dark')) {
        setTheme('dark')
      } else if (document.cookie.includes('theme=light')) {
        setTheme('light')
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        handleThemeChange(prefersDark ? 'dark' : 'light')
      }
    }
  }, [theme, handleThemeChange])

  return (
    <div className='-rotate-90 absolute bottom-[--frame] left-[2.65rem] origin-bottom-left text-xs'>
      <ul className='flex gap-3'>
        <button type='button' onClick={() => handleThemeChange('light')}>
          <li className='flex items-center gap-1 font-light font-sans hover:[-webkit-text-stroke:0.5px]'>
            {theme === 'light' ? (
              <span className='pb-1 text-base leading-7'>■</span>
            ) : (
              <span className='pb-1 text-base leading-7'>□</span>
            )}
            LIGHT
          </li>
        </button>
        <button type='button' onClick={() => handleThemeChange('dark')}>
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
