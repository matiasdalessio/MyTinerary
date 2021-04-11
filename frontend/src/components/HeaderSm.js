import React from "react";
import {NavLink} from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";


export default function HeaderSm() {
  return ( 
    <Navbar className="navbar responsiveNav" collapseOnSelect expand="lg" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="">
        <NavLink className="nav-link text-dark" exact to="/">Home</NavLink>
        <NavLink className="nav-link text-dark" exact to="/cities">Cities</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}