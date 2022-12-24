import React from 'react'
import { FaUniversity,FaGraduationCap } from 'react-icons/fa'
import { IoIosMan} from 'react-icons/io'
import { MdLocationPin} from 'react-icons/md'

const Admissions = () => {
  return (
    <div className='md:px-32 text-white '>
      <div className="p-4 bg-gradient-to-b from-blue-600 to-purple-500 mb-16 mt-16 sm:grid sm:grid-cols-2">

      <div className='mx-16 sm:mx-2' >
     <div className='flex items-center space-x-2 lg:space-x-4'>
        <FaUniversity size={80}/>
        <p className='font-bold text-lg md:text-2xl'>Faculty</p>
      </div>
      <p className='font-bold text-lg md:text-2xl p-2 md:p-4'>11</p>
      </div>

      <div className='mx-16 sm:mx-2' >
     <div className='flex items-center space-x-2 lg:space-x-4'>
        <FaGraduationCap size={80} color="yellow"/>
        <p className='font-bold text-lg md:text-2xl'>department</p>
      </div>
      <p className='font-bold text-lg md:text-2xl p-2 md:p-4'>70+</p>
      </div>
      <div className='mx-16 sm:mx-2' >
     <div className='flex items-center space-x-4'>
        <IoIosMan size={80} color="orange"/>
        <p className='font-bold text-2xl'>students</p>
      </div>
      <p className='font-bold text-2xl p-4'>35000+</p>
      </div>
      <div className='mx-16 sm:mx-2' >
     <div className='flex items-center space-x-4'>
        <MdLocationPin size={80} color="red"/>
        <p className='font-bold text-2xl'>campus</p>
      </div>
      <p className='font-bold text-2xl p-4 ml-2'>2</p>
      </div>
      </div>
      

    </div>
  )
}

export default Admissions