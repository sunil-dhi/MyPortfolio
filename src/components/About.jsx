import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-gray-300 bg-[#0a192f]'>
       <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About me</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='text-4xl font-bold sm:text-right'>
                  <p>Hi, i am passionate Full stack web developer looking for a role in web development. </p>
              </div>
              <div>
              I built up my interest in the coding since my 12th standard thats why I did my Graduation and Postgraduation in computer science. Now, Coding has become my passion and I love to see the results of my efforts.
              </div>
            </div>
        </div>
       </div>
    
  )
}

export default About