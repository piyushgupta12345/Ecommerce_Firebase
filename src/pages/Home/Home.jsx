import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import Track from '../../components/Track/Track'
import Testimonial from '../../components/Testimonial/Testimonial'

function Home() {

  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home
