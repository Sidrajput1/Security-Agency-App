import React from 'react'
import About from './About'
import Contact from './Contact'

function Service() {
  return (
    <div className='mt-24'>
        
        <h1 className='text-center text-5xl text-blue-900 mb-8'>Our Services</h1>
        {/* <div className='flex w-full  flex-row  justify-around items-center gap-4 md:gap-8 font-serif m-auto'>
            <div className='w-full  md:w-[40%] lg:w-[30%] h-[35vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400' >
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons01.png" alt="cemra" />
                <p className='mb-4 ml-3'>To identify and source the best candidate at the right time at the right place, maintaining high Standards, Time &</p>
            </div>
            <div className='w-full md:w-[45%] lg:w-[30%] h-[30vh] md:h-[35vh]  flex flex-col justify-evenly items-center border-2 rounded-badge  z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons02.png" alt="cemra" />
                <p className='mb-4 ml-3'>To give best security to our clients against there investment.</p>
            </div>
            <div className='w-full md:w-[45%] lg:w-[30%] h-[30vh] md:h-[35vh]  flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400 '>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons03.png" alt="cemra" />
                <p className='mb-4 ml-3'>To provide our customers, the best service through out the world.</p>
            </div>
            <div className='w-full md:w-[45%] lg:w-[30%] h-[30vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons04.png" alt="cemra" />
                <p className='mb-4 ml-3'>Make our clients proud by rising our position
                    In the corporate world</p>
            </div>
        </div> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 font-serif m-auto'>
            <div className='w-full h-[30vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons01.png" alt="camera" />
                <p className='text-center mb-4 md:ml-3'>To identify and source the best candidate at the right time at the right place, maintaining high standards.</p>
            </div>
            <div className='w-full h-[30vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons02.png" alt="camera" />
                <p className='text-center mb-4 md:ml-3'>To give the best security to our clients against their investments.</p>
            </div>
            <div className='w-full h-[30vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons03.png" alt="camera" />
                <p className='text-center mb-4 md:ml-3'>To provide our customers with the best service throughout the world.</p>
            </div>
            <div className='w-full h-[30vh] md:h-[35vh] flex flex-col justify-evenly items-center border-2 rounded-badge z-30 border-blue-400'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons04.png" alt="camera" />
                <p className='text-center mb-4 md:ml-3'>Make our clients proud by rising our position in the corporate world.</p>
            </div>
        </div>

        
        <div className='carousel  w-full my-16 h-96 bg-primary-content'>
            {/* <h1 className=' text-2xl text-black'>ADVANTAGES</h1> */}
            <div id='slide1' className='carousel-item relative w-full'>
                <div className='flex flex-col md:flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 md:float-right ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img01.jpg" alt="customercare" />
                    <div className='w-full md:w-2/3'>
                        <p className='text-center md:text-left font-semibold text-2xl'>
                            24*7 Constant Support
                            <br />
                            <span className='text-xl no-underline block'>Customer care services are provided by persons by automated means called self services. It is the integrated part of the company.</span>
                        </p>
                    </div>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href="#slide3" className='btn btn-circle'>
                        ❮
                    </a>
                    <a href="#slide2" className='btn btn-circle'>
                        ❯
                    </a>
                </div>

            </div>

            <div id='slide2' className='carousel-item relative w-full'>
                <div className='flex flex-col md:flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img02.jpg" alt="security" />
                    <div className='w-full md:w-2/3'>
                        <p className='text-center md:text-left font-semibold text-2xl '>
                        Best Staff
                            <br />
                            <span className='text-xl no-underline block'>We believe people as our biggest assets. As we strongly believe that success depends largely on the people, so we provide  them best working environment, training, opportunities and support, so that they can develop to their full potential.</span>

                        </p>
                    </div>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href="#slide1" className='btn btn-circle'>
                        ❮
                    </a>
                    <a href="#slide3" className='btn btn-circle'>
                        ❯
                    </a>
                </div>

            </div>

            <div id='slide3' className='carousel-item relative w-full'>
                <div className='flex flex-col md:flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img03.jpg" alt="a guard" />
                    <div className='w-full md:w-2/3'>
                        <p className='text-center md:text-left font-semibold text-2xl '> 
                        Continuous Monitoring <br />
                        <span className='text-xl no-underline block'>Vast fields, difficult working conditions of weather, climate and other vagaries of nature demand highly motivated security personnel to perform in the areas such as mines projects and other large scale business ventures. Our training and conditioning process and motivational approach prepares the guard force for excellence in performance under such environments</span>

                        </p>
                    </div>
                    
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                    <a href="#slide2" className='btn btn-circle'>
                        ❮
                    </a>
                    <a href="#slide1" className='btn btn-circle'>
                        ❯
                    </a>
                </div>

            </div>

            

        </div>
        {/* <About/> */}
        {/* <Contact/> */}

    </div>
  )
}

export default Service
// w-[15%] md:w-[30%] h-[35vh] 