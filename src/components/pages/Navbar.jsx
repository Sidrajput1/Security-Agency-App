import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../public/assets/logo.png'
//import logo from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/logo.png'
function Navbar() {


  const [isScroll, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };

  }, []);



  return (
    <nav >

      <div className={`flex flex-col md:flex-row w-full rounded-lg justify-between items-center h-auto md:h-20  fixed top-0 z-40 transition-all duration-300 ${isScroll ? `bg-gray-700` : `bg-transparent`}`}>
        <div className='w-full md:w-[30%] h-auto md:h-[16vh] flex flex-row gap-4 md:gap-24 items-center'>
          <img src={logo} alt="logo" className='translate-x-0' />
          <div className='bg-transparent animate-pulse  transition-transform duration-100 '>
            <h1 className='md:text-4xl text-xl text-center text-orange-500 font-bold shadow-orange-500 font-serif'>SHIMMER </h1>
            {/* <p className='text-xl relative text-blue-600 text-center mr-2 shadow-sm'> <RxHamburgerMenu className='absolute top-1 right-36 left-4 font-semibold text-[22px]'/>SECURITY  <RxHamburgerMenu className='absolute left-38 right-6  font-semibold bottom-1 text-[22px]' /> </p> */}
            <p className='md:text-xl text-sm relative text-blue-600 text-center mr-2 shadow-sm font-serif'> { /* Render hamburger menu icon on smaller devices */}
              {/* <button className='md:hidden absolute top-1 right-0 font-semibold text-[22px] md:relative md:right-2' onClick={menuOpen}><RxHamburgerMenu /></button> */}
              SECURITY
            </p>
            <p className='text-[10px] mt-0 font-extralight text-black'>An ISO 9001:2008 Certified Company</p>
          </div>
          <button className='md:hidden absolute top-6 right-2 font-semibold text-[22px] md:relative md:right-4 ' onClick={menuOpen}><RxHamburgerMenu className='text-orange-400' /></button>
        </div>
        <div className={`hidden  flex-col md:flex-row justify-center md:justify-around w-full md:w-[60%] h-auto md:h-[10vh]  items-center text-blue-600 font-mono font-extralight transition-all ease-in-out duration-300 ${isOpen ? 'hidden' : 'block'} ${isScroll ? 'text-white': 'text-blue-600'} md:flex`}>
          <Link to={"/"} className='text-1xl md:text-xl font-semibold hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>
            Home
          </Link>
          <Link to={"/about"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300' onClick={menuOpen} >About</Link>
          <Link to={"/service"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300' onClick={menuOpen} >Service</Link>
          <Link to={"/contact"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300' onClick={menuOpen} >Contact</Link>
          <Link to={"/galary"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300' onClick={menuOpen}>Gallery</Link>
          <Link to={"/testimonial"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300' onClick={menuOpen}>Testimonials</Link>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full bg-gray-300 text-black z-50 shadow-lg transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <button className="absolute top-6 right-13" onClick={menuOpen}>Close</button>
        <div className="flex flex-col items-center justify-center h-full">
          <Link to={"/"} className='text-xl hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>
            Home
          </Link>
          <Link to={"/about"} className='text-sm hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>About</Link>
          <Link to={"/service"} className='text-sm hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>Service</Link>
          <Link to={"/contact"} className='text-sm hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>Contact</Link>
          <Link to={"/galary"} className='text-sm hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>Gallery</Link>
          <Link to={"/testimonial"} className='text-sm hover:text-orange-400 hover:border-2 hover:rounded-md border-black hover:text-2xl mb-4' onClick={menuOpen}>Testimonials</Link>
        </div>
      </div>
    </nav>

    //  <nav>
    //          <div className={` w-full rounded-lg justify-between items-center h-auto md:h-20 fixed top-0 z-40 transition-all duration-300 ${isScroll ? 'bg-black' : 'bg-transparent'}`}>
    //               <div className='bg-transparent'> */}
    //                     <h1 className='text-4xl text-center text-orange-500 font-bold shadow-orange-500'>SHIMMER </h1>
    //                     {/* Render hamburger menu icon only on smaller devices */}
    //                     <p className='text-xl relative text-blue-600 text-center mr-2 shadow-sm md:hidden'>
    //                         <button className='absolute top-1 right-4 font-semibold text-[22px]' onClick={toggleMenu}>☰</button>
    //                         SECURITY
    //                     </p>
    //                     <p className='text-[10px] mt-0 font-extralight text-black'>An ISO 9001:2008 Certified Company</p>
    //                 </div>
    //             </div>
    //             <div className={`hidden md:flex flex-row gap-8 w-full md:w-[60%] h-auto md:h-[10vh] items-center text-blue-600 font-mono font-extralight transition-all ease-in-out duration-300`}>
    //                 <Link to={"/"} className='text-1xl md:text-xl font-semibold hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>
    //                     Home
    //                 </Link>
    //                 <Link to={"/about"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>About</Link>
    //                 <Link to={"/service"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Service</Link>
    //                 <Link to={"/contact"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Contact</Link>
    //                 <Link to={"/gallery"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Gallery</Link>
    //                 <Link to={"/testimonials"} className='text-1xl md:text-xl hover:text-orange-400 hover:underline hover:text-2xl transition-all ease-in-out duration-300'>Testimonials</Link>
    //             </div>
    //         </div>

    // {/* Off-screen menu for smaller devices */}
    //     
    // </nav>
  )
}

export default Navbar

{/* <article className='mr-10 ml-3 relative right-14 font-extrabold italic text-blue-400 text-2xl bg-black shadow-md shadow-slate-700'>SHIMMER
                    <hr className='font-extrabold text-2xl text-blue-950' />
                  <p className='text-2xl text-red-600'>SECURITY</p>
                  <hr className='font-extrabold text-2xl text-red-950 bg-red-600' />
              </article> */}