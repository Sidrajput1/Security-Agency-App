import React, { useRef } from 'react'
import { MdEmail, MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_pn5615b','template_b0js4hj',form.current,'j4xx381zO86hhZJce')

        .then((result) => {
            console.log(result.text)
            alert("Message Send Sucessfully")
        },  (error)=>{
            console.log(error.text);
          }

        );
        e.target.reset()
    }


  return (
    <div className='w-[100%] rounded-lg h-[90vh] bg-slate-300 m-auto flex justify-around flex-row-reverse items-center'>
         
        <div className='w-[30%] rounded-lg h-[70vh] border-2 bg-cyan-300 relative right-16 flex gap-0 items-center justify-around flex-col text-wrap'>
            <h1 className='text-center font-bold text-4xl '>Contact Info</h1>
            {/* <p>
                The above presentation is a brief overview of our company’s profile and we are confident that you would give us a chance to serve your organization better than others
            </p>
            <h3>
                Should you have any queries please contact us on the numbers given below:
            </h3> */}
            
                <li className='text-black list-none text-center'>
                    <MdOutlineLocationOn className='ml-6 text-center font-bold text-xl relative top-5 left-3'/>
                    Lohiya Nagar, Opp. Central Bank Of India,
                    Kankarbagh,Patna-20
                </li>
                <li className='text-black list-none text-center'>
                    <FaPhone className='text-center font-bold text-xl relative top-6 right-8'/>
                        0612-2352245 <br /> 9279093790
                </li>
                <li className='text-black list-none text-center'>
                    <MdEmail className='text-center font-bold text-xl relative top-6 right-8'/>
                    shimmersecurites@gmail.com<br /> info@shimmersecurity.in

                </li>
            
        </div>
        <form ref={form} onSubmit={sendEmail}
            className='w-[60%] rounded-lg h-[70vh] z-50 flex justify-around flex-col items-center relative left-8 bg-white'>
            <div className='w-[90%] '>
                <input className='w-[100%] h-14 cursor-text border-2 rounded-sm border-gray-400 bg-transparent text-s' type="text" name='name' placeholder='Full Name' required/>
            </div>
                
            <div className='w-[90%]'>
                <input className='w-[100%] h-14 cursor-text border-[2px] rounded-sm border-gray-400' type="email" name='email' placeholder='Your Email' required />
            </div>
            <div className='w-[90%] '>
                <input className='w-[100%] h-14 cursor-text border-2 rounded-sm border-gray-400 list-none' type="number" name='number' placeholder='Contact Number' />
            </div>
            <div className='w-[90%]'>
                <textarea className='cursor-text w-[100%] border-2 rounded-sm border-gray-400' name="message" id="message"  rows="5" placeholder='message'></textarea>
            </div>
                <button type='submit' className='w-[40%] border-none rounded-2xl py-2 px-2 bg-blue-800 text-white hover:bg-gray-950'>Send</button>
        </form>
    </div>
  )
}

export default Contact