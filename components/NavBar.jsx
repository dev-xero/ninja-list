import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const NavBar = () => {
  const pathname = useRouter().pathname
  return (
    <nav>
      <div className="logo">
        <Image src="/icon.png" alt="logo" width={167} height={53}></Image>
      </div>
      <Link href="/">
        <a className={pathname === '/' ? 'current-active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={pathname === '/about' ? 'current-active' : ''}>
          About Us
        </a>
      </Link>
      <Link href="/ninjas">
        <a
          className={
            pathname === '/ninjas' || pathname.match(/\/ninjas/ig)
              ? 'current-active'
              : ''
          }
        >
          Ninja Listing
        </a>
      </Link>
    </nav>
  )
}

export default NavBar
