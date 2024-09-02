import React from 'react'
import './about.css'
import avi from'../../assets/avi.jpg'
function About() {

  return (
    <div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={avi} alt width="450px" height={500} />
            </div>
            <div className="about-col-2">
              <h1 className="sun-tittle">About Me</h1>
              <p>I am a developer and  skilled and passianate Frontend developer with experiencein a creating visually appealing and user-friendly websites.
                I have a strong understanding of design and a keen eye for detail. i am proficient in HTML, CSS, JAVASCRIPT, REACT JS , and PHP,SQLI as well as design software such as figma and adobe photoshop.
              </p>
              <div className="tab-titles ">
                <p className="tab-links active-link" onclick="opentab('skills')">Skills</p>
                <p className="tab-links" onclick="opentab('experience')">Experience</p>
                <p className="tab-links" onclick="opentab('Education')">Education</p>
              </div>
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li><span>Web Design</span> <br />Designign Web Application</li>
                  <li><span>Web Developer</span> <br />Designign Web Development</li>
                  <li><span>Frontend Development</span> <br />Designign Frontend</li>
                </ul>
              </div>
              <div className="tab-contents" id="experience">
                <ul>
                  <li><span>2024 - Current</span> <br /> Web Design and Frontend Development Training At Broadway infosys.</li>
                  <li><span>2023-2024</span> <br />Web Design.</li>
                  <li><span>2023-2024</span> <br /> Frontend Development.</li>
                  <li><span>2022-2024</span> <br /> Develop by projects</li>
                  <li><a href="https://github.com/Abhimanraut16">Click on github</a></li>
                </ul>
              </div>
              <div className="tab-contents" id="Education">
                <ul>
                  <li><span>2022</span> <br />BCA From BWIC KTM.</li>
                  <li><span>2023</span> <br />Broadway infosys Tech KTM.</li>
                  <li><span>2024</span> <br />Frontend developer And Web Design Training At Broadway infosys Tech.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About