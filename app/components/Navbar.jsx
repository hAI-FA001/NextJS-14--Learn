import Link from 'next/link'

const links = [
  'about',
  'client',
  'contact',
  'drinks',
  'prisma-example',
  'tasks',
]

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((l) => (
            <li key={l}>
              <Link href={`/${l}`} className="capitalize">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
