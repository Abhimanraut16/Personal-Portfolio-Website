import React from 'react'
import Section from '../../../Section'
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <div>
      {/* <Section/> */}
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default Home