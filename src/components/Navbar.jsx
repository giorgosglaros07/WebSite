// import React,{useState} from 'react'
// import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'


// const Navbar = () => {
//    const [nav,setNav] = useState(false)

//    const handleNav = () => {
//     setNav(!nav)
//    }


//   return (
//     <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto '>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
//       <ul className='hidden md:flex'>
//         <li className='p-4'>Home</li>
//         <li className='p-4'>Company</li>
//         <li className='p-4'>Resources</li>
//         <li className='p-4'>About</li>
//         <li className='p-4'>Contact</li>
//       </ul>
      
//       <div onClick={handleNav}className='block md:hidden'>
//         {!nav ? <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20}  />}
    
//       </div>
      
//       <div className={!nav ?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%] '}>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 '>REACT.</h1>
     
//       <ul className='pt-12 uppercase p-4'>
//         <li className='p-4 border-b border-gray-600'>Home</li>
//         <li className='p-4 border-b border-gray-600'>Company</li>
//         <li className='p-4 border-b border-gray-600'>Resources</li>
//         <li className='p-4 border-b border-gray-600'>About</li>
//         <li className='p-4 border-b border-gray-600'>Contact</li>
//       </ul>
//       </div>

//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  // Προαιρετικό: κλείνει το mobile menu σε οθόνες >= md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNav(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      {/* Hamburger / Close Icon */}
      <div onClick={handleNav} className="block md:hidden z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
