import React from 'react'
import { useGetAllBannersQuery } from '../../features/SlideApi/SlideApi'
import { motion } from 'framer-motion'

import './PageSlide.scss'
import ShopBtn from '../Btn/ShopBtn/ShopBtn';


function PageSlide() {
  const{data, error, isLoading} = useGetAllBannersQuery();
  const banners = data;
  return (
    <>
      {data &&
        <div className="container app__slide">
          <motion.div 
          whileInView={{opacity: [0.5, 1]}}
          transition={{duration: 1}}
          className='slide__container'
          >
            <img src={banners[0].image} alt="" className='slide-image'/>
            <div className="overlay" />
            <p className="small-text">{banners[0].name}</p>
            <p className="p-text">{banners[0].range}</p>
            <motion.p 
            className="head-text"
            whileInView={{opacity: [.3, 1]}}
            transition={{duration: .7, delay: 1}}
            >
              {banners[0].desc}
            </motion.p>
            <ShopBtn />
            <div className="controls__container">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        </div>
      }
    </>
  )}

export default PageSlide