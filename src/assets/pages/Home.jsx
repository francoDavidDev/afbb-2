import React from 'react'
import Hero from '../components/Home/Hero'
import Info from '../components/Home/Info'
import Sponsors from '../components/Home/Sponsors'
import Banner from '../components/Home/Banner'
import Newsletter from '../components/Home/Newsletter'
import CarrouselEvents from '../components/Home/CarrouselEvents'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div
    
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 100, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut", duration:0.5 }}
    >
        <Hero/>
        <Info   />
        <CarrouselEvents/>
        <Banner/>
       
        <Newsletter/>
        <Sponsors/>
    </motion.div>
  )
}

export default Home