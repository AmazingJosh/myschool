import React from 'react'
import Admissions from './Admissions'
import Events from './Events'
import Foot from './foot'
import Footer from './Footer'
import HomePage from './HomePage'
import NavBar from './Navbar'
import Navigation from './Navigation'
import Slider from './slider/Slider'

const Home = () => {
  return (
    <div>
        <Navigation/>
        <NavBar/>
        {/* <Slider/> */}
        <HomePage/>
        <Events/>
        <Admissions/>
        <Footer/>
        <Foot/>
    </div>
  )
}

export default Home