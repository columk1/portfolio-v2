import Link from 'next/link'
import type { NavItem } from '@/app/lib/types'
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
              className={`font-light hover:font-normal ${
                pathname === link.route && 'border-b-4 border-text-primary'
              }`}
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