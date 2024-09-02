import React from 'react'
import './contact.css'

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  return (
    <div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sun-tittle">Contact Me</h1>
              <p>
                <MdEmail className='mx-2' />
                rautabhimanu59@gmail.com</p>
              <p>
                <FaPhoneAlt className='mx-2' />
                9824378289 / 9840909171</p>
              <div className="socail-icon">
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com">
                  <FaInstagramSquare />
                </a>
                <a href="https://github.com/Abhimanraut16">
                  <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/abhimanu-raut-025a48265/">
                  <FaLinkedin />
                </a>
              </div>
              <a href="./image/Resume-Abhimanu-Raut (2).pdf" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Enter your Name" required />
                <input type="email" name="Email" placeholder="Enter your Email" required />
                <textarea name="Message" rows={6} placeholder="Enter youe Message" defaultValue={""} />
                <button type=" submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg" />
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact