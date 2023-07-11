import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import Cv from "../assets/resume.pdf"
const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] w-full h-screen'>
         <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center '>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Sunil dhiman</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a full stack developer.</h2>
            <p className='py-4 text-[#8892b0] max-w-[700px]'> I design and build the web based applications. currently, i am implementing Responsive portfolio website.</p>
          <div>
              <button className='px-6 group py-3 my-2 flex items-center text-white-600 
              border-2 hover:border-pink-600 hover:bg-pink-600 '><a href={Cv}>Get Resume</a>
              <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight  className='ml-3'/>

              </span>
              </button>
              
          </div>
         </div>
    </div>
  )
}

export default Home