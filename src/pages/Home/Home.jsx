import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Filter from '../../components/Filter/Filter'

function Home() {

  return (
    <Layout>
      <HeroSection/>
      <Filter/>
    </Layout>
  )
}

export default Home
