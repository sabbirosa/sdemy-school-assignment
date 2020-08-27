import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { Navbar, Nav, Button } from 'react-bootstrap';


const Header = () => {
    return (

<div>
  <Navbar className='my-nav' bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="nav-link" href="/courses">Courses</Nav.Link>
      <Nav.Link className="nav-link" href="/about">About Us</Nav.Link>
      <Nav.Link className="nav-link" href="/contact">Contact us</Nav.Link>
    </Nav>
  </Navbar>
 </div>
        
    );
};

export default Header;