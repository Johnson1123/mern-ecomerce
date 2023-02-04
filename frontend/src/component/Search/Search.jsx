import React from 'react'
import './Search.scss'
import { CiSearch } from 'react-icons/ci' 
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { closeSearch } from '../../features/toggleSlice/toggleSlice'

export default function Search() {
    const Dispatch = useDispatch();
  return (

    <div className='search__container flex-center' >

        <div className="search__form flex-center">

            <input type='text' autoFocus/>
            
            <div className="svg__container flex-center">
                <CiSearch className='svg'/>
            </div>

        </div>

        <div className="search__close" onClick={() => Dispatch(closeSearch())}>

            <div className="svg__container flex-center">

                <AiOutlineClose className='svg'/>

                <p className="p-text">Close</p>

            </div>

        </div>
    </div>
  )
}
