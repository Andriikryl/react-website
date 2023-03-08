import React from 'react'
import '../styles/Hero.css'
import HeroContent from './HeroContent'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <header className='Header'>
      <div className='container'>
      <Navbar/>
      <HeroContent/>
      </div>
    </header>
  )
}

export default Hero