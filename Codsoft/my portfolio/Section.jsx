import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/component/Home/Home'
import About from './src/component/About/About'
import Project from './src/component/Project/Project'
import Contact from './src/component/Contact/Contact'


function Section() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default Section