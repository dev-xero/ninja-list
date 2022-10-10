import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(ninja => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return {
    props: { data },
  }
}

const Details = ({ data }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Website: {data.website}</p>
      <p>Address: {data.address.city}</p>
    </div>
  )
}

export default Details
