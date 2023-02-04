import React from 'react'
import DropLink from '../../../DropLink'
import {motion} from 'framer-motion'


function HelpsDpd() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='About us' />
        <DropLink label='Size guide' />
        <DropLink label='Delivery Info' />
        <DropLink label='Careers' />
        <DropLink label='Contact us' />
        <DropLink label='FAQ' />
        <DropLink label='Blog' />
    </motion.ul>
  )
}

export default HelpsDpd