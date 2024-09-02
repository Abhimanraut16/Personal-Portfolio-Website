import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import About from './component/About/About'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Section from '../Section'

function App() {

  return (
    <>
    <Navbar/>
    <Section/>
    {/* <About/>
    <Project/>
    <Contact/> */}
    <Footer/>
    </>
  )
}

export default App
