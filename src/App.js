import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className='text-2xl font-bold'>
        <Navbar />
        <Home />
        {/* <About /> */}
        <Skills />
        <Work />
        <Contact />
    </div>
  )
}

export default App