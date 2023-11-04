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
                
                <div className='main-info'>
                    <h1> " Przedszkole to drugi dom</h1>
                    <h2>w którym Wasze dzieci <br></br> 
                      spędzają dużo czasu, uczą się i rozwijają, <br></br>
                      a nauczyciele pełnią rolę rodziców... "
                    </h2>
                </div>
              
                
            </Col>
        </Row>
    </Container>
  )
}

export default Main