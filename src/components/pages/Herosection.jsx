import React from 'react'
import About from './About'
import Service from './Service'

function Herosection() {
  return (
    <main>
        <div className='flex flex-row justify-around items-center w-full border-2 mt-14'>
            <div className='border-2 w-[50%] flex flex-col justify-center items-center'>
                <p>Protection, Defense, & Access Control</p>
                <h1 className='text-4xl'>Security is not a product,
                    <br />
                it is a process.
                </h1>
                <div>
                    <button>Learn More</button>
                    <button>Contact us</button>
                </div>
            </div>
            <div>
                <img className='w-[50%] float-right' src="https://storage.googleapis.com/pai-images/2df77dfa146040fcb575c9d9bc54cedd.jpeg" alt="hero" />
            </div>
        
        </div>
        {/* <About /> */}
        <Service/>
    </main>
     
   
  )
}

export default Herosection