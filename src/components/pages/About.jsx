import React from 'react'
import Contact from './Contact'
import Service from './Service'
import Testimonial from './Testimonial'
import Footer from './Footer'

function About() {
    return (
        <div className='min-h-screen  border-violet-600 '>
            <div className='w-full h-[70vh] md:w-[90%] m-auto flex flex-col md:flex-row   justify-evenly md:justify-evenly items-center bg-transparent '>
                <div className='w-[80%] md:w-[40%]'>
                    <img className='w-[100%] h-80 object-cover' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-about-img.jpg" alt="a guard" />
                </div>
                <div className='w-full h-[max-content] md:w-[50%] mt-4 md:mt-0 md:mb-16 overflow-scroll  '>
                    <h1 className='text-center font-extrabold text-4xl font-serif mb-6 hover:text-cyan-900'>About Our Company</h1>
                    <p className='text-left font-semibold text-gray-600 line-clamp-10 text-pretty  md:line-clamp-none '>
                        Traditional methodology of putting up guards everywhere and anywhere should be giving way to more unobtrusive and efficient vigilance. One very effective option is to adopt a system of positioning marshals at vital points that should preferably operate out of uniform and from locations which may give them better area scanning construction and ease of reaction, when required. They should be well educated with higher I.Q so that they can ‘own the environment’ and act independently, in keeping with the situation. They should be trained in marshal arts so that they could successfully ward off difficult situations. However a fine combination of aggression with coolness can be exercised. This concept will enhance the level of confidence the client will have in his security provider.
                    </p>
                </div>
            </div>
            
                
                
                
            
        </div> 
    )
}

export default About