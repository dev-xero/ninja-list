import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src='/icon.png' alt='logo' width={167} height={53}></Image>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  )
}

export default NavBar
