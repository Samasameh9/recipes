import React from 'react'
import logo from "./../../assets/logo-BfNap0Pe.png";
export default function Footer() {
  return (
    <>
<footer className='bg-white py-2 relative  z-50 bottom-0 '>
<div className='container mx-auto px-3 sm:px-0 2xl:w-3/4'>
    <div className='sm:flex justify-between items-center'>
    <div className='w-1/8 md:w-1/12 xl:w-1/12 flex items-center font-bold text-2xl '><img src={logo} className='w-full' alt="logo" />Recipe</div>
<div className='text-sky-600 text-2xl font-bold'>Route</div>
</div>
<div className=' border-b-gray-100 border w-full mx-auto mt-5 opacity-10 '></div>
<p className='px-2 text-gray-500 text-xs font-bold pt-5 sm:text-center'>© 2025 Nagy Osama™. All Rights Reserved.</p>
</div>
</footer>
    </>
  )
}
