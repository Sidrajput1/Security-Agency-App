import React from 'react'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaCopyright } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='w-[100%] h-[40vh] bg-black bottom-0 flex flex-row justify-around'>
        <div className='w-[25%]  rounded-md text-white flex flex-col justify-around items-center '>
            <div>
                <p className=''>
                    A unit of “Shimmer Utility Private Limited” <br />
                        An ISO 9001 : 2015 Certified Company
                </p>
            </div>
            <div>
             <p>
                All right reserved <span><FaCopyright /></span>
             </p>
            </div>
             
        </div>
        <div className='w-[25%] rounded-md text-blue-600 flex flex-col justify-around items-center'>
                <ul>
                    <li>Term & Condition</li>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                    <li>Affilated</li>
                </ul>

        </div>
        <div className='w-[25%] rounded-md text-gray-100 flex flex-col justify-around items-center'>
                <ul>
                    <li>Our Loaction</li>
                    <li>Career</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>

        </div>
        <div className='w-[25%] rounded-md text-white flex flex-row justify-around items-center'>
                <a href="www.facebook.com"> <CiFacebook /></a>
                <a href=""><MdOutlineEmail /> </a>
                <a href=""> <CiTwitter/></a>
                <a href=""> <CiLinkedin /></a>
        </div>
    </div>
  )
}

export default Footer