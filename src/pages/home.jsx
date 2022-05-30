import React from 'react'
import Hero from '../components/hero'
import Popular from '../components/Popular'
import Veggie from '../components/veggie'
import { motion } from 'framer-motion'
import Title from '../components/Title'

const Home = () => {
  return (
    <motion.div
      animate = {{ y : 0}}
      initial = {{ y : 100}}
      exit = {{ y : 100}}
      transition = {{duration : .5}}
    >
        < Hero />
        <Title />
        <Popular />
        <Veggie />
    </motion.div>
  )
}

export default Home