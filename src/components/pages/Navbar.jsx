import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-row w-full  rounded-lg justify-around items-center h-20'>
            <article className='mr-10 ml-3 relative right-14 font-extrabold italic text-blue-400 text-2xl bg-black shadow-md shadow-slate-700'>SHIMMER
                  <hr className='font-extrabold text-2xl text-blue-950' />
                <p className='text-2xl text-red-600'>SECURITY</p>
                <hr className='font-extrabold text-2xl text-red-950 bg-red-600' />
            </article>
            <Link to={"/"} className='text-2xl font-semibold '>
                Home
            </Link>
            <Link to={"/about"} className='text-2xl'>About</Link>
            <Link to={"/service"} className='text-2xl'>Service</Link>
            <Link to={"/contact"} className='text-2xl'>Contact</Link>
            <Link to={"/galary"} className='text-2xl'>Galary</Link>
            <Link to={"/testimonial"} className='text-2xl'>Testimonials</Link>
        </div>
    </nav>
  )
}

export default Navbar