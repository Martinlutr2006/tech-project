import React from 'react'
import { MdHomeWork } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <nav className='flex justify-between h-16 p-2 bg-base-100 border-b'>
    <h1 className='text-2xl font-bold'> TechTrends <span>👌</span> </h1>
    <div className='flex space-x-4'>
        <NavLink to={'/'} className={"btn btn-ghost btn-sm"}>
        <MdHomeWork />Home
        </NavLink>
        <NavLink to={'/about'} className={"btn btn-ghost btn-sm"}>
        <IoMdContacts />About
        </NavLink>
        <NavLink to={'/contact'} className={"btn btn-ghost btn-sm"}>
        <FcAbout />Contact
        </NavLink>
    </div>
 </nav>
  )
}

export default Navbar