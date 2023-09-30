import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Habout from './Habout';
import Test from './testimonial/Test';
import HBloge from './HBloge';
import Hprice from './Hprice';
import Contact from '../contact/Contact';



const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <Habout/>
      <Test/>
      <HBloge/>
      <Hprice/>
      <Contact/>
    </>
  )
}

export default Home
