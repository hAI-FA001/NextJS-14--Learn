import Link from 'next/link'

const HomePage = () => {
  console.log('Running on server-side')

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Learn Next.js</h1>
      <Link href="/client" className="btn btn-accent capitalize">
        get started
      </Link>
    </div>
  )
}

export default HomePage
