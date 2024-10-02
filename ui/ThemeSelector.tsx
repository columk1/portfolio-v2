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
    <div
      id='theme-selector'
      className='-rotate-90 absolute bottom-[--frame] left-[2.1rem] origin-bottom-left text-xs'
    >
      <ul className='flex gap-3'>
        <li className='flex items-center gap-1 font-light font-sans hover:[-webkit-text-stroke:0.5px]'>
          <button type='button' onClick={() => handleThemeChange('light')}>
            {theme === 'light' ? (
              <span className='pb-1 text-base'>■</span>
            ) : (
              <span className='pb-1 text-base'>□</span>
            )}
            LIGHT
          </button>
        </li>
        <li className='flex items-center gap-1 font-light font-sans hover:[-webkit-text-stroke:0.5px]'>
          <button type='button' onClick={() => handleThemeChange('dark')}>
            {theme === 'dark' ? (
              <span className='pb-1 text-base'>■</span>
            ) : (
              <span className='pb-1 text-base'>□</span>
            )}
            DARK
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ThemeSelector
