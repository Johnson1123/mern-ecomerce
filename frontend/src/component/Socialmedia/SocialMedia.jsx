import React from 'react'
import { Link } from 'react-router-dom'
import './SocialMedia.scss'

function SocialMedia(props) {
  return (
    <Link className='icon' to=''>{props.icon}</Link>
  )
}

export default SocialMedia