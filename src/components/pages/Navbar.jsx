import React from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/logo.png'
function Navbar() {
  return (
    <nav>
        {/* <div className='flex flex-row w-full  rounded-lg justify-between  items-center h-20 bg-black'>
            <div className='w-[30%] h-[16vh]  flex flex-row gap-24 items-center '>
              
              <img src={logo} alt="logo" className='' />
              <div className='bg-transparent'>
              <h1 className='text-4xl text-center text-orange-500 font-bold  shadow-orange-500'>SHIMMER </h1>
                <p className='text-xl relative text-blue-600 text-center mr-2 shadow-sm'> <RxHamburgerMenu className='absolute top-1 right-36 left-4 font-semibold text-[22px]'/>SECURITY  <RxHamburgerMenu className='absolute left-38 right-6  font-semibold bottom-1 text-[22px]' /> </p>
                <p className='text-[10px] mt-0 font-extralight text-black'>An ISO 9001:2008 Certified Company</p>
              </div>
              
            </div>
            
            
          <div className='flex justify-around w-[60%] h-[10vh] items-center  text-white font-mono font-extralight  transition-all ease-in-out duration-300 '>
            <Link to={"/"} className='text-1xl font-semibold hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300 '>
                Home
            </Link>
            <Link to={"/about"} className='text-1xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>About</Link>
            <Link to={"/service"} className='text-1xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Service</Link>
            <Link to={"/contact"} className='text-1xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Contact</Link>
            <Link to={"/galary"} className='text-1xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Galary</Link>
            <Link to={"/testimonial"} className='text-1xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Testimonials</Link>
          </div>
        </div> */}
        <div className='flex flex-col md:flex-row w-full rounded-lg justify-between items-center h-auto md:h-20 bg-white '>
        <div className='w-full md:w-[30%] h-auto md:h-[16vh] flex flex-row gap-4 md:gap-24 items-center'>
          <img src={logo} alt="logo" className='' />
          <div className='bg-transparent'>
            <h1 className='text-4xl text-center text-orange-500 font-bold shadow-orange-500'>SHIMMER </h1>
            <p className='text-xl relative text-blue-600 text-center mr-2 shadow-sm'> <RxHamburgerMenu className='absolute top-1 right-36 left-4 font-semibold text-[22px]'/>SECURITY  <RxHamburgerMenu className='absolute left-38 right-6  font-semibold bottom-1 text-[22px]' /> </p>
            <p className='text-[10px] mt-0 font-extralight text-black'>An ISO 9001:2008 Certified Company</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-around w-full md:w-[60%] h-auto md:h-[10vh] items-center text-blue-600 font-mono font-extralight transition-all ease-in-out duration-300'>
          <Link to={"/"} className='text-1xl md:text-xl font-semibold hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>
            Home
          </Link>
          <Link to={"/about"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>About</Link>
          <Link to={"/service"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Service</Link>
          <Link to={"/contact"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Contact</Link>
          <Link to={"/galary"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Gallery</Link>
          <Link to={"/testimonial"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Testimonials</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

 {/* <article className='mr-10 ml-3 relative right-14 font-extrabold italic text-blue-400 text-2xl bg-black shadow-md shadow-slate-700'>SHIMMER
                    <hr className='font-extrabold text-2xl text-blue-950' />
                  <p className='text-2xl text-red-600'>SECURITY</p>
                  <hr className='font-extrabold text-2xl text-red-950 bg-red-600' />
              </article> */}