import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Link href='/about'>ABOUT PAGE</Link>
      </div>
  )
}

export default HomePage;