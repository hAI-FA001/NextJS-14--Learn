'use client'

import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)
  console.log('Running on client-side')

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setCount((c) => c + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default ClientPage
