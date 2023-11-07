import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import mycontext from '../../context/MyContext'

function Home() {

    const context = useContext(mycontext)
    console.log(context)
  return (
    <Layout>
      Home
    </Layout>
  )
}

export default Home
