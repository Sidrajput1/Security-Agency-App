import React from 'react'
import About from './About'
import Service from './Service'
import { Link } from 'react-router-dom'

function Herosection() {
  return (
    <main>
        {/* <div className='flex flex-row justify-around items-center w-full mt-14'>
            <div className=' w-full h-[50vh] flex flex-col justify-center items-center relative left-6'>
                <p className='pr-8 opacity-100 font-semibold'>Zero defects & Zero errors” is our motto</p>
                <h1 className='text-6xl ml-24 font-serif'>Security is not a product,
                    <br />
                it is a process.
                </h1>
                <div className='flex justify-around w-80 mt-12 gap-16  mr-40'>
                    <button className='py-4 px-4 rounded-lg border-4 border-yellow-500 bg-black text-cyan-50 hover:bg-transparent hover:text-black hover:border-none transition-all ease-in-out duration-300'>Learn More</button>
                    <button 
                    className='py-4 px-4 rounded-lg border-4 border-blue-800 bg-gray-200 text-black hover:bg-blue-600 hover:border-none font-serif transition-all ease-in-out duration-300 '><Link to={"/contact"}> Contact us</Link></button>
                </div> 
            </div>
            <div className='relative right-12'>
                <img className='w-[80%] h-[50vh] float-right' src="https://media.istockphoto.com/id/471852401/photo/back-of-a-security-guard.jpg?s=612x612&w=0&k=20&c=gxtD69qSCpaPKOWEBwr_-ljGli7rDfFOu_SfQB4oy_E=" alt="hero" />
            </div>
        
        </div> */}
        <div className='flex flex-col md:flex-row justify-around items-center w-full mt-14'>
            <div className='w-full md:w-[50%] h-[50vh] flex flex-col justify-center items-center relative md:left-6'>
                <p className='pr-8 opacity-100 font-semibold text-center md:text-right'>Zero defects & Zero errors” is our motto</p>
                <h1 className='text-4xl md:text-6xl ml-4 md:ml-24 font-serif text-center md:text-left'>Security is not a product,
                    <br />
                it is a process.
                </h1>
                <div className='flex flex-col md:flex-row justify-center md:justify-around w-full md:w-80 mt-12 gap-6 md:gap-16'>
                    <button className='py-4 px-4 rounded-lg border-4 border-yellow-500 bg-black text-cyan-50 hover:bg-transparent hover:text-black hover:border-none transition-all ease-in-out duration-300'>Learn More</button>
                    <button 
                    className='py-4 px-4 rounded-lg border-4 border-blue-800 bg-gray-200 text-black hover:bg-blue-600 hover:border-none font-serif transition-all ease-in-out duration-300 '><Link to={"/contact"}> Contact us</Link></button>
                </div> 
            </div>
            <div className='w-full md:w-auto relative md:right-12'>
                <img className='w-full rounded-xl border-x-12 h-[50vh] md:w-[80%] float-right' src="https://media.istockphoto.com/id/471852401/photo/back-of-a-security-guard.jpg?s=612x612&w=0&k=20&c=gxtD69qSCpaPKOWEBwr_-ljGli7rDfFOu_SfQB4oy_E=" alt="hero" />
            </div>
        
        </div>
        {/* <About /> */}
        <Service/>
    </main>
     
   
  )
}

export default Herosection