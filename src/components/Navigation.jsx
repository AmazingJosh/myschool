import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'

const Navigation = () => {
  return (
    <div className='bg-gradient-to-br from-blue-800 to-purple-800  flex items-center p-4 justify-between'>
        <div className='hidden lg:flex lg:space-x-2 text-white '>
             <span ><IoIosCall size={25}/></span>
            <span>07039509209</span>
        </div>
        <div className='hidden lg:flex lg:space-x-2 text-white'>
        <span><MdEmail size={25}/></span>
        <span>mailsupport@amazing.edu.ng</span>
        </div>
        <div className=''>
            <div className='bg-blue-800 text-white '>
                <div className='w-full flex md:px-16 md:py-4 py-4 pl-4 pr-2 justify-around items-center space-x-2'>
                    <p className='md:border-l-2 md:pl-2'>Publications</p>
                    <p className='md:border-l-2 md:pl-2'>Publications</p>
                    <p className='md:border-l-2 md:pl-2'>Publications</p>
            
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navigation