
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand  navbar-${props.Mode} || navbar-${ props.redMode }   bg-${props.Mode} || bg-${props.redMode}`}>
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="\navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">


            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" herf="\">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" herf="\">AboutUs</a>
              </li>
            </ul>
            
          </div>
          <form>
            <div className={`form-check form-switch text-${props.Mode ==='light'?'dark':'light'}`}>
              <input className="form-check-input"  onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            
          </form>
 


        </div>
        
      </nav>


    </>

    
  )
}
