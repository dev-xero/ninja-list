import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    <div className="not-found">
      <h1>404</h1>
      <h2>That page could not be found</h2>
      <p>Go back to the <Link href='/'><a>home page</a></Link> </p>
      <p className="redirect-msg">You&apos;ll be redirected</p>
    </div>
  )
}

export default NotFound
