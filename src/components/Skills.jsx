import React from 'react'
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Js from "../assets/javascript.png"
import ReactJs from "../assets/react.png"
import Github from "../assets/github.png"
import NodeJs from "../assets/node.png"
import MongoDb from "../assets/mongo.png"
import Tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name="skills" className='text-gray-300 w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] w-full h-full justify-center mx-auto p-4 flex flex-col'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
        
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Html} alt="html icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Css} alt="html icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Js} alt="html icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={ReactJs} alt="html icon" />
                <p className='my-4'>React Js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={NodeJs} alt="html icon" />
                <p className='my-4'>Node Js</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Tailwind} alt="html icon" />
                <p className='my-4'>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={MongoDb} alt="html icon" />
                <p className='my-4'>Mongo DB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Github} alt="html icon" />
                <p className='my-4'>Github</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills