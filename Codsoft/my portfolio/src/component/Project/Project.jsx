import React from 'react'
import './project.css'
import travel from '../../assets/socail/procat1.jpg'
import ecommerce from '../../assets/socail/ecommerce.jpg'
import education from '../../assets/socail/education.jpg'
import { FaRegShareSquare } from "react-icons/fa";


function Project() {
  return (
    <div>

      <div id="portfolio">
        <div className="container">
          <h1 className="sun-tittle"> My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={travel} alt />
              <div className="layer">
                <h3>Travel And Trip</h3>
                <p>the act and process of spending time away from home in pursuit of recreation, relaxation, and pleasure, while making use of the commercial provision of services.
                </p>
                <a href="https://travel-and-tour-gold.vercel.app/">

                <FaRegShareSquare />
                
                
                </a>
              </div>
            </div>
            <div className="work">
              <img src={education} alt />
              <div className="layer">
                <h3>Educations</h3>
                <p>Educational development is a growing and vibrant field, defined as: “helping colleges and universities function effectively as teaching and learning communities”
                </p>
                <a href="https://laxami-j79qx12xg-abhimanraut16.vercel.app/">
                <FaRegShareSquare />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={ecommerce} alt />
              <div className="layer">
                <h3>E-commerces</h3>
                <p>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.
                </p>
                <a href="https://brotherhood-nepal-nirman-samagari-suppliers.vercel.app/?fbclid=IwAR1zweMELkUDOzgcc1Umxf2FkQ1pgMWk2hW4IXTNHJXCKcsaEKdMKp3RVIg">
                <FaRegShareSquare />
                </a>
              </div>
            </div>
          </div>
          <a href="https://online-shoping-nepal.vercel.app/" className="btn">See more</a>
        </div>
      </div>


    </div>
  )
}

export default Project