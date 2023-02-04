import React from 'react'
import DropLink from '../../../DropLink'
import { motion } from 'framer-motion'

function Categories() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='Men' />
        <DropLink label='Woman' />
        <DropLink label='Kids' />
        <DropLink label='Cultural' />
        <DropLink label='Suit' />
        <DropLink label='Jersey' />
        <DropLink label='Under Wears' />
    </motion.ul>
  )
}

export default Categories