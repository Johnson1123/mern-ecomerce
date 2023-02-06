import React from 'react'
import Divider from '../../component/Divider'
import PageSlide from '../../component/PageSlide/PageSlide'
import ProductCategory from '../../component/ProductCategory/ProductCategory'
import './Home.scss'

export const Home = () => {
  return (
    <>
      <PageSlide />
      <Divider />
      <ProductCategory />
    </>
  )
}
