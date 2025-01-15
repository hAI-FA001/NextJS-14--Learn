import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-7xl">ContactPage</h1>

      <Link href={'/'} className="text-2xl">
        Home Page
      </Link>
      <br />
      <Link href={'/about'} className="text-2xl">
        About Page
      </Link>
    </div>
  )
}

export default ContactPage
