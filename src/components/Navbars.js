import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo1.jpg';
import { Link } from 'react-router-dom';




function Navbars() {

  
  return (
    <Navbar expand="lg"  bg="success" data-bs-theme="dark" >
    <Container id='nav-container'>
      <Navbar.Brand href="#home">
        <img src={logo} alt='logo' 
             width="50"
              height="50"
              className="d-inline-block align-top"></img>
              
      </Navbar.Brand>
      <h3 style={{color:'white'}}>Samorządowe Przedszkole "Pod Modrzewiem" nr 111 w Krakowie</h3>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-right">
          
          
          <Nav.Link href="#about" >Nasze przedszkole</Nav.Link>
          <Nav.Link href="#info">Informacje</Nav.Link>
          <Nav.Link href="#gallery">Galeria</Nav.Link>
          <Nav.Link href="#jadlospis">Jadłospis</Nav.Link>
          <Nav.Link href="/rekrutacja"><Link to={'/rekrutacja'} className='navbar-link'>Rekrutacja</Link></Nav.Link>
          <NavDropdown title="Grupy" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to={'/grupa1'} className='navbar-link'>Grupa 1</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/grupa2'} className='navbar-link'>Grupa 2 </Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/grupa3'} className='navbar-link'>Grupa 3</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={'/grupa4'} className='navbar-link'>Grupa 4</Link></NavDropdown.Item>
          </NavDropdown> 
          <Nav.Link href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default Navbars