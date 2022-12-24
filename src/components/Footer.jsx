import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {BsFillChatFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {FaDownload,FaHome} from 'react-icons/fa'
import {GrStatusGood} from 'react-icons/gr'
import { useState } from 'react'

const Footer = () => {
 
  return (
    <div className=' bg-gradient-to-b from-white h-full via-blue-500 to-blue-400'>
        <div className=" text-white   uppercase font-bold md:text-2xl p-8 sm:p-32  ">
            <p className="py-4 sm:text-2xl  text-purple-600">Subscribe to our news letters</p>
            <div className='lg:flex '>
                <input type="text" placeholder='Enter Your Email' className='border  w-full lg:w-[550px] border-b-white outline-none sm:p-4 text-black font-normal ' />
                <button className='bg-purple-600 sm:p-4  w-full lg:w-40 active:bg-green-400 duration-1000 active:transition'>Submit</button>
            </div>
        </div>
        <div className=' md:grid md:grid-cols-2 lg:grid-cols-4 px-4 mx-4 '>
            <div className='mx-4'>
                <h1 className='text-purple-500 sm:text-purple-800 uppercase font-bold md:text-2xl p-2' >state university</h1>
                <p className='text-white md:text-lg pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio fugiat molestiae, ut adipisci at voluptatem incidunt quaerat sequi nesciunt. 
                    Ipsum exercitationem iusto temnsequatur voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, praesentium accusamus cum neque voluptatibus laborum deleniti saepe labori
                    t maiores quasi?</p>
            </div>
<div className='mx-4'>
    <h1 className='text-purple-700 font-bold md:text-2xl uppercase p-2'>site map</h1>
    <p className='text-white md:text-xl pb-3 mx-2'>Home</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Career</p>
    <p className='text-white md:text-xl pb-3 mx-2'>About us</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Check result</p>
    <p className='text-white md:text-xl pb-3 mx-2'>News</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Event</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Checkmail</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Directory</p>
    <p className='text-white md:text-xl pb-3 mx-2'>Staff</p>
</div>

<div className='mx-4'>
    <h1 className='text-purple-700 p-2 uppercase md:text-2xl font-bold'>school</h1>
  <p className='text-white md:text-2xl pb-3 mx-2'>Academic calendar</p>
  <p className='text-white md:text-2xl pb-3 mx-2'>Faculties</p>
  <p className='text-white md:text-2xl pb-3 mx-2'>Departments</p>
  <p className='text-white md:text-2xl pb-3 mx-2'>ODLRI</p>
  <p className='text-white md:text-2xl pb-3 mx-2'>CDC</p>
  <p className='text-white md:text-2xl pb-3 mx-2'>People</p>
  <h1 className="text-purple-700 font-bold py-2 uppercase md:text-2xl">Support</h1>
  <div className=' text-white font-semibold text-lg'>
    <div className='flex py-2 '>
<IoIosCall size={25}/>
<p>help desk</p>
    </div>
    <div className='flex py-2'>
<BsFillChatFill size={25}/>
<p>Contact us</p>
    </div>
    <div className='flex py-2'>
<FaDownload size={25}/>
<p>Downloads</p>
    </div>

  </div>
   
</div>

<div className="text-white mt-4 mx-4 ">
    <h1 className="uppercase text-purple-700 font-bold md:text-2xl ">get in touch with us</h1>
<div className="">
<div className='flex  items-center space-x-1'>
      <FaHome size={40}/>
<p className="text-base ">Lorem ipsum dolor sit amet nissimos</p>
    </div>
    <div className='flex space-x-1 items-center'>
      <IoIosCall size={40}/>
<p className="uppercase text-base">+2347039509209</p>
    </div>
    
    <div className='flex space-x-1 items-center'>
      <HiOutlineMail size={40}/>
<p className="upper text-base ">support@amazing.edu.ng</p>
    </div>
</div>
</div>
        </div>
      
    </div>

  )
}

export default Footer