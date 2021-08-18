import React, { Component } from 'react';
 import { Navbar, Nav, NavItem } from 'react-bootstrap';
 // To use routing functionalities
 import { Link } from 'react-router-dom';
 import '../index.css';
 
 class Header extends Component {
 render() {
 return (
 <div>
 <Navbar>
 
 <Nav>
 <NavItem href="javascript:void(0)">
 <Link to="/">Home</Link>
 </NavItem>
 <NavItem href="javascript:void(0)">
 <Link to="/addemployee">Add New Employee</Link>
 </NavItem>
 </Nav>
 </Navbar>
 </div>
 );
 }
 }
export default Header;