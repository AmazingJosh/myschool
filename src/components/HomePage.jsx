import React,{useState,useEffect} from 'react'
import { sliderData } from '../slider-data';
import "./Slider.scss"

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
   
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
   
  };
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
<div>
{sliderData.map((slide,index)=>(
   <div
   className={index === currentSlide ? "slide current" : "slide"}
   key={index}
 >
   {index === currentSlide && (
      <div id='slider' className='relative border-t-2 md:mt-[10%] mt-[18%] lg:mt-[5%]   w-full lg:h-[650px] md:h-[600px] h-[280px] bg-center bg-cover bg-no-repeat'>
        <img src={slide.image} alt="slide" className="image object-cover"  />
        {/* mobile */}
        {/* <div className="sm:hidden text-red-500 content ">
         <h2>{slide.heading}</h2>
         <p>{slide.desc}</p>
         <hr />
        </div> */}
       <div className="content">
         <h2 className='text-white uppercase font-bold'>{slide.heading}</h2>
         <p className='italic text-base sm:text-lg font-semibold text-white bg-transparent'>{slide.desc}</p>
         <hr />
         {/* <button className="--btn --btn-primary">Get Started</button>?\ */}
       </div> 
     </div>
   )}
 </div>
     
     
       
   
))}


   </div>
    
  )
}

export default HomePage