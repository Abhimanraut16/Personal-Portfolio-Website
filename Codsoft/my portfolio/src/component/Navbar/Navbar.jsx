import React from 'react'
import './navbar.css'
import './media.css'
import { Link } from 'react-router-dom'
function Navbar() {

  return (
    <div>
      <div id="header">
        <div className="container ">

          <div>
            <nav className="navbar navbar-expand-lg nav">
              <div className="container-fluid ">
                <Link className="navbar-brand fw-semibold fs-2" to="/"><span>Abhu</span>manu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <li className="nav-item ">
                      <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/project">Project</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>

          </div>

          <div className="header-text">
            <p>Frontend developer</p>
            <h1>Hi, I'm <span>Avimanu</span> <br /> From Nepal</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar