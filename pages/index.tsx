import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  useEffect(() => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.API_ENDPOINT)
  }, [])
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <p>test</p>
    </div>
  )
}

export default Home
