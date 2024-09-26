'use client'

import NavBar from '@/ui/NavBar'
import { Link } from 'next-view-transitions'
import type { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'

const Header = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <>
      <header className='fixed z-10 flex min-h-11 w-[calc(100%-calc(var(--frame)*2))] items-baseline justify-between border-b-[1px] border-b-border bg-bg px-5 pt-2 sm:w-[calc(100%-calc(4px+var(--frame)*2))] sm:border-border xl:border-none xl:bg-transparent xl:backdrop-blur-none'>
        <Link
          href='/'
          className={`font-thin hover:font-light ${
            pathname === '/' && 'border-text-primary border-b-4'
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
