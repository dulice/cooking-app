import React from 'react'
import Hero from '../components/hero'
import Nav from '../components/Nav'
import Popular from '../components/Popular'
import Veggie from '../components/veggie'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      animate = {{ y : 0}}
      initial = {{ y : 100}}
      exit = {{ y : 100}}
      transition = {{duration : .5}}
    >
        < Hero />
        <Nav />
        <Popular />
        <Veggie />
    </motion.div>
  )
}

export default Home