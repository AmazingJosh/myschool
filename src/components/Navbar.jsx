import React, { useState,useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaTwitter, FaGithub, FaLinkedin,FaSearch} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import SchoolDropdown from './dropdown/School'
import Search from './dropdown/Search'
import StudentDropdown from './dropdown/Student'
import UniversityDropdown from './dropdown/University'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user, logout } = UserAuth();
  const [shadow,setShadow]=useState(false)
  const [menu,setMenu]=useState(false)
  const [navbg, setNavbg]=useState('#ecf0f3')
  const [link,setLink]=useState('#1f2937')
  const toggle=()=>setMenu(!menu)
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const handleShadow=()=>{
      window.scrollY>=90 ? setShadow(true):setShadow(false)
    }
    window.addEventListener('scroll',handleShadow)
  
  }, [])
  
 
  return (
    <div className={shadow? 'bg-white fixed w-full h-20 z-50 shadow-xl top-0':' fixed w-full h-20 z-50'}>
        <div className='flex justify-between items-center h-full w-full px-2 2xl:px-16'>
<a href="/"><h1 className="text-purple-900  lg:ml-0 font-normal text-3xl md:text-5xl">AMAZING</h1></a>
<div className=''>
  <ul className='hidden lg:flex md:items-center '>

 <li className="relative group">
   <a href="/#skills" className="uppercase text-sm ml-10 md:text-lg   hover:border-b"> Faculties and directories
   </a>
   <SchoolDropdown/>
</li>
<li className="relative group">
  <a  className="uppercase text-sm ml-10 md:text-lg  hover:border-b" href="/#projects">
    Students
    </a>
    <StudentDropdown/>
  </li> 
      {/* <a href="/#projects"><li className="uppercase text-sm ml-10 md:text-lg  hover:border-b">academics</li></a> */}
       {/* <a href="/signin" className=" text-sm ml-10 md:text-lg  hover:border-b">{user? user.email :'Signin'}</a>
       <button onClick={handleLogout} className='border md:ml-4 bg-[#09092b] text-white rounded-md p-3 '>
        Logout
      </button> */}
      {/* <a href="/#projects"><li className="uppercase text-sm ml-10 md:text-lg  hover:border-b">reach us</li></a>  */}
    <Search/> 
      

 </ul>

 <div onClick={toggle} className='lg:hidden'>
    <AiOutlineMenu size={25}/>
  </div>
</div>
 </div>
 {/**menu */} 
  <div className={menu? 'lg:hidden fixed left-0 top-0 w-full h-full bg-black/40':''}>
  <div className={menu? " fixed left-0 w-[70%] sm:w-[60%] lg:[w-45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500":"fixed left-[-100%] top-0 w-[70%] sm:w-[60%] md:[w-45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500"}>
    <div className=''>
      <div className='w-full flex items-center justify-between'>
      <h1 className="text-purple-900 font-normal text-xl sm:text-4xl ">AMAZING</h1>
  
      <div onClick={toggle} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
        <AiOutlineClose />
      </div>
      </div>
      <div className='border-b border-gray-300 my-4 pb-2'><p className='md:w-[90%] sm:text-2xl'>Welcome to the official website of the state university
      </p>
      </div>
    </div>

          <Search />
     
    <div className=''>
      <ul className='py-3 flex flex-col'>

          <li className='py-4 text-sm sm:text-2xl'>The University</li>
          <li className='py-4 text-sm sm:text-2xl'>Faculties</li>
          <li className='py-4 text-sm sm:text-2xl'>Students</li>
          <li className='py-4 text-sm sm:text-2xl'>Admission</li>
        {/* <div className='flex ml-[-4px]'>
          
        <FaLinkedin className='border border-black p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/>
<FaGithub   className='border border-black p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/>
<FaTwitter className='border border-black p-2 rounded-full m-1 shadow-lg shadow-black/30' size={40}/>
        </div> */}

      {/* <li className=" border  hover:bg-white border-purple-600 hover:ease-in-out hover:duration-500 text-center sm:text-3xl sm:p-4 font-bold text-[#56] text-lg ml-[-20px] py-[10px] px-[20px] mt-5  hover:border-b">Reach us</li> */}


      </ul>
    </div>
    <div className='flex items-center justify-around'>
      {/* <a href="/signin" className=" md:text-lg bg-[#09092b] text-white rounded-md p-3 hover:border-b">{user? user.email :'Signin'}</a>
       <button onClick={handleLogout} className='border md:ml-4 bg-[#09092b] text-white rounded-md p-3 '>
        Logout
      </button> */}
      </div>
  </div>
  
 </div>
 </div>
  )
}

export default NavBar