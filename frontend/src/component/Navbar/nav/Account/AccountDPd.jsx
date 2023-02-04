import React from 'react'
import DropLink from '../../../DropLink'
import { motion } from 'framer-motion'

function AccountDpd() {
  return (
    <motion.ul className='menu__drop'
    whileInView={{y: [-200, 0]}}
    transition={{duration: .73}}
    >
        <DropLink label='Dashbord' onClick=''/>
        <DropLink label='Cart' />
        <DropLink label='Checkout' />
        <DropLink label='Wishlist' />
    </motion.ul>
  )
}

export default AccountDpd