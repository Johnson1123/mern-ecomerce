import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu, closeSearch } from '../../features/toggleSlice/toggleSlice'
import './navbar.scss'
import './menu.scss'
import { image } from '../../assets'
import Search from '../Search/Search'

import { AiOutlineMenu } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiAngleRight } from 'react-icons/tfi'


import {motion} from 'framer-motion'
import NavLink from '../NavLink'
import DropLink from '../DropLink'
import ShoppingDpd from './nav/ShoppingDpd/ShoppingDpd'
import HelpsDpd from './nav/Helps/HelpsDpd'
import Categories from './nav/Category/Categories'
import AccountDpd from './nav/Account/AccountDPd'
import NavLinkLg from '../NavLinkLg'


function Navbar() {

  const toggle = useSelector(state => state.toggleReducer.menuValue);
  const searchToggle = useSelector(state => state.toggleReducer.closeValue);

  const Dispatch = useDispatch();

  console.log(toggle)
  return (
    <div className='app__navbar container'>
      <div className='wrapper app__navbar-wrapper-sm flex-center'>
        <div className="navbar__logo flex-center">
          <AiOutlineMenu onClick={() => Dispatch(toggleMenu())} />
          <Link to='/cart'><img src={image.logo} alt="j-store logo" /></Link>
        </div>
        <p className="logo-text head-text"><Link to='/'>R&JStore</Link></p>
        <div className="nav__list flex">
          <ul className="nav__items flex">
              <div className='nav__items-con'>
                <Link to='/'>New In</Link>
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Shopping'/>
                <ShoppingDpd />
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Categories'/>
                <Categories />
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Account'/>
                <AccountDpd />
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Helps'/>
                <HelpsDpd />
              </div>
              <div className='nav__items-con'>
                <NavLinkLg label='Store locator'/>
              </div>
            </ul>  
        </div>
        <div className="navbar__icon flex-center">
          <CiSearch  onClick={() => Dispatch(closeSearch())}/>
          <div className="cart__container flex-center">
            <HiOutlineShoppingBag />
            <span className='flex-center'>5</span>
          </div>
        </div>
      </div>
      <div className='wrapper app__navbar-wrapper-lg'>
        <div className="navbar__logo">
          <img src="" alt="" />
        </div>
        <div className="navbar__menu">

        </div>
        <div className="navbar__icon">

        </div>
      </div>
      { toggle && 
         <div className={`app__menu `}>
            <motion.div 
            whileInView={{x: [-300, 0] }} transition={{duration: 0.55, ease: 'easeIn'}}
            className="app__menu-wrapper wrapper"
            >
                <AiOutlineClose className='menu__close'onClick={() => Dispatch(toggleMenu())}/>
                <ul className="menu__items">
                   <div className='meun__items-con'>
                     <Link to='/'>New In</Link>
                   </div>
                   <div className='meun__items-con'>
                     <NavLink label='Shopping'/>
                     <ShoppingDpd />
                   </div>
                   <div className='meun__items-con'>
                     <NavLink label='Categories'/>
                     <Categories />
                   </div>
                   <div className='meun__items-con'>
                     <NavLink label='Account'/>
                     <AccountDpd />
                   </div>
                   <div className='meun__items-con'>
                     <NavLink label='Helps'/>
                     <HelpsDpd />
                   </div>
                   <div className='meun__items-con'>
                     <NavLink label='Store locator'/>
                   </div>
                </ul>  
            </motion.div>
         </div>
      }
      { searchToggle &&
        <Search />
      }
    </div>
  )
}

export default Navbar