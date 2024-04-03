import React from 'react'
import About from './About'
import Service from './Service'

function Herosection() {
  return (
    <main>
        <div className='flex flex-row justify-around items-center w-full mt-14'>
            <div className='w-[50%] flex flex-col justify-center items-center relative left-6'>
                <p>Protection, Defense, & Access Control</p>
                <h1 className='text-6xl ml-16'>Security is not a product,
                    <br />
                it is a process.
                </h1>
                <div className='flex justify-around w-80 mt-6 gap-16'>
                    <button className='py-4 px-4 rounded-lg border-4 border-yellow-500 bg-black text-cyan-50 hover:bg-transparent hover:text-black hover:border-none'>Learn More</button>
                    <button className='py-4 px-4 rounded-lg border-4 border-blue-800 bg-gray-200 text-black hover:bg-blue-600 hover:border-none font-serif '>Contact us</button>
                </div> 
            </div>
            <div className='relative right-12'>
                <img className='w-[50%] float-right' src="https://storage.googleapis.com/pai-images/2df77dfa146040fcb575c9d9bc54cedd.jpeg" alt="hero" />
            </div>
        
        </div>
        {/* <About /> */}
        <Service/>
    </main>
     
   
  )
}

export default Herosection