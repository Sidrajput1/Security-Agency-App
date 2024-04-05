import React from 'react'
// import Picture1 from '../../assets/images'
import Picture1 from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/Picture1.png'
import Picture2 from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/Picture2.png'
import Picture3 from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/Picture3.png'
import Picture4 from '/Users/apple/Desktop/Shimmer Group/Security_Project_with react/Security app/src/assets/images/Picture4.png'
function Galary() {
  return (
    // <div className='w-[100%]  bg-cyan-800'>
    //     <h1>Our Galary</h1>
    //     <div className='flex justify-between flex-row items-center w-[90%] h-[90vh] m-auto'>
    //         <div className='w-[50%] flex justify-start border-2'>
    //             <div >
    //                 <img className='w-[80%] h-96' src={Picture1} alt="guard1" />
    //             </div>
    //             <div >
    //                 <img className='w-[80%]' h-96  src={Picture2} alt="guard2" />
    //             </div>
    //         </div>
            
    //         <div className='w-[50%] flex justify-end border-2'>
    //             <div>
    //                 <img className='w-[90%] h-96' src={Picture3} alt="guard3" />
    //             </div>
    //             <div>
    //                 <img className='w-[90%] h-96 border-4' src={Picture4} alt="guard4" />
    //             </div>
    //         </div>
            
    //     </div>
    // </div>
    <div className="container mx-auto p-4 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Gallery Our Company Collagon</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="relative group">
                <img className="rounded-lg shadow-md h-[90%]" src={Picture1} alt="Picture 1" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Picture 1</p>
                </div>
            </div>
           
            <div className="relative group">
                <img className="rounded-lg shadow-md h-[90%]" src={Picture2} alt="Picture 2" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Picture 2</p>
                </div>
            </div>
           
            <div class="relative group">
                <img className="rounded-lg shadow-md h-[90%]" src={Picture3} alt="Picture 3" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Picture 3</p>
                </div>
            </div>
           
            <div className="relative group">
                <img className="rounded-lg shadow-md h-[90%]" src={Picture4} alt="Picture 4" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Picture 4</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Galary;