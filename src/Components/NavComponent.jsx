import React from 'react'
import { tabLogo } from "../Assets/images/imagesIndex";

const NavComponent = () => {
  return (
    <div>
      <div className="div-before-nav">
        <img className="nav-logo" 
            src={tabLogo} alt="" 
          />
        <div>
          <h3>Dream Hunter</h3>
        </div>
      </div>
      {/* To be inserted */}
      <ul class="nav">
        <li class="nav-item">
          
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default NavComponent;