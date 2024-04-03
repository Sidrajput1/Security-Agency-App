import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-row w-full border-2 rounded-lg justify-around items-center h-20'>
            <article className='mr-14'>Shimmer
                <p>Security</p>
            </article>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/service"}>Service</Link>
            <Link>Contact</Link>
            <Link>Testimonials</Link>
        </div>
    </nav>
  )
}

export default Navbar