import React, {useState} from 'react'

import "./Navbar.css"
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [showLinks ,setShowLinks] = useState(false)
  return (
    <nav>
      <div className="nav-header">
        <div className="nav-img">
                  <img src="./Rectangle 3.png" className='logo' alt="" />  
                  <FaBars className='menu' onClick={()=> setShowLinks(!showLinks)} />

              </div>
        <ul  className={`${showLinks ? "linkcontainer show-links" :" linkcontainer "}`}>
          <li><a href="">Home</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Explore Foods</a></li>
          <li><a href="">Reviews</a></li>
          <li><a href="">FAQS</a></li>
          <li className='num'>08123567890</li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar