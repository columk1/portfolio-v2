'use client'

import NavBar from '@/ui/NavBar'
import { Link } from 'next-view-transitions'
import type { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'

const Header = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <>
      <header className='fixed z-10 flex min-h-11 w-[calc(100%-calc(4px+var(--frame)*2))] items-baseline justify-between border-border border-b bg-bgAlpha px-5 pt-2 backdrop-blur-sm xl:border-none xl:backdrop-blur-none'>
        <Link
          href='/'
          className={`font-light hover:font-normal ${
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
