import Link from 'next/link'

const links = [
  'about',
  'client',
  'contact',
  'drinks',
  'prisma-example',
  'query',
  'tasks',
  '',
]

const Navbar = ({ children }) => {
  return (
    <nav>
      {links.map((l) => (
        <Link href={`/${l}`}>{l.toUpperCase()}</Link>
      ))}
      {children}
    </nav>
  )
}

export default Navbar
