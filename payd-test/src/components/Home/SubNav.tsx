import React from 'react'
import { NavLink } from 'react-router-dom'

function SubNav() {

    const links = [
        {to: '/', label:"All (34)"},
        {to: '/recent', label:"Recent"},
        {to: '/due', label:"Due"},
    ]
  return (
    <div className=' text-black  w-[780px]'>
        <ul className='flex gap-10 justify-center mt-7'>
            {links.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              `${isActive ? "bg-[#ffcc70] text-black" : "bg-[#303030] text-[#adadad]"} py-[7px] px-5 rounded-full font-medium`
            }
          >
            {link.label}
          </NavLink>
        </li>
        ))}
           
        </ul>
    </div>
  )
}

export default SubNav