import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black px-20 py-5 flex justify-between items-center font-poppins mb-20">
        <p className='font-bold text-xl hover:text-green-600'>@Christian Aquino</p>
        <ul className='flex gap-5 text-base font-semibold text-[20px]'>
            <li><Link className="hover:text-green-600" to="/">Home</Link></li>
            <li><Link className="hover:text-green-600" to="/about">About</Link></li>
            <li><Link className="hover:text-green-600" to="/projects">Projects</Link></li>
        </ul>
    </nav>
  )
}
 
export default Navbar
