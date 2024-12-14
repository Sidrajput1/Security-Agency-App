import React from 'react'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaCopyright } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function Footer() {
    return (
      <footer className='w-full md:h-[40vh] h-[60vh]  bg-emerald-400  text-black md:bg-black md:text-white  py-6  bottom-0 '>
        <div className='container mx-auto  flex flex-col md:flex-row justify-around items-center md:text-center md:mt-16'>
          <div className='w-full md:w-1/4 text-center md:text-center mb-4 md:mb-0'>
            <p className='text-sm font-serif font-bold'>
              A unit of “Shimmer Utility Private Limited” <br />
              An ISO 9001 : 2015 Certified Company
            </p>
            <p className='mt-3'>
              All <FaCopyright className='inline'/> right reserved
            </p>
          </div>
          <div className='w-full md:w-1/4 mb-4 md:mb-0 text-center ml-0'>
            <ul className=' list-none text-blue-700 '>
              <li className='hover:text-white'>Term & Condition</li>
              <li className='hover:text-white'>Privacy Policy</li>
              <li className='hover:text-white'>Help</li>
              <li className='hover:text-white'>Affiliated</li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mb-4 md:mb-0 text-center'>
            <ul className='list-none text-orange-400'>
              <li><a href="https://www.google.com/maps/place/PRABISVG+SAMAJ+KALYAN+EVUM+SHIKSHAN+SANSTHA/@25.5985801,85.1474256,19.54z/data=!4m6!3m5!1s0x39ed594bdea31021:0x4bed5ee46ab1ee26!8m2!3d25.5989678!4d85.147871!16s%2Fg%2F11t7hb8lx0?authuser=1&entry=ttu">Our Location</a></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/service'}>Service</Link></li>
              <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
          </div>
          <div className='w-full md:w-1/4 flex justify-around items-center font-extrabold text-2xl'>
            <a href="www.facebook.com"><CiFacebook /></a>
            <a href=""><MdOutlineEmail /></a>
            <a href=""><CiTwitter/></a>
            <a href=""><CiLinkedin /></a>
          </div>
        </div>
      </footer>
    )
  }
  

export default Footer