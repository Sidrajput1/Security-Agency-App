import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-row w-full  rounded-lg justify-around items-center h-20'>
            <article className='mr-14 relative right-14 font-extrabold italic text-orange-950 text-2xl bg-lime-50 shadow-1xl shadow-slate-700'>Shimmer
                <p className='text-sm pl-4 pt-0 text-black'>Security</p>
            </article>
            <Link to={"/"} className='text-2xl font-semibold '>
                Home
            </Link>
            <Link to={"/about"} className='text-2xl'>About</Link>
            <Link to={"/service"} className='text-2xl'>Service</Link>
            <Link to={"/contact"} className='text-2xl'>Contact</Link>
            <Link className='text-2xl'>Testimonials</Link>
        </div>
    </nav>
  )
}

export default Navbar