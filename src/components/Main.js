import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


import img1 from '../img/headerimg2.jpg'

import './main.css'


function Main() {
  return (
    <Container>
        <Row>
            <Col id='main' md={12} lg={12}>
                {/* <img src={img1} alt='przedszkole img'></img> */}
                <h1>Witamy na naszej Stronie !</h1>
                <h2></h2>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main