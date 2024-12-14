import React, { useEffect } from 'react'
import { GiBiceps } from 'react-icons/gi';

// Testimonial component
function Testimonia2() {

  useEffect(() => {
    const preventCopy = (e) => {
      e.preventDefault();
    };

    const preventRightClick = (e) => {
      e.preventDefault();
    };

    
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    document.addEventListener('selectstart', preventCopy);

    // Prevent right-clicking
    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      // Cleanup event listeners on component unmount
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('selectstart', preventCopy);
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);


    return (
      <div className='m-auto mt-28 w-[90%]  '>
        <div className='text-center m-0 mb-10'>
          <h1 className='font-bold italic opacity-90 text-4xl mt-2'> What Our Clients Says </h1>
          <p className='opacity-50'> Read honest testimonials of our clients who got secured thanks to our services.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          
          <div className='flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'>We just Want to say Thank You for all of your help and also to your security team who helped make our School,events run as smoothly as possible.I will be recommending your services to future committees.</p>
                    <p className=' text-center font-extralight text-1xl italic'>Himalayan Public School <br /> <span>Client Member</span></p>
          </div>
          
         
          <div className='flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'>"I’d just like to say everything has been running smoothly with your guys, they are great, really great in fact, as usual. your constant support is very much appreciated. Thank you </p>
                    <p className=' text-center font-extralight text-1xl italic'> Jp Verma <br /> <span>Client Member</span></p>
          </div>
          
          
          <div className='flex flex-col gap-6 shadow-md rounded-lg opacity-60'>
                <span className='ml-6 mt-4 text-2xl'><GiBiceps /></span>
                <p className='text-1xl italic text-black-50 font-semibold text-center'> Amazing professionals who know their job from A to Z. They provide you with special training and show how to treat weapons. I feel myself like a little boy nearby these guys.</p>
                    <p className=' text-center font-extralight text-1xl italic'> PK Jha<br /> <span>Client Member</span></p>
          </div>
          
          {/* Repeat for additional testimonials */}
        </div>
      </div>
    );
  }

  export default Testimonia2;
  
         
       
           