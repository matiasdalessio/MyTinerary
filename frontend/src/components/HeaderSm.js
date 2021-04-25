import React from "react";
import {NavLink} from 'react-router-dom'

export default function HeaderSm() {
  
  return ( 
      <ul className="animate__animated animate__fadeInLeft nav-item">
            <button style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/burger.png'})`}} className="nav-link responsiveNav " data-bs-toggle="dropdown" ></button>
            <ul className="dropdown-menu responsiveDropdown">
                <li><NavLink className="dropdown-item " exact to="/">Home</NavLink></li>
                <li><NavLink className="dropdown-item " exact to="/Cities">Cities</NavLink></li>
            </ul>
      </ul> 
  );
}