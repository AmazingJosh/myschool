import React from 'react'
import {BiCalendar} from 'react-icons/bi'

const News = () => {
  return (
    <div  className='bg-white w-full p-4  '>
      <div className='flex items-center justify-between '>
   <div className='bg-blue-500 rounded-md p-4 m-4 '>
      <BiCalendar className='text-white ' size={40}/>
      <p className='sm:text-xl text-sm font-bold text-white tracking-wider'>23,Nov 2022</p>
    </div>
    <div className='' >
   <p className='w-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, 
    eveniet eligendi dolorem consectetur iure labore voluptatem illo 
    dicta incidunt odit nisi sit 
    </p>
    </div>
  </div>
      </div>
 
  )
}

export default News