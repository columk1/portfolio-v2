import { Link } from 'next-view-transitions'

import type { NavItem } from '@/lib/types'
import { usePathname } from 'next/navigation'

const NavBar = ({ links }: { links: NavItem[] }) => {
  const pathname = usePathname()
  return (
    <nav id='mainNav'>
      <ul className='flex gap-4'>
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.route}
              className={`font-thin hover:font-light ${pathname === link.route && 'border-text-primary border-b-4'
                }`}
              prefetch={true}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
