import React, {useState} from 'react'
import Data from '../../data.json'
import { FaSearch,FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'
import axios from 'axios'




const Search = () => {
 


  const [filteredData,setFilteredData]=useState([])
  const [wordEntered,setWordEntered]=useState('')
  const clearInput=()=>{
    setFilteredData([])
    setWordEntered("")
  }

const handleFilter=(e)=>{
  const searchWord=e.target.value
  setWordEntered(searchWord)
  const newFilter=Data.filter((value)=>(
    value.title.toLowerCase().includes(searchWord.toLowerCase())
    
  ))
  if (searchWord===""){
    setFilteredData([])

  }
  else{
    setFilteredData(newFilter)
  }
}

  return (
    <div className='relative lg:mx-4 ml-[-23px]'>
      <div className='flex items-center space-x-1'>
        <input type="text" 
        className='border bg-[#010122] rounded-xl px-4 py-3 sm:p-4 w-[190px] sm:w-[280px] text-white placeholder:text-white placeholder:text-sm sm:placeholder:text-base'
        placeholder='Search our library...' 
        onChange={handleFilter}
        value={wordEntered}
         />
      <div className='search-icon'>
        {filteredData.length===0? <FaSearch  size={20} className=""/> : <FaTimes onClick={clearInput}  size={20} className=""/> }
     
       
      </div>
      </div>
      {
        filteredData.length !==0 && 
        <div className='data-result bg-white absolute w-[200px] h-[200px] overflow-hidden  overflow-y-auto'>
      {filteredData.map((value,key)=>(
    <div key={value.link} className=' hover:bg-blue-400 px-2 mt-2'>
          <a className='text-lg cursor-pointer  ' href={value.link}><p className='cursor-pointer'>{value.title}</p></a>
    </div>
          
    
      ))}
      </div>
      }
      
    </div>
  )
}

export default Search