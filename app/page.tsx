import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>Next Js Tutorial</h1>
      <Link href='/client' className=" btn btn-active btn-secondary">Get Started</Link>
      </div>
  )
}

export default HomePage;