import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { FiBarChart } from 'react-icons/fi'
import { MdHomeFilled } from 'react-icons/md'
import {
  IoChatbubbleOutline,
  IoPersonOutline,
  IoAddOutline,
} from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='nav_bar'>
      <NavLink to='/dashboard'>
        <MdHomeFilled />
      </NavLink>
      <NavLink to='/history'>
        <FiBarChart />
      </NavLink>
      <button className='add_btn' type='button'>
        <IoAddOutline />
      </button>
      <span>
        <IoChatbubbleOutline />
      </span>
      <span>
        <IoPersonOutline />
      </span>
    </div>
  )
}

export default Navbar
