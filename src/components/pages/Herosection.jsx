import React, { useEffect, useState } from 'react'
import About from './About'
import Service from './Service'
import { Link } from 'react-router-dom'

function Herosection() {

    const [isVisible,setIsVisible] = useState(false);

    useEffect( ()=>{
        const timeOut = setTimeout( ()=> {
            setIsVisible(true)
        },1000)

        return () => clearTimeout(timeOut)

    },[])

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
        <div className='flex flex-col md:flex-row justify-around items-center w-full mt-[12rem]'>
            <div className='w-full md:w-[50%] h-[50vh] flex flex-col justify-center items-center relative md:left-6'>
                <p className={`pr-8 bg-opacity-100 justify-center bg-red-500 font-serif shadow-2xl rounded-sm font-semi  md:text-2xl text-sm  text-white md:ml-0 md:mr-16 md:text-justify ml-[32px] flex-nowrap`}>Zero defects & Zero errors” is our motto</p>
                <h1 className={`text-4xl md:text-6xl ml-4 md:ml-24 font-serif text-center md:text-left transition-none  ${isVisible?'md:transition-transform md:ease-in-out md:duration-700 md:translate-x-0':'md:-translate-x-full'} `}>Security is not a product,
                    <br />
                it is a process.
                </h1>
                <div className=' flex flex-col md:flex-row justify-center md:justify-around w-full  md:mr-48 ml-2 md:w-80 mt-12 gap-6 md:gap-16'>
                    <button className='py-4 px-4 rounded-2xl border-4 border-black bg-black text-white hover:bg-transparent hover:text-black hover:border-none transition-all ease-in-out duration-300'><Link to={"/learn"}>Learn More</Link></button>
                    <button 
                    className='py-4 px-4 rounded-lg border-4 border-blue-800 bg-gray-200 text-black hover:bg-blue-600 hover:border-none font-serif transition-all ease-in-out duration-300 text-lg'><Link to={"/contact"}> Contact us</Link></button>
                </div> 
            </div>
            <div className='w-full md:w-auto relative md:right-12 top-8'>
                <img className={`w-full rounded-xl border-x-12 h-[50vh] md:w-[80%] float-right  hover:duration-300 ease-in-out hover:skew-y-1 transition-none ${isVisible ? 'md:transition-transform md:ease-in-out md:duration-700 translate-y-0': 'md:translate-x-full'} `}src="https://media.istockphoto.com/id/471852401/photo/back-of-a-security-guard.jpg?s=612x612&w=0&k=20&c=gxtD69qSCpaPKOWEBwr_-ljGli7rDfFOu_SfQB4oy_E=" alt="hero" />
            </div>
        
        </div>
        {/* <About /> */}
        <Service/>
    </main>
     
   
  )
}

export default Herosection