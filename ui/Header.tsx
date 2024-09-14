'use client'

import NavBar from '@/ui/NavBar'
import { Link } from 'next-view-transitions'
import type { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'

const Header = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <>
      <header className='relative z-10 flex min-h-11 w-full items-baseline justify-between border-border border-b bg-transparent px-5 pt-2 xl:fixed xl:w-[calc(100%-calc(4px+var(--frame)*2))] xl:border-none'>
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
