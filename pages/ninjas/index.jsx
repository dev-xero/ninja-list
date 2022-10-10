import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users').catch(
    err => console.log(err)
  )
  const data = res ? await res.json() : {}

  return {
    props: { ninjas: data },
  }
}
const Ninjas = ({ ninjas }) => {
  console.log(ninjas)
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="keywords" content="ninja lists" />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.length > 0 &&
        ninjas.map(ninja => (
          <Link key={ninja.id} href={`ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
              <p className={styles.email}>{ninja.email}</p>
            </a>
          </Link>
        ))}
      {!ninjas.length > 0 ? (
        <div className={styles.error}>
          Sorry, we couldn&apos;t get the ninja list at this time
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Ninjas
