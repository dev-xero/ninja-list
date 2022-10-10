import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
  const router = useRouter()

  const redirectUser = () => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  useEffect(() => {
    redirectUser()
  })

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="keywords" content="ninja lists" />
      </Head>
      <div className="not-found">
        <h1>404</h1>
        <h2>That page could not be found</h2>
        <p>
          Go back to the{' '}
          <Link href="/">
            <a>home page</a>
          </Link>{' '}
        </p>
        <p className="redirect-msg">You&apos;ll be redirected</p>
      </div>
    </>
  )
}

export default NotFound
