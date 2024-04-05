import React from 'react'
import About from './About'
import Contact from './Contact'

function Service() {
  return (
    <div>
        
        <h1 className='text-center text-5xl'>Our Services</h1>
        <div className='flex w-full flex-row justify-around items-center'>
            <div className='w-[15%] h-[35vh]  flex flex-col justify-around items-start' >
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons01.png" alt="cemra" />
                <h2>Data Production</h2>
                <p>To identify and source the best candidate at the right time at the right place, maintaining high Standards, Time &</p>
            </div>
            <div className='w-[15%] h-[35vh]  flex flex-col justify-around items-start'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons02.png" alt="cemra" />
                <h2>Defence training</h2>
                <p>To give best security to our clients against there investment.</p>
            </div>
            <div className='w-[15%] h-[35vh]  flex flex-col justify-around items-start'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons03.png" alt="cemra" />
                <h2>Guard House</h2>
                <p>To provide our customers, the best service through out the world.</p>
            </div>
            <div className='w-[15%] h-[35vh]  flex flex-col justify-around items-start'>
                <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-icons04.png" alt="cemra" />
                <h2>Private Security</h2>
                <p>Make our clients proud by rising our position
                    In the corporate world</p>
            </div>
        </div>
        
        {/* <div className='bg-emerald-600 h-[80vh] flex-col justify-around w-[90%] ml-14'>
            <h1 className='text-center text-4xl'>ADVANTAGES</h1>
            <p className='text-center mb-4'>Security Operations under Difficult Conditions</p>
            <div>
                <p className='line-clamp-4 text-center'>Vast fields, difficult working conditions of weather, climate and other vagaries of nature demand highly motivated security personnel to perform in the areas such as mines projects and other large scale business ventures. Our training and conditioning process and motivational approach prepares the guard force for excellence in performance under such environments.</p>
            </div>
            <div className='flex flex-row justify-around mt-11'>
                <div>
                    <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img01.jpg" alt="customer support" />
                    <p>24*7 Customer Support</p>
                </div>
                <div>
                    <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img02.jpg" alt="customer support" />
                    <p>Best Staff</p>
                </div>
                <div>
                    <img src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img03.jpg" alt="customer support" />
                    <p>Continous Monitoring</p>
                </div>

            </div>

        </div> */}
        
        <div className='carousel  w-[80%] my-16 ml-10 h-96 bg-primary'>
            <h1 className=' text-2xl font-black'>ADVANTAGES</h1>
            <div id='slide1' className='carousel-item relative w-full'>
                <div className='flex flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img01.jpg" alt="customercare" />
                    <p>
                    24/7 Constant Support
                        <br />
                        Customer care services are provided by persons by automated means called self services. It is the integrated part of the company.

                    </p>
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
                <div className='flex flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img02.jpg" alt="security" />
                    <p>
                    Best Staff
                        <br />
                        We believe people as our biggest assets. As we strongly believe that success depends largely on the people, so we provide  them best working environment, training, opportunities and support, so that they can develop to their full potential. 

                    </p>
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
                <div className='flex flex-row items-center justify-around gap-4 px-[15%]'>
                    <img className='w-96 rounded-full border-2 border-gray-400 ' src="https://template63469.motopreview.com/mt-demo/63400/63469/mt-content/uploads/2017/06/mt-1028-home-img03.jpg" alt="a guard" />
                    <p> 
                    Continuous Monitoring <br />
                    Vast fields, difficult working conditions of weather, climate and other vagaries of nature demand highly motivated security personnel to perform in the areas such as mines projects and other large scale business ventures. Our training and conditioning process and motivational approach prepares the guard force for excellence in performance under such environments. 

                    </p>
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
        <About/>
        <Contact/>
    </div>
  )
}

export default Service