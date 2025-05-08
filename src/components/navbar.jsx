import React from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <nav className='flex justify-between h-16 p-2 bg-base-100 border-b'>
    <h1 className='text-2xl font-bold'> TechTrends <span>👌</span> </h1>
    <div>
        <NavLink to={'/'} className={"btn btn-ghost btn-sm"}>
        <BsHouseFill/>Home
        </NavLink>
        <NavLink to={'/about'} className={"btn btn-ghost btn-sm"}>
        <BsHouseFill/>About
        </NavLink>
        <NavLink to={'/contact'} className={"btn btn-ghost btn-sm"}>
        <BsHouseFill/>Contact
        </NavLink>
    </div>
 </nav>
  )
}

export default Navbar