import React from 'react'
import { NavLink } from 'react-router-dom'

function SubNav() {
  return (
    <div className=' text-black  w-[780px]'>
        <ul className='flex gap-10 justify-center mt-5'>
            <li className=' bg-[#303030] text-[#adadad] py-[7px] px-5 rounded-full font-medium active:bg-[#ffcc70] active:text-black'>
                <NavLink to={''}>All (34)</NavLink>
            </li>
            <li className='bg-[#303030] text-[#adadad] py-[7px] px-5 rounded-full font-medium'>
                <NavLink to={''}>Recent</NavLink>
            </li>
            <li className='bg-[#303030] text-[#adadad] py-[7px] px-5 rounded-full font-medium'>
                <NavLink to={''}>Due</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default SubNav