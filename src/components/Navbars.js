import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../img/logo.png'


function Navbars() {
  return (
    <Navbar expand="lg"  bg="light" data-bs-theme="light" >
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt='logo' 
             width="50"
              height="50"
              className="d-inline-block align-top"></img>
              
      </Navbar.Brand>
      <h3>Przedszkole pod " Modrzewiem " nr 111 w Krakowie</h3>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-right">
          <Nav.Link href="#home">O Nas</Nav.Link>
          <Nav.Link href="przedszkole">Nasze przedszkole</Nav.Link>
          <Nav.Link href="przedszkole">Informacje</Nav.Link>
          <Nav.Link href="#galeria">Galeria</Nav.Link>
          <Nav.Link href="#kontakt">Kontakt</Nav.Link>
          <NavDropdown title="Grupy" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Grupa 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Grupa 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Grupa 3</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Grupa 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default Navbars