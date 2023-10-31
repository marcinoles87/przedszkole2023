import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import im1 from '../img/kids2.jpg'


function Galeria() {

 const  [modal , setModal] = useState(false)

  const handleOnClick = (e) => {
    setModal(!modal)

  }

  return (
    <div id='gallery'>
      <Container>
        <Row>
          <Col>
            <h1 className='gallery-head'>Galeria naszego przedszkola</h1>
          </Col>
        </Row>

          <Row>
            <Col>
            <div className='gallery-container'>
          
              <img id='gallery-img1' src={im1} alt='1' onClick={handleOnClick}></img>
              <img src={im1} alt='2' onClick={handleOnClick}></img>
              <img src={im1} alt='3' onClick={handleOnClick}></img>
              <img src={im1} alt='4' onClick={handleOnClick}></img>
              <img src={im1} alt='5' onClick={handleOnClick}></img>
              <img src={im1} alt='6' onClick={handleOnClick}></img>
              <img src={im1} alt='7' onClick={handleOnClick}></img>
              <img src={im1} alt='8' onClick={handleOnClick}></img>
             
              
            </div>
            </Col>
          </Row>
        
      </Container>
    </div>
  )
}

export default Galeria