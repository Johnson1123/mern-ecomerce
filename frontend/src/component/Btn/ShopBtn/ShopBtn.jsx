import React from 'react'
import './ShopBtn.scss'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ShopBtn() {
  return (
    <motion.button 
    className='flex-center btn__shop'
    whileInView={{scale: [0, 1]}}
    transition={{duration: .8, delay: 2}}
    >
        <Link to='/shopping' className='text-head'>Shop Now</Link>
    </motion.button>
  )
}

export default ShopBtn