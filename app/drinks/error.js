'use client'

import React from 'react'

const error = (err) => {
  console.log(err)
  return <span className="text-xl">An error occurred: {err.error.message}</span>
}

export default error
