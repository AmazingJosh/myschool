import React from 'react'
import News from './News'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Events = () => {
  
  const slideLeft = () => {
    var slider = document.getElementById('slide');
    slider.scrollLeft = slider.scrollLeft - 130;
  };
  const slideRight = () => {
    var slider = document.getElementById('slide');
    slider.scrollLeft = slider.scrollLeft + 130;
  };
  return (
    <div className='bg-[#f9f6f6]'>
        <div className=''>
            <h1 className='uppercase text-lg font-bold pt-8 sm:pt-16 pb-4 px-20 sm:px-40 border-4 border-b-red-600'>present and upcoming event</h1>
            <h1 className='font-bold text-4xl px-40 py-4'>EVENTS</h1>
        </div>
        <div className='relative flex items-center'>
          <MdChevronLeft  className='cursor-pointer hover:opacity-100 ' onClick={slideLeft} size={40}/>
          <div id='slide' className='w-full overflow-x-scroll flex scroll-smooth  scrollbar-hide'>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
      </div>
        <MdChevronRight className='cursor-pointer hover:opacity-100 ' onClick={slideRight} size={40}/>
          </div>
        </div>
  )
}

export default Events