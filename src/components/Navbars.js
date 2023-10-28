import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">SAMORZĄDOWE PRZEDSZKOLE NR 111 "POD MODRZEWIEM"</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">O Nas</Nav.Link>
          <Nav.Link href="#link">Nasze przedszkole</Nav.Link>
          <Nav.Link href="#link">Galeria</Nav.Link>
          <NavDropdown title="Grupy" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Grupa 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Grupa 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Grupa 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Grupa 4
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default Navbars