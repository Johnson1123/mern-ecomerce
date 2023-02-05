import React from 'react'
import { Link } from 'react-router-dom'
import { image } from '../../assets'
import { BsInstagram } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { SiTwitter } from 'react-icons/si'
import { BsQuestionOctagonFill } from 'react-icons/bs'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { MdPolicy } from 'react-icons/md'
import { AiOutlineFolder } from 'react-icons/ai'
import { SiGuilded } from 'react-icons/si'
import './Footer.scss'
import SocialMedia from '../Socialmedia/SocialMedia'
import Newletter from '../Socialmedia/Newletter/Newletter'

export default function Footer() {
  return (
    <div className='conntainer app__footer'>

      <div className="wrapper flex">

        <div className="footer__box footer__left flex">

          <div className="footer__logo-container flex">

            <img src={image.logo} alt="R&J store"/>

            <Link to='/' className='head-text'>R&J Store</Link>

          </div>

          <div className="footer__left-text p-text">

            The5kShop is an independent online retailer offering variety of 
            products ranging from branded products, stock from other retailers
            to its own label ‘T5S’.

          </div>

          <div className="footer__left-icons">

            <SocialMedia icon={<BsInstagram />}/>

            <SocialMedia icon={<GrFacebookOption />} />

            <SocialMedia icon={<SiTwitter />} />

          </div>

        </div>

        <div className="footer__box footer__center">

            <p className="head-text head-footer">Contact</p>

            <address className="contact__details-container">

              <div className="p-text">Oke-Baale Osogbo, Nigeria. </div>

              <div className="p-text"><span className='p-text'>Email: </span><a href='mailto:onifadejohnson2014@gmail.com' className='p-text'>Onifadejohnson2014@gmail.com</a></div>

              <div className="p-text">www.vercelOniade.com</div>

            </address>
        </div>

        <div className="footer__box footer__right">

            <p className="head-text head-footer">Helps & Support</p>

            <div className="footer-right-box flex"><BsQuestionOctagonFill /> <Link to='/' className='p-text'>Frequent Ask Qustion</Link></div>

            <div className="footer-right-box flex"><RiArrowGoBackFill /> <Link to='/' className='p-text'>Delivery & Returns</Link></div>

            <div className="footer-right-box flex"><MdPolicy /> <Link to='/' className='p-text'>Privacy and Policy</Link></div>

            <div className="footer-right-box flex"><AiOutlineFolder /> <Link to='/' className='p-text'>Terms and Condition</Link></div>

            <div className="footer-right-box flex"><SiGuilded /> <Link to='/' className='p-text'>Size guide</Link></div>

        </div>
        <div className="newsletter">

          <p className="head-text newsletter head-footer">Subscribe</p>

          <Newletter />

        </div>
      </div>

    </div>

  )
}
