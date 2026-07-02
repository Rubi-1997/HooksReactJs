import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-300 flex px-8  top-0 fixed w-full'>
        <div className='p-4'><img src='download (5).jpg' className='w-10'></img></div>
        <ul className='flex text-xl margin_right pl-16'> <li className='p-4'>Home</li>
            <li className='p-4'>Categories</li>
            <li className='p-4'>About Us</li>
        </ul>
    </div>
  )
}

export default Navbar