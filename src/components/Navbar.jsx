import React from 'react'
import logo from '../assets/logo5.png'
import {FaLinkedin, FaGithub, FaYoutube, FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} className='mx-2 w-20' alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaYoutube />
      </div>
    </nav>
  )
}

export default Navbar
