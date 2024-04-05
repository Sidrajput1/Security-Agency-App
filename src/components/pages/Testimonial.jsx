import React from 'react'
import { GiBiceps } from "react-icons/gi";

function Testimonial() {

  return (
    <div className='m-auto w-[90%] h-[50vh] mb-4'>
        <div className='text-center m-0 mb-12'>
            <h1 className='font-bold italic opacity-90 text-4xl'> What Our Clients Says </h1>
            <p className='opacity-50'> Read honest testimonials of our clients who got secured thanks to our services.</p>
        </div>
        
        <div className='flex flex-row justify-around items-center z-50'>
            <div className='w-[30%] h-[35vh]  flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'>My husband threatened me, so I decided to address to this security firm. I was right. These guys showed their entire professionalism in practice when assisted me in everything. Thank you!</p>
                    <p className=' text-center font-extralight text-1xl italic'>Richa Ghosh <br /> <span>Client Member</span></p>
            </div>
            <div className='w-[30%] h-[35vh]  flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'>When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p>
                    <p className=' text-center font-extralight text-1xl italic'>Dr Padmini Gupta <br /> <span>Client Member</span></p>
            </div>
            <div className='w-[30%] h-[35vh]  flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'> Amazing professionals who know their job from A to Z. They provide you with special training and show how to treat weapons. I feel myself like a little boy nearby these guys.</p>
                    <p className=' text-center font-extralight text-1xl italic'> Pk Jha<br /> <span>Client Member</span></p>
            </div>

        </div>
    </div>
  )
}

export default Testimonial