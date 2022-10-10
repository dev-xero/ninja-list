import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        inventore non nostrum similique assumenda quia dolorem ab, alias ad
        impedit sed eum tempora maxime distinctio eaque laborum fuga, illum
        molestias! Explicabo quos iure repellat enim similique repellendus,
        atque nesciunt ipsa.
      </p>
      <Link href='/ninjas'><a>See Ninja Listing</a></Link>
      <Footer />
    </div>
  )
}
