import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Home from './assets/components/Home'
import Projects from './assets/components/Projects'
import Skills from './assets/components/Skills'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
    <div className=' p-4 container mx-auto'>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Footer />
    </div>
    </>
  )
}

export default App
