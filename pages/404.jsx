import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>That page could not be found</h2>
      <p>Go back to the <Link href='/'><a>home page</a></Link> </p>
    </div>
  )
}

export default NotFound
