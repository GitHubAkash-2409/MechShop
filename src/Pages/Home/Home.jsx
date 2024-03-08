import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Hero from '../../Components/HeroSection/Hero'
import Service from '../../Components/Service/Service'
import Gallery from '../../Components/Gallery/Gallery'

const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Service/>
      <Gallery/>
    </Layout>
  )
}

export default Home