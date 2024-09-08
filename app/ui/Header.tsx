'use client'

import NavBar from '@/app/ui/NavBar'
import Link from 'next/link'
import type { NavItem } from '@/app/lib/types'
import { usePathname } from 'next/navigation'

const Header = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <>
      <header className='relative xl:fixed z-10 xl:w-[calc(100%-calc(4px+var(--frame)*2))] w-full min-h-11 px-5 pt-2 flex justify-between items-baseline bg-transparent border-b border-border xl:border-none'>
        <Link
          href='/'
          className={`font-light hover:font-normal ${
            pathname === '/' && 'border-b-4 border-text-primary'
          }`}
        >
          <h1>Colum Kelly</h1>
        </Link>
        <NavBar links={links} />
      </header>
    </>
  )
}

export default Header
