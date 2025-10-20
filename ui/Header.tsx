'use client'

import type { NavItem } from '@/lib/types'
import NavBar from '@/ui/NavBar'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import SquaresIcon from '@/ui/icons/SquaresIcon'

const Header = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <>
      <header className='fixed z-10 mt-1 flex min-h-11 w-[calc(100%-calc(4px+var(--frame)*2))] items-baseline justify-between border-b-[1px] border-b-border bg-bg px-5 pt-2 sm:border-border has-[.markdown]:sm:w-[calc(100%-calc(4px+var(--frame)*2))] xl:border-none xl:bg-transparent xl:backdrop-blur-none'>
        <Link
          href='/'
          className={'font-thin hover:font-light'}
        >
          <span className='-translate-y-1/2 absolute top-1/2 left-3'>
            <SquaresIcon styles={{ width: '1.5rem', color: 'var(--text-primary)' }} />
          </span>
          <h1 className={`ml-6 ${pathname === '/' && 'border-text-primary border-b-4'}`}>Colum Kelly</h1>
        </Link>
        <NavBar links={links} />
      </header>
    </>
  )
}

export default Header
